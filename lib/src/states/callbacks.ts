import { PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { INodeExport, INodeState, NodeState } from 'states/nodeState';
import {
  ErrorResult,
  isError,
  isSuccess,
  SuccessOrErrorResult,
} from 'utils/result';
import { Point } from 'utils/point';
import { ILinkState, ILinkStateWithId, LinkState } from './linkState';

export class Callbacks {
  private _validateLinkEndpoints?: ICallbacks['validateLinkEndpoints'];
  private _nodesAdded?: ICallbacks['onNodesAddResult'];
  private _onNodesRemoved?: ICallbacks['onNodesRemoveResult'];
  private _nodePositionChanged?: ICallbacks['nodePositionChanged'];
  private _dragStateChanged?: ICallbacks['dragStateChanged'];
  private _importedStateRendered?: ICallbacks['onImportedStateRendered'];
  private _onLinksAdded?: ICallbacks['onLinksAddResult'];
  private _onLinksRemoved?: ICallbacks['onLinksRemoveResult'];
  private _onLinkingStart?: ICallbacks['onLinkingStarted'];
  private _onLinkingEnd?: ICallbacks['onLinkingEnded'];

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore;
    this.import();
  }

  import = (callbacks?: ICallbacks) => {
    this._validateLinkEndpoints = callbacks?.validateLinkEndpoints;
    this._nodesAdded = callbacks?.onNodesAddResult;
    this._onNodesRemoved = callbacks?.onNodesRemoveResult;
    this._nodePositionChanged = callbacks?.nodePositionChanged;
    this._dragStateChanged = callbacks?.dragStateChanged;
    this._importedStateRendered = callbacks?.onImportedStateRendered;
    this._onLinksAdded = callbacks?.onLinksAddResult;
    this._onLinksRemoved = callbacks?.onLinksRemoveResult;
    this._onLinkingStart = callbacks?.onLinkingStarted;
    this._onLinkingEnd = callbacks?.onLinkingEnded;
  };

  export = (): ICallbacks => ({
    validateLinkEndpoints: this._validateLinkEndpoints,
    onNodesAddResult: this._nodesAdded,
    onNodesRemoveResult: this._onNodesRemoved,
    nodePositionChanged: this._nodePositionChanged,
    dragStateChanged: this._dragStateChanged,
    onImportedStateRendered: this._importedStateRendered,
    onLinksAddResult: this._onLinksAdded,
    onLinksRemoveResult: this._onLinksRemoved,
    onLinkingStarted: this._onLinkingStart,
    onLinkingEnded: this._onLinkingEnd,
  });

  validateLinkEndpoints = (source: PortState, target: PortState) => {
    if (this._validateLinkEndpoints)
      return this._validateLinkEndpoints(source, target, this._rootStore);
    else return true;
  };

  nodesAdded = (info: OnNodesAddResult) => {
    if (this._nodesAdded) {
      this._nodesAdded(info, this._rootStore);
    }
  };

  nodesRemoved = (info: OnNodesRemoveResult) => {
    if (this._onNodesRemoved) {
      this._onNodesRemoved(info, this._rootStore);
    }
  };

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

  linksAdded = (info: OnLinksAddResult) => {
    if (this._onLinksAdded) {
      this._onLinksAdded(info, this._rootStore);
    }
  };

  linksRemoved = (info: OnLinksRemoveResult) => {
    if (this._onLinksRemoved) {
      this._onLinksRemoved(info, this._rootStore);
    }
  };

  linkingStarted = (info: OnLinkingStarted) => {
    if (this._onLinkingStart) {
      this._onLinkingStart(info, this._rootStore);
    }
  };

  linkingEnded = (info: OnLinkingEnded) => {
    if (this._onLinkingEnd) {
      this._onLinkingEnd(info, this._rootStore);
    }
  };
}

export interface ICallbacks {
  validateLinkEndpoints?: (
    source: PortState,
    target: PortState,
    rootStore: RootStore
  ) => boolean;
  onNodesAddResult?: (info: OnNodesAddResult, rootStore: RootStore) => void;
  onNodesRemoveResult?: (
    info: OnNodesRemoveResult,
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
  onImportedStateRendered?: (rootStore: RootStore) => void;
  onLinksAddResult?: (info: OnLinksAddResult, rootStore: RootStore) => void;
  onLinksRemoveResult?: (
    info: OnLinksRemoveResult,
    rootStore: RootStore
  ) => void;
  onLinkingStarted?: (info: OnLinkingStarted, rootStore: RootStore) => void;
  onLinkingEnded?: (info: OnLinkingEnded, rootStore: RootStore) => void;
}

export interface OnNodesAddResult {
  addedNodes: NodeState[];
  failedToAddNodes: ErrorResult<INodeState>[];
  importing: boolean;
}

export interface OnNodesRemoveResult {
  removedNodes: INodeExport[];
  failedToRemoveNodeIds: string[];
}

export interface OnLinksAddResult {
  addedLinks: LinkState[];
  failedToAddLinks: ErrorResult<ILinkState>[];
  importing: boolean;
}

export interface OnLinksRemoveResult {
  removedLinks: ILinkStateWithId[];
  failedToRemoveLinkIds: string[];
}

export interface OnLinkingStarted {
  sourcePort: PortState;
}

export interface OnLinkingEnded {
  sourcePort: PortState;
  targetPort?: PortState;
  linked: boolean;
}
