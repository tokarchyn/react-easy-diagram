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
  private _onNodesRemoved?: ICallbacks['onNodesRemoved'];
  private _nodePositionChanged?: ICallbacks['nodePositionChanged'];
  private _dragStateChanged?: ICallbacks['dragStateChanged'];
  private _importedStateRendered?: ICallbacks['importedStateRendered'];
  private _onLinkingStart?: ICallbacks['onLinkingStart'];
  private _onLinkingEnd?: ICallbacks['onLinkingEnd'];

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore;
    this.import();
  }

  import = (callbacks?: ICallbacks) => {
    this._validateLinkEndpoints = callbacks?.validateLinkEndpoints;
    this._nodesAdded = callbacks?.nodesAdded;
    this._onNodesRemoved = callbacks?.onNodesRemoved;
    this._nodePositionChanged = callbacks?.nodePositionChanged;
    this._dragStateChanged = callbacks?.dragStateChanged;
    this._importedStateRendered = callbacks?.importedStateRendered;
    this._onLinkingStart = callbacks?.onLinkingStart;
    this._onLinkingEnd = callbacks?.onLinkingEnd;
  };

  export = (): ICallbacks => ({
    validateLinkEndpoints: this._validateLinkEndpoints,
    nodesAdded: this._nodesAdded,
    onNodesRemoved: this._onNodesRemoved,
    nodePositionChanged: this._nodePositionChanged,
    dragStateChanged: this._dragStateChanged,
    importedStateRendered: this._importedStateRendered,
    onLinkingStart: this._onLinkingStart,
    onLinkingEnd: this._onLinkingEnd,
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

  nodesRemoved = (info: OnNodesRemoved) => {
    if (this._onNodesRemoved) {
      this._onNodesRemoved(info, this._rootStore);
    }
  }

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

  importedStateRendered = () => {
    if (this._rootStore.diagramSettings.zoomToFitSettings.callOnImportState) {
      this._rootStore.diagramState.zoomToFit();
    }

    if (this._importedStateRendered) {
      this._importedStateRendered(this._rootStore);
    }
  };

  linkingStarted = (info: OnLinkingStart) => {
    if (this._onLinkingStart) {
      this._onLinkingStart(info, this._rootStore);
    }
  }

  linkingEnded = (info: OnLinkingEnd) => {
    if (this._onLinkingEnd) {
      this._onLinkingEnd(info, this._rootStore);
    }
  }
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
  onNodesRemoved?: (
    info: OnNodesRemoved,
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
  importedStateRendered?: (rootStore: RootStore) => void;
  onLinkingStart?: (info: OnLinkingStart, rootStore: RootStore) => void;
  onLinkingEnd?: (info: OnLinkingEnd, rootStore: RootStore) => void;
}

export interface OnLinkingStart {
  sourcePort: PortState;
}

export interface OnLinkingEnd {
  sourcePort: PortState;
  targetPort?: PortState;
  linked: boolean;
}

export interface OnNodesRemoved {
  removedNodes: string[],
  failedToRemoveNodesIds: string[],
}
