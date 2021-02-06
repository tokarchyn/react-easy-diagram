import { makeAutoObservable } from 'mobx';
import { Dictionary, TrueOrFalseWithError } from '../types/common';
import { LinkCreationState } from './linkCreationState';
import { ILinkPortEndpoint } from './linkPortEndpointState';
import { ILinkState, LinkState } from './linkState';
import { RootStore } from './rootStore';

export class LinksStore {
  links: Dictionary<LinkState> = {};
  nodesLinksCollection: Dictionary<LinkState[]> = {};

  linkCreation: LinkCreationState;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.linkCreation = new LinkCreationState(rootStore);
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fromJson = (newLinks?: ILinkState[]) => {
    this.links = {};
    this.nodesLinksCollection = {};
    if (newLinks) {
      newLinks.forEach((linkState) => {
        this.addLinkFromData(linkState);
      });
    }
  };

  getNodeLinks = (nodeId: string): LinkState[] => {
    return this.nodesLinksCollection[nodeId] ?? [];
  };

  addLinkFromData = (link: ILinkState): TrueOrFalseWithError => {
    const linkState = new LinkState(this.rootStore, link);
    return this.addLink(linkState);
  };

  addLink = (link: LinkState): TrueOrFalseWithError => {
    const canAdd = this.canAddLink(link);
    if (!canAdd.result) return canAdd;

    this.links[link.id] = link;

    this._addLinkToNodeLinksCollection(link, link.source.nodeId);
    this._addLinkToNodeLinksCollection(link, link.target.nodeId);

    return { result: true };
  };

  canAddLink = (link: ILinkState): TrueOrFalseWithError => {
    if (link.id && this.links[link.id]) {
      return {
        result: false,
        error: `Cannot add link with id '${link.id}', as it already exists`,
      };
    }

    const isSourceValid = this.isEndpointValid(link.source);
    if (!isSourceValid.result) return isSourceValid;
    const isTargetValid = this.isEndpointValid(link.target);
    if (!isTargetValid.result) return isTargetValid;

    if (link.source.nodeId === link.target.portId) {
      return {
        result: false,
        error: `Link's endpoints are located in the same node`,
      };
    }

    if (this.areEndpointsConnected(link.source, link.target)) {
      return { result: false, error: `Link's endpoints are already connected` };
    }

    return { result: true };
  };

  isEndpointValid = (endpoint: ILinkPortEndpoint): TrueOrFalseWithError => {
    try {
      this.rootStore.nodesStore
        .getNodeOrThrowException(endpoint.nodeId)
        .getPortOrThrowException(endpoint.portId);
    } catch (ex) {
      return { result: false, error: '' + ex };
    }

    return { result: true };
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
    if (this.nodesLinksCollection[source.nodeId]) {
      return this.nodesLinksCollection[source.nodeId].find(
        (l) =>
          l.source.portId === source.portId &&
          l.target.nodeId === target.nodeId &&
          l.target.portId === target.portId
      );
    }
  }

  private _addLinkToNodeLinksCollection(link: LinkState, nodeId: string) {
    if (!this.nodesLinksCollection[nodeId])
      this.nodesLinksCollection[nodeId] = [];
    this.nodesLinksCollection[nodeId].push(link);
  }
}
