import { makeAutoObservable } from 'mobx';
import { LinkCreationState } from 'states/linkCreationState';
import {
  ILinkPortEndpoint,
  linkPortEndpointsEquals,
} from 'states/linkPortEndpointState';
import { ILinkState, ILinkStateWithId, LinkState } from 'states/linkState';
import { createFullPortId, PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { guidForcedUniqueness } from 'utils/guid';
import {
  errorResult,
  errorValueResult,
  isError,
  isSuccess,
  SuccessOrErrorResult,
  successResult,
  successValueResult,
} from 'utils/result';

export class LinksStore {
  private _links: Map<string, LinkState>;
  private _nodesLinksCollection: Map<string, LinkState[]>;
  private _linkCreation: LinkCreationState;

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._linkCreation = new LinkCreationState(rootStore);
    this.import();
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  import = (newLinks?: ILinkState[]) => {
    this._links = new Map();
    this._nodesLinksCollection = new Map();

    if (newLinks) {
      let results = this._addLinksInternal(newLinks, false);

      this._rootStore.callbacks.linksAdded({
        addedLinks: results.filter(isSuccess).map((r) => r.value),
        failedToAddLinks: results.filter(isError),
        importing: true,
      });
    }
  };

  export = (): ILinkState[] =>
    Array.from(this._links).map(([key, value]) => value.export());

  get links(): ReadonlyMap<string, LinkState> {
    return this._links;
  }

  get linkCreation() {
    return this._linkCreation;
  }

  getNodeLinks = (nodeId: string): LinkState[] => {
    return this._nodesLinksCollection.get(nodeId) ?? [];
  };

  getLink = (id: string): LinkState | undefined => {
    return this.links.get(id);
  };

  getPortLinks = (nodeId: string, portId: string): LinkState[] => {
    const nodeLinks = this.getNodeLinks(nodeId);
    const fullPortId = createFullPortId(nodeId, portId);
    return nodeLinks.filter(
      (l) =>
        (l.source && l.source.port.fullId === fullPortId) ||
        (l.target && l.target.port.fullId === fullPortId)
    );
  };

  addLinks = (
    links: ILinkState[],
    rewriteIfAlreadyConnected: boolean = false
  ): SuccessOrErrorResult<LinkState, ILinkState>[] => {
    let results = this._addLinksInternal(links, rewriteIfAlreadyConnected);

    this._rootStore.callbacks.linksAdded({
      addedLinks: results.filter(isSuccess).map((r) => r.value),
      failedToAddLinks: results.filter(isError),
      importing: false,
    });

    return results;
  };

  addLink = (
    link: ILinkState,
    rewriteIfAlreadyConnected: boolean = false
  ): SuccessOrErrorResult<LinkState, ILinkState> => {
    const result = this._addLinkInternal(link, rewriteIfAlreadyConnected);

    this._rootStore.callbacks.linksAdded({
      addedLinks: result.success ? [result.value] : [],
      failedToAddLinks: result.success ? [] : [result],
      importing: false,
    });

    return result;
  };

  removeLink = (linkId: string): ILinkStateWithId | undefined => {
    const removedLink = this._removeLink(linkId);

    this._rootStore.callbacks.linksRemoved({
      removedLinks: removedLink ? [removedLink] : [],
      failedToRemoveLinkIds: removedLink ? [] : [linkId],
    });

    return removedLink;
  };

  removeLinks = (
    linkIds: string[]
  ): SuccessOrErrorResult<ILinkStateWithId, string>[] => {
    let results = this._removeLinks(linkIds);

    this._rootStore.callbacks.linksRemoved({
      removedLinks: results.filter(isSuccess).map((r) => r.value),
      failedToRemoveLinkIds: results.filter(isError).map((r) => r.value),
    });

    return results;
  };

  removeNodeLinks = (nodeId: string) => {
    const linkIds = this.getNodeLinks(nodeId).map((l) => l.id);
    this.removeLinks(linkIds);
  };

  removePortLinks = (nodeId: string, portId: string) => {
    if (!nodeId || !portId) return;

    const endpointToRemove = {
      nodeId,
      portId,
    };
    const linkIds = this.getNodeLinks(nodeId)
      .filter(
        (l) =>
          linkPortEndpointsEquals(l.sourceEndpoint, endpointToRemove) ||
          linkPortEndpointsEquals(l.targetEndpoint, endpointToRemove)
      )
      .map((l) => l.id);
    this.removeLinks(linkIds);
  };

  validateLink = (
    link: ILinkState,
    ignoreIfAlreadyConnected: boolean = false
  ): SuccessOrErrorResult => {
    const propsValidationResult = this.validateLinkProperties(link);
    if (!propsValidationResult.success) return propsValidationResult;

    const sourcePortResult = this.getEndpointPortOrError(link.source);
    if (!sourcePortResult.success) return sourcePortResult;
    const targetPortResult = this.getEndpointPortOrError(link.target);
    if (!targetPortResult.success) return targetPortResult;

    if (
      !ignoreIfAlreadyConnected &&
      this.areEndpointsConnected(link.source, link.target)
    )
      return errorResult(`Link's endpoints are already connected`);

    if (
      this._rootStore.callbacks.linkValidation({
        source: sourcePortResult.value,
        target: targetPortResult.value,
      }) === false
    ) {
      return errorResult(
        `Link's endpoints are not valid according to validation callback`
      );
    }

    return successResult();
  };

  validateLinkProperties = (link: ILinkState): SuccessOrErrorResult => {
    if (!link) return errorResult(`Cannot add empty`);
    if (link.id && typeof link.id !== 'string')
      return errorResult(
        `Cannot add link with id '${link.id}' of type different than 'string'`
      );
    if (link.id && this._links.has(link.id))
      return errorResult(
        `Cannot add link with id '${link.id}' because link with this id already exists`
      );

    if (link.source.nodeId === link.target.nodeId)
      return errorResult(`Link's endpoints are located in the same node`);

    return successResult();
  };

  getEndpointPortOrError = (
    endpoint: ILinkPortEndpoint
  ): SuccessOrErrorResult<PortState> => {
    const node = this._rootStore.nodesStore.getNode(endpoint.nodeId);
    if (!node)
      return errorResult(
        `Node '${endpoint.nodeId}' of link's endpoint does not exist`
      );
    const port = node.getPort(endpoint.portId);
    if (!port)
      return errorResult(
        `Port with id '${endpoint.portId}' does not exist in the node '${endpoint.nodeId}'`
      );

    return successValueResult(port);
  };

  getEndpointPort = (endpoint: ILinkPortEndpoint): PortState | undefined => {
    return this._rootStore.nodesStore
      .getNode(endpoint.nodeId)
      ?.getPort(endpoint.portId);
  };

  areEndpointsConnected = (
    source: ILinkPortEndpoint,
    target: ILinkPortEndpoint
  ): boolean => {
    return !!this.getLinkForEndpointsIfExists(source, target);
  };

  getLinkForEndpointsIfExists = (
    source: ILinkPortEndpoint,
    target: ILinkPortEndpoint
  ): LinkState | undefined => {
    const links = this._nodesLinksCollection.get(source.nodeId);
    if (links) {
      return links.find(
        (l) =>
          (linkPortEndpointsEquals(l.sourceEndpoint, source) &&
            linkPortEndpointsEquals(l.targetEndpoint, target)) ||
          (linkPortEndpointsEquals(l.targetEndpoint, source) &&
            linkPortEndpointsEquals(l.sourceEndpoint, target))
      );
    }
  };

  private _addLinksInternal = (
    links: ILinkState[],
    rewriteIfAlreadyConnected: boolean
  ): SuccessOrErrorResult<LinkState, ILinkState>[] => {
    let results = links.map((link) =>
      this._addLinkInternal(link, rewriteIfAlreadyConnected)
    );
    return results;
  };

  private _addLinkInternal = (
    link: ILinkState,
    rewriteIfAlreadyConnected: boolean
  ): SuccessOrErrorResult<LinkState, ILinkState> => {
    const validationResult = this.validateLink(link, rewriteIfAlreadyConnected);
    if (!validationResult.success) {
      return errorValueResult(link, validationResult.error);
    }

    if (rewriteIfAlreadyConnected) {
      const existedLink = this.getLinkForEndpointsIfExists(
        link.source,
        link.target
      );
      if (existedLink) {
        this._removeLink(existedLink.id);
      }
    }

    const newLink = new LinkState(
      this._rootStore,
      link.id ?? guidForcedUniqueness((id) => this._links.has(id)),
      link
    );
    this._links.set(newLink.id, newLink);
    this._addLinkToNodeLinksCollection(newLink, link.source.nodeId);
    this._addLinkToNodeLinksCollection(newLink, link.target.nodeId);

    return successValueResult(newLink);
  };

  private _addLinkToNodeLinksCollection = (link: LinkState, nodeId: string) => {
    let links = this._nodesLinksCollection.get(nodeId);
    if (!links) {
      this._nodesLinksCollection.set(nodeId, [link]);
    } else if (!links.includes(link)) {
      links.push(link);
    }
  };

  private _removeLinks = (
    linkIds: string[]
  ): SuccessOrErrorResult<ILinkStateWithId, string>[] => {
    return linkIds.map((id) => {
      const removedLink = this._removeLink(id);
      if (removedLink) return successValueResult(removedLink);
      else return errorValueResult(id);
    });
  };

  private _removeLink = (linkId: string): ILinkStateWithId | undefined => {
    const linkToRemove = this._links.get(linkId);
    if (linkToRemove) {
      const linkState = linkToRemove.export();

      this._removeLinkFromNodeLinksCollection(
        linkToRemove.id,
        linkToRemove.sourceEndpoint.nodeId
      );
      this._removeLinkFromNodeLinksCollection(
        linkToRemove.id,
        linkToRemove.targetEndpoint.nodeId
      );

      this._rootStore.selectionState.unselect(linkToRemove);
      this._links.delete(linkId);
      return linkState;
    }

    return undefined;
  };

  private _removeLinkFromNodeLinksCollection = (
    linkId: string,
    nodeId: string
  ) => {
    let collection = this._nodesLinksCollection.get(nodeId);
    if (collection) {
      collection = collection.filter((l) => l.id !== linkId);
      if (collection.length > 0) {
        this._nodesLinksCollection.set(nodeId, collection);
      } else {
        this._nodesLinksCollection.delete(nodeId);
      }
    }
  };
}
