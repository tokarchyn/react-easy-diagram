import { makeAutoObservable } from 'mobx';
import { v4 } from 'uuid';
import { Dictionary, TrueOrFalseWithError } from '../types/common';
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

  linkCreation: LinkCreationState;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.linkCreation = new LinkCreationState(rootStore);
    this.import();
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  import = (newLinks?: ILinkState[]) => {
    this._links = {};
    this._nodesLinksCollection = {};
    newLinks && newLinks.forEach(this.addLink);
  };

  get links(): Readonly<Dictionary<LinkState>> {
    return this._links;
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

  addLink = (link: ILinkState): TrueOrFalseWithError => {
    const canAdd = this.canAddLink(link);
    if (!canAdd.result) return canAdd;

    const newLink = new LinkState(this.rootStore, link.id ?? v4(), link);
    this._links[newLink.id] = newLink;
    this._addLinkToNodeLinksCollection(newLink, link.source.nodeId);
    this._addLinkToNodeLinksCollection(newLink, link.target.nodeId);

    return { result: true };
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

  canAddLink = (link: ILinkState): TrueOrFalseWithError => {
    if (!link) return {
      result: false,
      error: `Cannot add empty`,
    }
    if (link.id && this._links[link.id]) return {
      result: false,
      error: `Cannot add link with id '${link.id}', as it already exists`,
    };

    const isSourceValid = this.isEndpointValid(link.source);
    if (!isSourceValid.result) return isSourceValid;
    const isTargetValid = this.isEndpointValid(link.target);
    if (!isTargetValid.result) return isTargetValid;

    if (link.source.nodeId === link.target.nodeId) {
      return {
        result: false,
        error: `Link's endpoints are located in the same node`,
      };
    }

    if (this.areEndpointsConnected(link.source, link.target)) {
      return { result: false, error: `Link's endpoints are already connected` };
    }

    if (
      this.rootStore.callbacks.validateLinkEndpoints?.(
        this.getEndpointPort(link.source),
        this.getEndpointPort(link.target),
        this.rootStore
      ) === false
    ) {
      return {
        result: false,
        error: `Link's endpoints are not valid according to validation callback`,
      };
    }

    return { result: true };
  };

  isEndpointValid = (endpoint: ILinkPortEndpoint): TrueOrFalseWithError => {
    try {
      this.getEndpointPort(endpoint);
    } catch (ex) {
      return { result: false, error: '' + ex };
    }

    return { result: true };
  };

  getEndpointPort = (endpoint: ILinkPortEndpoint): PortState => {
    return this.rootStore.nodesStore
      .getNodeOrThrowException(endpoint.nodeId)
      .getPortOrThrowException(endpoint.portId);
  };

  areEndpointsConnected = (
    source: ILinkPortEndpoint,
    target: ILinkPortEndpoint
  ): boolean => {
    return !!this.getLinkForEndpointsIfExists(source, target);
  };

  getLinkForEndpointsIfExists(
    source: ILinkPortEndpoint,
    target: ILinkPortEndpoint
  ): LinkState | undefined {
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

  private _addLinkToNodeLinksCollection(link: LinkState, nodeId: string) {
    if (!this._nodesLinksCollection[nodeId])
      this._nodesLinksCollection[nodeId] = [];
    this._nodesLinksCollection[nodeId].push(link);
  }

  private _removeLinkFromNodeLinksCollection(link: LinkState, nodeId: string) {
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
