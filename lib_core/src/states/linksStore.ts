import { makeAutoObservable, observable } from 'mobx';
import { v4 } from 'uuid';
import { Dictionary } from '../types/common';
import { LinkCreationState } from './linkCreationState';
import { ILinkState, LinkState } from './linkState';
import { PortState } from './portState';
import { RootStore } from './rootStore';

export class LinksStore {
  links: Dictionary<LinkState> = {};
  linkCreation: LinkState | null = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
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

  startLinking(portState: PortState) {
    this.linkCreation = new LinkState(this.rootStore);
    this.linkCreation.setSource({
      nodeId: portState.nodeId,
      portId: portState.id
    })
    this.linkCreation.setTarget({
      position: this.linkCreation.sourcePoint
    })
  }

  stopLinking() {
    this.linkCreation = null;
  }
}
