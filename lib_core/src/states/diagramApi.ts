import { makeAutoObservable } from 'mobx';
import { ILinkState } from './linkState';
import { INodeState } from './nodeState';
import { RootStore } from './rootStore';

export class DiagramApi {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    console.log('Create diagram api')
    this.rootStore = rootStore;
  }

  addNode = (node: INodeState) => {
    this.rootStore.nodesStore.addNode(node);
  }

  reinitState = (nodes: INodeState[], links: ILinkState[]) => {
    this.rootStore.nodesStore.fromJson(nodes);
    this.rootStore.linksStore.fromJson(links);
  }
}
