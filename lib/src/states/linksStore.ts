import { makeAutoObservable } from 'mobx';
import {
  SuccessOrErrorResult,
  successValueResult,
  errorResult,
  successResult,
} from 'utils/result';
import { guidForcedUniqueness } from 'utils/guid';
import { LinkCreationState } from 'states/linkCreationState';
import {
  linkPortEndpointsEquals,
  ILinkPortEndpoint,
} from 'states/linkPortEndpointState';
import { LinkState, ILinkState } from 'states/linkState';
import { createFullPortId, PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';

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
    // do not check existence of link's ports as they could be added after first node rendering
    newLinks &&
      newLinks.forEach((link) => {
        if (this.validateLinkProperties(link)) {
          this.addLink(link);
        }
      });
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

  removeNodeLinks = (nodeId: string) => {
    const links = this.getNodeLinks(nodeId);
    links.forEach((l) => this.removeLink(l.id));
  };

  removePortLinks = (nodeId: string, portId: string) => {
    if (!nodeId || !portId) return;

    const links = this.getNodeLinks(nodeId);
    const endpointToRemove = {
      nodeId,
      portId,
    };
    links.forEach((l) => {
      if (
        linkPortEndpointsEquals(l.sourceEndpoint, endpointToRemove) ||
        linkPortEndpointsEquals(l.targetEndpoint, endpointToRemove)
      ) {
        this.removeLink(l.id);
      }
    });
  };

  addLink = (link: ILinkState): LinkState => {
    const newLink = new LinkState(
      this._rootStore,
      link.id ?? guidForcedUniqueness((id) => this._links.has(id)),
      link
    );
    this._links.set(newLink.id, newLink);
    this._addLinkToNodeLinksCollection(newLink, link.source.nodeId);
    this._addLinkToNodeLinksCollection(newLink, link.target.nodeId);

    return newLink;
  };

  validateAndAddLink = (link: ILinkState): SuccessOrErrorResult<LinkState> => {
    const canAdd = this.validateLink(link);
    if (!canAdd.success) return canAdd;

    const newlyCreatedLink = this.addLink(link);

    return successValueResult(newlyCreatedLink);
  };

  removeLink = (linkId: string): boolean => {
    const linkToRemove = this._links.get(linkId);
    if (linkToRemove) {
      this._removeLinkFromNodeLinksCollection(
        linkToRemove.id, linkToRemove.sourceEndpoint.nodeId
      );
      this._removeLinkFromNodeLinksCollection(
        linkToRemove.id, linkToRemove.targetEndpoint.nodeId
      );

      this._rootStore.selectionState.unselect(linkToRemove);
      this._links.delete(linkId);
      return true;
    }

    return false;
  };

  validateLink = (link: ILinkState): SuccessOrErrorResult => {
    const propsValidationResult = this.validateLinkProperties(link);
    if (!propsValidationResult.success) return propsValidationResult;

    const sourcePortResult = this.getEndpointPortOrError(link.source);
    if (!sourcePortResult.success) return sourcePortResult;
    const targetPortResult = this.getEndpointPortOrError(link.target);
    if (!targetPortResult.success) return targetPortResult;

    if (this.areEndpointsConnected(link.source, link.target))
      return errorResult(`Link's endpoints are already connected`);

    if (
      this._rootStore.callbacks.validateLinkEndpoints?.(
        sourcePortResult.value,
        targetPortResult.value
      ) === false
    ) {
      return errorResult(
        `Link's endpoints are not valid according to validation callback`
      );
    }

    return successResult();
  };

  validateLinkProperties = (link: ILinkState): SuccessOrErrorResult => {
    if (!link) return errorResult(`Cannot add empty`);
    if (link.id && typeof link !== 'string')
      return errorResult(
        `Cannot add link with id '${link.id}' of type different than 'string'`
      );
    if (link.id && this._links.has(link.id))
      return errorResult(
        `Cannot add link with id '${link.id}', as it already exists`
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

  private _addLinkToNodeLinksCollection = (link: LinkState, nodeId: string) => {
    let links = this._nodesLinksCollection.get(nodeId);
    if (!links) {
      this._nodesLinksCollection.set(nodeId, [link]);
    } else {
      links.push(link);
    }
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
