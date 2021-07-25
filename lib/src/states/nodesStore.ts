import { makeAutoObservable } from 'mobx';
import { BoundingBox } from 'utils/common';
import {
  SuccessOrErrorResult,
  errorResult,
  successValueResult,
} from 'utils/result';
import { guidForcedUniqueness } from 'utils/guid';
import { NodeState, INodeState, INodeStateWithId } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { Point, subtractPoints } from 'utils/point';

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
    if (newNodes) {
      let results = this._addNodesInternal(newNodes, true);
      results.length != 0 &&
        this._rootStore.callbacks.nodesAdded(results, true, this._rootStore);
    }
  };

  export = (): INodeStateWithId[] =>
    Array.from(this._nodes).map(([key, value]) => value.export());

  addNodes = (
    nodes: INodeState[],
    rewriteIfExists: boolean
  ): SuccessOrErrorResult<NodeState>[] => {
    let results = this._addNodesInternal(nodes, rewriteIfExists);
    results.length != 0 &&
      this._rootStore.callbacks.nodesAdded(results, false, this._rootStore);
    return results;
  };

  private _addNodesInternal = (
    nodes: INodeState[],
    rewriteIfExists: boolean
  ): SuccessOrErrorResult<NodeState>[] => {
    if (!Array.isArray(nodes) || nodes.length == 0) return [];

    let results = nodes.map((node) =>
      this._addNodeInternal(node, rewriteIfExists)
    );
    return results;
  };

  addNode = (
    node: INodeState,
    rewriteIfExists: boolean
  ): SuccessOrErrorResult<NodeState> => {
    let result = this._addNodeInternal(node, rewriteIfExists);
    this._rootStore.callbacks.nodesAdded([result], false, this._rootStore);
    return result;
  };

  private _addNodeInternal = (
    node: INodeState,
    rewriteIfExists: boolean
  ): SuccessOrErrorResult<NodeState> => {
    if (!node) return errorResult('Node object is null or undefined');

    if (!rewriteIfExists && node.id && this._nodes.has(node.id))
      return errorResult(`Node with id '${node.id}' already exists`);

    const newNode = new NodeState(
      this._rootStore,
      node.id ?? guidForcedUniqueness((id) => this._nodes.has(id)),
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

  /**
   * @returns Values are calculated without zoom taking into account, that is, the same as zoom would be '1'
   */
  getNodesBoundingBox = (): BoundingBox => {
    let topLeftCorner: Point = [
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY,
    ];
    let bottomRightCorner: Point = [
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ];

    this._nodes.forEach((node) => {
      const pos = node.position;
      const size = node.realSize ?? [0, 0];

      topLeftCorner = [
        Math.min(topLeftCorner[0], pos[0]),
        Math.min(topLeftCorner[1], pos[1]),
      ];

      bottomRightCorner = [
        Math.max(bottomRightCorner[0], pos[0] + size[0]),
        Math.max(bottomRightCorner[1], pos[1] + size[1]),
      ];
    });

    if (this._nodes.size == 0) {
      topLeftCorner = [0, 0];
      bottomRightCorner = [100, 100];
    }

    return {
      topLeftCorner,
      bottomRightCorner,
      size: subtractPoints(bottomRightCorner, topLeftCorner),
    };
  };
}
