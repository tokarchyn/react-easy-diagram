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
  private _onNodesAddResult?: ICallbacks['onNodesAddResult'];
  private _onNodesRemoveResult?: ICallbacks['onNodesRemoveResult'];
  private _nodePositionChanged?: ICallbacks['nodePositionChanged'];
  private _dragStateChanged?: ICallbacks['dragStateChanged'];
  private _onImportedStateRendered?: ICallbacks['onImportedStateRendered'];
  private _onLinksAddResult?: ICallbacks['onLinksAddResult'];
  private _onLinksRemoveResult?: ICallbacks['onLinksRemoveResult'];
  private _onLinkingStarted?: ICallbacks['onLinkingStarted'];
  private _onLinkingEnded?: ICallbacks['onLinkingEnded'];

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore;
    this.import();
  }

  import = (callbacks?: ICallbacks) => {
    this._validateLinkEndpoints = callbacks?.validateLinkEndpoints;
    this._onNodesAddResult = callbacks?.onNodesAddResult;
    this._onNodesRemoveResult = callbacks?.onNodesRemoveResult;
    this._nodePositionChanged = callbacks?.nodePositionChanged;
    this._dragStateChanged = callbacks?.dragStateChanged;
    this._onImportedStateRendered = callbacks?.onImportedStateRendered;
    this._onLinksAddResult = callbacks?.onLinksAddResult;
    this._onLinksRemoveResult = callbacks?.onLinksRemoveResult;
    this._onLinkingStarted = callbacks?.onLinkingStarted;
    this._onLinkingEnded = callbacks?.onLinkingEnded;
  };

  export = (): ICallbacks => ({
    validateLinkEndpoints: this._validateLinkEndpoints,
    onNodesAddResult: this._onNodesAddResult,
    onNodesRemoveResult: this._onNodesRemoveResult,
    nodePositionChanged: this._nodePositionChanged,
    dragStateChanged: this._dragStateChanged,
    onImportedStateRendered: this._onImportedStateRendered,
    onLinksAddResult: this._onLinksAddResult,
    onLinksRemoveResult: this._onLinksRemoveResult,
    onLinkingStarted: this._onLinkingStarted,
    onLinkingEnded: this._onLinkingEnded,
  });

  validateLinkEndpoints = (source: PortState, target: PortState) => {
    if (this._validateLinkEndpoints)
      return this._validateLinkEndpoints(source, target, this._rootStore);
    else return true;
  };

  nodesAdded = (info: OnNodesAddResult) => {
    if (this._onNodesAddResult) {
      this._onNodesAddResult(info, this._rootStore);
    }
  };

  nodesRemoved = (info: OnNodesRemoveResult) => {
    if (this._onNodesRemoveResult) {
      this._onNodesRemoveResult(info, this._rootStore);
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

    if (this._onImportedStateRendered) {
      this._onImportedStateRendered(this._rootStore);
    }
  };

  linksAdded = (info: OnLinksAddResult) => {
    if (this._onLinksAddResult) {
      this._onLinksAddResult(info, this._rootStore);
    }
  };

  linksRemoved = (info: OnLinksRemoveResult) => {
    if (this._onLinksRemoveResult) {
      this._onLinksRemoveResult(info, this._rootStore);
    }
  };

  linkingStarted = (info: OnLinkingStarted) => {
    if (this._onLinkingStarted) {
      this._onLinkingStarted(info, this._rootStore);
    }
  };

  linkingEnded = (info: OnLinkingEnded) => {
    if (this._onLinkingEnded) {
      this._onLinkingEnded(info, this._rootStore);
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
