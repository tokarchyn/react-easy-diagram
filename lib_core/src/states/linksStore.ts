import { makeAutoObservable } from 'mobx';
import { v4 } from 'uuid';
import { Dictionary } from '../types/common';
import { ILinkState, LinkState } from './linkState';
import { RootStore } from './rootStore';

export class LinksStore {
  links: Dictionary<LinkState> = {};

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, { rootStore: false });
  }

  fromJson = (newLinks: ILinkState[]) => {
    this.links = {};
    if (newLinks) {
      newLinks.forEach(linkState => {
        const newLink = new LinkState(this.rootStore, linkState.id);
        newLink.fromJson(linkState);
        this.links[newLink.id] = newLink;
      });
    }
  }

  addLink = (link: ILinkState) => {
    const id = link.id ?? v4();

    if (!this.links[id]) {
      this.links[id] = new LinkState(this.rootStore, id);
    }
    
    this.links[id].fromJson(link);
  }
}
