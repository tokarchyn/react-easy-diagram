import { makeAutoObservable } from 'mobx';
import {
  INodeExport,
  INodeState,
  INodeStateWithId,
  NodeState,
} from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { BoundingBox } from 'utils/common';
import { guidForcedUniqueness } from 'utils/guid';
import { Point, subtractPoints } from 'utils/point';
import {
  errorValueResult,
  isError,
  isSuccess,
  SuccessOrErrorResult,
  successValueResult,
} from 'utils/result';

export class NodesStore {
  private _nodes = new Map<string, NodeState>();
  private _rootStore;

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
      let results = this._addNodesInternal(newNodes, false);

      this._rootStore.callbacks.nodesAdded({
        addedNodes: results.filter(isSuccess).map((r) => r.value),
        failedToAddNodes: results.filter(isError),
        importing: true,
      });
    }
  };

  export = (): INodeStateWithId[] =>
    Array.from(this._nodes).map(([key, value]) => value.export());

  addNodes = (
    nodes: INodeState[],
    rewriteIfExists: boolean = false
  ): SuccessOrErrorResult<NodeState, INodeState>[] => {
    if (!Array.isArray(nodes) || nodes.length == 0) return [];

    let results = this._addNodesInternal(nodes, rewriteIfExists);

    this._rootStore.callbacks.nodesAdded({
      addedNodes: results.filter(isSuccess).map((r) => r.value),
      failedToAddNodes: results.filter(isError),
      importing: false,
    });

    return results;
  };

  private _addNodesInternal = (
    nodes: INodeState[],
    rewriteIfExists: boolean
  ): SuccessOrErrorResult<NodeState, INodeState>[] => {
    let results = nodes.map((node) =>
      this._addNodeInternal(node, rewriteIfExists)
    );

    return results;
  };

  addNode = (
    node: INodeState,
    rewriteIfExists: boolean = false
  ): SuccessOrErrorResult<NodeState, INodeState> => {
    const result = this._addNodeInternal(node, rewriteIfExists);

    this._rootStore.callbacks.nodesAdded({
      addedNodes: result.success ? [result.value] : [],
      failedToAddNodes: result.success ? [] : [result],
      importing: false,
    });

    return result;
  };

  private _addNodeInternal = (
    node: INodeState,
    rewriteIfExists: boolean
  ): SuccessOrErrorResult<NodeState, INodeState> => {
    if (!node)
      return errorValueResult(node, 'Node object is null or undefined');

    if (!rewriteIfExists && node.id && this._nodes.has(node.id))
      return errorValueResult(node, `Node with id '${node.id}' already exists`);

    const newNode = new NodeState(
      this._rootStore,
      node.id ?? guidForcedUniqueness((id) => this._nodes.has(id)),
      node
    );
    this._nodes.set(newNode.id, newNode);
    return successValueResult(newNode);
  };

  removeNodes = (
    nodeIds: string[]
  ): SuccessOrErrorResult<INodeExport, string>[] => {
    if (!Array.isArray(nodeIds) || nodeIds.length == 0) return [];

    const results = nodeIds.map<SuccessOrErrorResult<INodeExport, string>>(
      (id) => {
        const removedNode = this._removeNode(id);
        if (removedNode) return successValueResult(removedNode);
        else return errorValueResult(id);
      }
    );

    this._rootStore.callbacks.nodesRemoved({
      removedNodes: results.filter(isSuccess).map((r) => r.value),
      failedToRemoveNodeIds: results.filter(isError).map((r) => r.value),
    });

    return results;
  };

  removeNode = (nodeId: string): INodeExport | undefined => {
    const removedNode = this._removeNode(nodeId);

    this._rootStore.callbacks.nodesRemoved({
      removedNodes: removedNode ? [removedNode] : [],
      failedToRemoveNodeIds: removedNode ? [] : [nodeId],
    });

    return removedNode;
  };

  private _removeNode = (nodeId: string): INodeExport | undefined => {
    const node = this._nodes.get(nodeId);
    if (node) {
      const nodeState = node.export();
      this._rootStore.linksStore.removeNodeLinks(nodeId);
      this._rootStore.selectionState.unselect(node);
      this._nodes.delete(nodeId);
      return nodeState;
    }
    return undefined;
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
      const size = node.ref.sizeExcludingZoom ?? [0, 0];

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
