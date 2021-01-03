import { Dictionary } from '../types/common';
import { makeAutoObservable, observable } from 'mobx';
import { INodeState, NodeState } from './nodeState';
import { RootStore } from './rootStore';
import { v4 } from 'uuid';

export class NodesStore {
  nodes: Dictionary<NodeState> = {};

  // rootStore: RootStore;

  constructor() {
    makeAutoObservable(this);
    // this.rootStore = rootStore;
  }

  fromJson = (newNodes: INodeState[]) => {
    this.nodes = {};
    if (newNodes) {
      newNodes.forEach(node => {
        const newNode = new NodeState(node.id);
        newNode.fromJson(node);
        this.nodes[newNode.id] = newNode;
      });
    }
  }

  addNode = (node: INodeState) => {
    const id = node.id ?? v4();

    if (!this.nodes[id]) {
      this.nodes[id] = new NodeState(id);
    }
    
    this.nodes[id].fromJson(node);
  }
}
