import { makeAutoObservable } from 'mobx';
import { v4 } from 'uuid';
import { Dictionary } from '../types/common';
import { LinkCreationState } from './linkCreationState';
import { ILinkState, LinkState } from './linkState';
import { RootStore } from './rootStore';

export class LinksStore {
  links: Dictionary<LinkState> = {};
  linkCreation: LinkCreationState;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.linkCreation = new LinkCreationState(rootStore);
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fromJson = (newLinks: ILinkState[]) => {
    this.links = {};
    if (newLinks) {
      newLinks.forEach((linkState) => {
        const newLink = new LinkState(this.rootStore, linkState.id);
        newLink.fromJson(linkState);
        this.links[newLink.id] = newLink;
      });
    }
  };

  addLinkFromJson = (link: ILinkState) => {
    const id = link.id ?? v4();

    if (!this.links[id]) {
      this.links[id] = new LinkState(this.rootStore, id);
    }

    this.links[id].fromJson(link);
  };

  addLink = (link: LinkState) => {
    this.links[link.id] = link;
  };
}
