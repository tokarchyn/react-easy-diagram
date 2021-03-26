import { makeAutoObservable } from 'mobx';
import {
  errorResult,
  SuccessOrErrorResult,
  successResult,
  successValueResult,
} from '../types/common';
import { guidForcedUniqueness } from '../utils';
import { LinkCreationState } from './linkCreationState';
import {
  ILinkPortEndpoint,
  linkPortEndpointsEquals,
} from './linkPortEndpointState';
import { ILinkState, LinkState } from './linkState';
import { createFullPortId, PortState } from './portState';
import { RootStore } from './rootStore';

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
    newLinks && newLinks.forEach(this.addLink);
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

  getPortLinks = (nodeId: string, portId: string): LinkState[] => {
    const nodeLinks = this.getNodeLinks(nodeId);
    const fullPortId = createFullPortId(nodeId, portId);
    return nodeLinks.filter(
      (l) =>
        l.source.port.fullId === fullPortId ||
        l.target.port.fullId === fullPortId
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
        linkPortEndpointsEquals(l.source, endpointToRemove) ||
        linkPortEndpointsEquals(l.target, endpointToRemove)
      ) {
        this.removeLink(l.id);
      }
    });
  };

  addLink = (link: ILinkState): SuccessOrErrorResult<LinkState> => {
    const canAdd = this.canAddLink(link);
    if (!canAdd.success) return canAdd;

    const newLink = new LinkState(
      this._rootStore,
      link.id ?? guidForcedUniqueness(this._links),
      link
    );
    this._links.set(newLink.id, newLink);
    this._addLinkToNodeLinksCollection(newLink, link.source.nodeId);
    this._addLinkToNodeLinksCollection(newLink, link.target.nodeId);

    return successValueResult(newLink);
  };

  removeLink = (linkId: string): boolean => {
    const linkToRemove = this._links.get(linkId);
    if (linkToRemove) {
      this._removeLinkFromNodeLinksCollection(
        linkToRemove,
        linkToRemove.source.nodeId
      );
      this._removeLinkFromNodeLinksCollection(
        linkToRemove,
        linkToRemove.target.nodeId
      );

      this._rootStore.selectionState.unselect(linkToRemove);
      this._links.delete(linkId);
      return true;
    }

    return false;
  };

  canAddLink = (link: ILinkState): SuccessOrErrorResult => {
    if (!link) return errorResult(`Cannot add empty`);
    if (link.id && this._links.has(link.id))
      return errorResult(
        `Cannot add link with id '${link.id}', as it already exists`
      );

    const isSourceValid = this.isEndpointValid(link.source);
    if (!isSourceValid.success) return isSourceValid;
    const isTargetValid = this.isEndpointValid(link.target);
    if (!isTargetValid.success) return isTargetValid;

    if (link.source.nodeId === link.target.nodeId)
      return errorResult(`Link's endpoints are located in the same node`);

    if (this.areEndpointsConnected(link.source, link.target))
      return errorResult(`Link's endpoints are already connected`);

    if (
      this._rootStore.callbacks.validateLinkEndpoints?.(
        this.getEndpointPort(link.source),
        this.getEndpointPort(link.target),
        this._rootStore
      ) === false
    ) {
      return errorResult(
        `Link's endpoints are not valid according to validation callback`
      );
    }

    return successResult();
  };

  isEndpointValid = (endpoint: ILinkPortEndpoint): SuccessOrErrorResult => {
    try {
      this.getEndpointPort(endpoint);
    } catch (ex) {
      return errorResult('' + ex);
    }

    return successResult();
  };

  getEndpointPort = (endpoint: ILinkPortEndpoint): PortState => {
    return this._rootStore.nodesStore
      .getNodeOrThrowException(endpoint.nodeId)
      .getPortOrThrowException(endpoint.portId);
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
          (linkPortEndpointsEquals(l.source, source) &&
            linkPortEndpointsEquals(l.target, target)) ||
          (linkPortEndpointsEquals(l.target, source) &&
            linkPortEndpointsEquals(l.source, target))
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
    link: LinkState,
    nodeId: string
  ) => {
    let collection = this._nodesLinksCollection.get(nodeId);
    if (collection) {
      collection = collection.filter((l) => l.id !== link.id);
      if (collection.length > 0) {
        this._nodesLinksCollection.set(nodeId, collection);
      } else {
        this._nodesLinksCollection.delete(nodeId);
      }
    }
  };
}
