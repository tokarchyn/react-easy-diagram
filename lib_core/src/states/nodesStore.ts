import { Dictionary } from '../types/common';
import { makeAutoObservable } from 'mobx';
import { INodeState, NodeState } from './nodeState';
import { RootStore } from './rootStore';
import { v4 } from 'uuid';

export class NodesStore {
  private _nodes: Dictionary<NodeState> = {};

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get nodes(): Readonly<Dictionary<NodeState>> {
    return this._nodes;
  }

  import = (newNodes?: INodeState[]) => {
    this._nodes = {};
    newNodes?.forEach(this.addNode);
  };

  addNode = (node: INodeState): boolean => {
    if (!node || node.id && this._nodes[node.id]) {
      return false;
    }
    const newNode = new NodeState(this.rootStore, node.id ?? v4(), node);
    this._nodes[newNode.id] = newNode;
    return true;
  };

  removeNode = (nodeId: string): boolean => {
    if (nodeId && this._nodes[nodeId]) {
      delete this._nodes[nodeId];
      this.rootStore.linksStore.removeNodeLinks(nodeId);
      return true;
    }
    return false;
  };

  getNode = (nodeId: string): NodeState | undefined => {
    if (nodeId && this._nodes[nodeId]) {
      return this._nodes[nodeId];
    } else return undefined;
  };

  getNodeOrThrowException = (nodeId: string): NodeState => {
    const node = this.getNode(nodeId);
    if (node) return node;
    else throw `Node with id '${nodeId}' does not exist`;
  };
}
