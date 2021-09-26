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
  private _dragStateChanged?: ICallbacks['dragStateChanged'];

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore;
    this.import();
  }

  import = (callbacks?: ICallbacks) => {
    this._validateLinkEndpoints = callbacks?.validateLinkEndpoints;
    this._nodesAdded = callbacks?.nodesAdded;
    this._nodePositionChanged = callbacks?.nodePositionChanged;
    this._dragStateChanged = callbacks?.dragStateChanged;
  };

  export = () : ICallbacks => ({
    validateLinkEndpoints: this._validateLinkEndpoints,
    nodesAdded: this._nodesAdded,
    nodePositionChanged: this._nodePositionChanged,
    dragStateChanged: this._dragStateChanged,
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

  dragStateChanged = (nodes: NodeState[], started: boolean) =>
    this._dragStateChanged &&
    this._dragStateChanged(nodes, started, this._rootStore);
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
  dragStateChanged?: (
    nodes: NodeState[],
    started: boolean,
    rootStore: RootStore
  ) => void;
}
