import { BoundingBox, Dictionary, errorResult, Point, SuccessOrErrorResult, successResult, successValueResult } from '../types/common';
import { makeAutoObservable } from 'mobx';
import { INodeState, INodeStateWithId, NodeState } from './nodeState';
import { RootStore } from './rootStore';
import { guidForcedUniqueness, subtractPoints } from '../utils';

export class NodesStore {
  private _nodes: Map<string, NodeState> = new Map();

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  get nodes(): ReadonlyMap<string, NodeState> {
    return this._nodes;
  }

  import = (newNodes?: INodeState[]) => {
    this._nodes = new Map();
    newNodes?.forEach((node) => this.addNode(node, true));
  };

  export = (): INodeStateWithId[] =>
    Array.from(this._nodes).map(([key,value]) => value.export());

  addNode = (node: INodeState, rewriteIfExists: boolean): SuccessOrErrorResult<NodeState> => {
    if (!node || (!rewriteIfExists && node.id && this._nodes.has(node.id))) {
      return errorResult('');
    }
    const newNode = new NodeState(
      this._rootStore,
      node.id ?? guidForcedUniqueness(this._nodes),
      node
    );
    this._nodes.set(newNode.id, newNode);
    return successValueResult(newNode);
  };

  removeNode = (nodeId: string): boolean => {
    const node = this._nodes.get(nodeId);
    if (node) {
      this._rootStore.linksStore.removeNodeLinks(nodeId);
      this._rootStore.selectionState.unselect(node);
      this._nodes.delete(nodeId);
      return true;
    }
    return false;
  };

  getNode = (nodeId: string): NodeState | undefined => {
    return this._nodes.get(nodeId);
  };

  getNodeOrThrowException = (nodeId: string): NodeState => {
    const node = this.getNode(nodeId);
    if (node) return node;
    else throw `Node with id '${nodeId}' does not exist`;
  };

  /**
   * @returns Values are calculated without zoom taking into account, that is, the same as zoom would be '1'
   */
  getNodesBoundingBox = (): BoundingBox => {
    const topLeftCorner: Point = [
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY,
    ];
    const bottomRightCorner: Point = [
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ];

    this._nodes.forEach((node) => {
      const pos = node.position;
      const size = node.realSize ?? [1, 1];

      topLeftCorner[0] = Math.min(topLeftCorner[0], pos[0]);
      topLeftCorner[1] = Math.min(topLeftCorner[1], pos[1]);

      bottomRightCorner[0] = Math.max(bottomRightCorner[0], pos[0] + size[0]);
      bottomRightCorner[1] = Math.max(bottomRightCorner[1], pos[1] + size[1]);
    });

    return {
      topLeftCorner,
      bottomRightCorner,
      size: subtractPoints(bottomRightCorner, topLeftCorner),
    };
  };
}
