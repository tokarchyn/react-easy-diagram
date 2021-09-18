import { PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { INodeState, NodeState } from 'states/nodeState';
import {
  ErrorResult,
  isError,
  isSuccess,
  SuccessOrErrorResult,
} from 'utils/result';
import { Point } from 'utils/point';

export class Callbacks {
  private _validateLinkEndpoints?: ICallbacks['validateLinkEndpoints'];
  private _nodesAdded?: ICallbacks['nodesAdded'];
  private _nodePositionChanged?: ICallbacks['nodePositionChanged'];
  private _nodeDragStateChanged?: ICallbacks['nodeDragStateChanged'];

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore;
    this.import();
  }

  import = (callbacks?: ICallbacks) => {
    this._validateLinkEndpoints = callbacks?.validateLinkEndpoints;
    this._nodesAdded = callbacks?.nodesAdded;
    this._nodePositionChanged = callbacks?.nodePositionChanged;
    this._nodeDragStateChanged = callbacks?.nodeDragStateChanged;
  };

  export = () => ({
    validateLinkEndpoints: this._validateLinkEndpoints,
    nodesAdded: this._nodesAdded,
    nodePositionChanged: this._nodePositionChanged,
    nodeDragStateChanged: this._nodeDragStateChanged,
  });

  validateLinkEndpoints = (source: PortState, target: PortState) => {
    if (this._validateLinkEndpoints)
      return this._validateLinkEndpoints(source, target, this._rootStore);
    else return true;
  };

  nodesAdded = (
    addResults: SuccessOrErrorResult<NodeState, INodeState>[],
    importing: boolean
  ) =>
    this._nodesAdded &&
    this._nodesAdded(
      addResults.filter(isSuccess).map((r) => r.value),
      addResults.filter(isError),
      importing,
      this._rootStore
    );

  nodePositionChanged = (
    node: NodeState,
    oldPosition: Point,
    newPosition: Point,
    isDragActive: boolean
  ) =>
    this._nodePositionChanged &&
    this._nodePositionChanged(
      node,
      oldPosition,
      newPosition,
      isDragActive,
      this._rootStore
    );

  nodeDragStateChanged = (node: NodeState) =>
    this._nodeDragStateChanged &&
    this._nodeDragStateChanged(node, node.isDragActive, this._rootStore);
}

export interface ICallbacks {
  validateLinkEndpoints?: (
    source: PortState,
    target: PortState,
    rootStore: RootStore
  ) => boolean;
  nodesAdded?: (
    addedNodes: NodeState[],
    failedToAdd: ErrorResult<INodeState>[],
    importing: boolean,
    rootStore: RootStore
  ) => void;
  nodePositionChanged?: (
    node: NodeState,
    oldPosition: Point,
    newPosition: Point,
    isDragActive: boolean,
    rootStore: RootStore
  ) => void;
  nodeDragStateChanged?: (
    node: NodeState,
    isDragActive: boolean,
    rootStore: RootStore
  ) => void;
}
