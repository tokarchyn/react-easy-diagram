import { makeAutoObservable } from 'mobx';
import {
  Dictionary,
  ErrorResult,
  SuccessOrErrorResult,
  SuccessResult,
} from '../types/common';
import { guidForcedUniqueness } from '../utils';
import { LinkCreationState } from './linkCreationState';
import {
  ILinkPortEndpoint,
  linkPortEndpointsEquals,
} from './linkPortEndpointState';
import { ILinkState, LinkState } from './linkState';
import { PortState } from './portState';
import { RootStore } from './rootStore';

export class LinksStore {
  private _links: Dictionary<LinkState>;
  private _nodesLinksCollection: Dictionary<LinkState[]>;
  private _linkCreation: LinkCreationState;

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._linkCreation = new LinkCreationState(rootStore);
    this.import();
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  import = (newLinks?: ILinkState[]) => {
    this._links = {};
    this._nodesLinksCollection = {};
    newLinks && newLinks.forEach(this.addLink);
  };

  export = (): ILinkState[] =>
    Object.values(this._links).map((l) => l.export());

  get links(): Readonly<Dictionary<LinkState>> {
    return this._links;
  }

  get linkCreation() {
    return this._linkCreation;
  }

  getNodeLinks = (nodeId: string): LinkState[] => {
    return this._nodesLinksCollection[nodeId] ?? [];
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

  addLink = (link: ILinkState): SuccessOrErrorResult => {
    const canAdd = this.canAddLink(link);
    if (!canAdd.success) return canAdd;

    const newLink = new LinkState(
      this._rootStore,
      link.id ?? guidForcedUniqueness(this._links),
      link
    );
    this._links[newLink.id] = newLink;
    this._addLinkToNodeLinksCollection(newLink, link.source.nodeId);
    this._addLinkToNodeLinksCollection(newLink, link.target.nodeId);

    return { success: true };
  };

  removeLink = (linkId: string): boolean => {
    const linkToRemove = this._links[linkId];
    if (linkToRemove) {
      this._removeLinkFromNodeLinksCollection(
        linkToRemove,
        linkToRemove.source.nodeId
      );
      this._removeLinkFromNodeLinksCollection(
        linkToRemove,
        linkToRemove.target.nodeId
      );

      delete this._links[linkId];
      return true;
    }

    return false;
  };

  canAddLink = (link: ILinkState): SuccessOrErrorResult => {
    if (!link) return ErrorResult(`Cannot add empty`);
    if (link.id && this._links[link.id])
      return ErrorResult(
        `Cannot add link with id '${link.id}', as it already exists`
      );

    const isSourceValid = this.isEndpointValid(link.source);
    if (!isSourceValid.success) return isSourceValid;
    const isTargetValid = this.isEndpointValid(link.target);
    if (!isTargetValid.success) return isTargetValid;

    if (link.source.nodeId === link.target.nodeId)
      return ErrorResult(`Link's endpoints are located in the same node`);

    if (this.areEndpointsConnected(link.source, link.target))
      return ErrorResult(`Link's endpoints are already connected`);

    if (
      this._rootStore.callbacks.validateLinkEndpoints?.(
        this.getEndpointPort(link.source),
        this.getEndpointPort(link.target),
        this._rootStore
      ) === false
    ) {
      return ErrorResult(
        `Link's endpoints are not valid according to validation callback`
      );
    }

    return SuccessResult();
  };

  isEndpointValid = (endpoint: ILinkPortEndpoint): SuccessOrErrorResult => {
    try {
      this.getEndpointPort(endpoint);
    } catch (ex) {
      return ErrorResult('' + ex);
    }

    return SuccessResult();
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
    if (this._nodesLinksCollection[source.nodeId]) {
      return this._nodesLinksCollection[source.nodeId].find(
        (l) =>
          (linkPortEndpointsEquals(l.source, source) &&
            linkPortEndpointsEquals(l.target, target)) ||
          (linkPortEndpointsEquals(l.target, source) &&
            linkPortEndpointsEquals(l.source, target))
      );
    }
  }

  private _addLinkToNodeLinksCollection = (link: LinkState, nodeId: string) => {
    if (!this._nodesLinksCollection[nodeId])
      this._nodesLinksCollection[nodeId] = [];
    this._nodesLinksCollection[nodeId].push(link);
  }

  private _removeLinkFromNodeLinksCollection = (link: LinkState, nodeId: string) => {
    let collection = this._nodesLinksCollection[nodeId];
    if (collection) {
      collection = collection.filter((l) => l.id === link.id);
      if (collection.length > 0) {
        this._nodesLinksCollection[nodeId] = collection;
      } else {
        delete this._nodesLinksCollection[nodeId];
      }
    }
  }
}
