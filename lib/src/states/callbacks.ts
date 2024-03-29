import { INodeExport, INodeState, NodeState } from 'states/nodeState';
import { PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { Point } from 'utils/point';
import { ErrorResult } from 'utils/result';
import { ILinkState, ILinkStateWithId, LinkState } from './linkState';

export class Callbacks {
  private _onNodesAddResult?: ICallbacks['onNodesAddResult'];
  private _onNodesRemoveResult?: ICallbacks['onNodesRemoveResult'];
  private _onNodePositionChanged?: ICallbacks['onNodePositionChanged'];
  private _onNodeLabelChanged?: ICallbacks['onNodeLabelChanged'];
  private _onNodeTypeChanged?: ICallbacks['onNodeTypeChanged'];
  private _onNodeDataChanged?: ICallbacks['onNodeDataChanged'];
  private _onNodeIsSelectionEnabledChanged?: ICallbacks['onNodeIsSelectionEnabledChanged'];
  private _onNodeIsDragEnabledChanged?: ICallbacks['onNodeIsDragEnabledChanged'];
  private _onDragStarted?: ICallbacks['onDragStarted'];
  private _onDrag?: ICallbacks['onDrag'];
  private _onDragEnded?: ICallbacks['onDragEnded'];
  private _onImportedStateRendered?: ICallbacks['onImportedStateRendered'];
  private _onLinkValidation?: ICallbacks['onLinkValidation'];
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
    this._onLinkValidation = callbacks?.onLinkValidation;
    this._onNodesAddResult = callbacks?.onNodesAddResult;
    this._onNodesRemoveResult = callbacks?.onNodesRemoveResult;
    this._onNodePositionChanged = callbacks?.onNodePositionChanged;
    this._onNodeLabelChanged = callbacks?.onNodeLabelChanged;
    this._onNodeTypeChanged = callbacks?.onNodeTypeChanged;
    this._onNodeDataChanged = callbacks?.onNodeDataChanged;
    this._onNodeIsSelectionEnabledChanged =
      callbacks?.onNodeIsSelectionEnabledChanged;
    this._onNodeIsDragEnabledChanged = callbacks?.onNodeIsDragEnabledChanged;
    this._onDragStarted = callbacks?.onDragStarted;
    this._onDrag = callbacks?.onDrag;
    this._onDragEnded = callbacks?.onDragEnded;
    this._onImportedStateRendered = callbacks?.onImportedStateRendered;
    this._onLinksAddResult = callbacks?.onLinksAddResult;
    this._onLinksRemoveResult = callbacks?.onLinksRemoveResult;
    this._onLinkingStarted = callbacks?.onLinkingStarted;
    this._onLinkingEnded = callbacks?.onLinkingEnded;
  };

  export = (): ICallbacks => ({
    onNodesAddResult: this._onNodesAddResult,
    onNodesRemoveResult: this._onNodesRemoveResult,
    onNodePositionChanged: this._onNodePositionChanged,
    onNodeLabelChanged: this._onNodeLabelChanged,
    onNodeTypeChanged: this._onNodeTypeChanged,
    onNodeDataChanged: this._onNodeDataChanged,
    onNodeIsSelectionEnabledChanged: this._onNodeIsSelectionEnabledChanged,
    onNodeIsDragEnabledChanged: this._onNodeIsDragEnabledChanged,
    onDragStarted: this._onDragStarted,
    onDrag: this._onDrag,
    onDragEnded: this._onDragEnded,
    onImportedStateRendered: this._onImportedStateRendered,
    onLinkValidation: this._onLinkValidation,
    onLinksAddResult: this._onLinksAddResult,
    onLinksRemoveResult: this._onLinksRemoveResult,
    onLinkingStarted: this._onLinkingStarted,
    onLinkingEnded: this._onLinkingEnded,
  });

  linkValidation = (info: OnLinkValidation) => {
    if (this._onLinkValidation)
      return this._onLinkValidation(info, this._rootStore);
    else return true;
  };

  nodesAdded = (info: OnNodesAddResult) => {
    if (
      this._onNodesAddResult &&
      (info.addedNodes.length > 0 || info.failedToAddNodes.length > 0)
    ) {
      this._onNodesAddResult(info, this._rootStore);
    }
  };

  nodesRemoved = (info: OnNodesRemoveResult) => {
    if (
      this._onNodesRemoveResult &&
      (info.removedNodes.length > 0 || info.failedToRemoveNodeIds.length > 0)
    ) {
      this._onNodesRemoveResult(info, this._rootStore);
    }
  };

  nodePositionChanged = (node: NodeState, change: PropertyChange<Point>) => {
    if (this._onNodePositionChanged) {
      this._onNodePositionChanged(
        {
          oldValue: change.oldValue,
          newValue: change.newValue,
          node: node,
        },
        this._rootStore
      );
    }
  };

  nodeTypeChanged = (
    node: NodeState,
    change: PropertyChange<string | undefined>
  ) => {
    if (this._onNodeTypeChanged) {
      this._onNodeTypeChanged(
        {
          oldValue: change.oldValue,
          newValue: change.newValue,
          node: node,
        },
        this._rootStore
      );
    }
  };

  nodeLabelChanged = (
    node: NodeState,
    change: PropertyChange<string | undefined>
  ) => {
    if (this._onNodeLabelChanged) {
      this._onNodeLabelChanged(
        {
          oldValue: change.oldValue,
          newValue: change.newValue,
          node: node,
        },
        this._rootStore
      );
    }
  };

  nodeDataChanged = (node: NodeState, change: PropertyChange<any>) => {
    if (this._onNodeDataChanged) {
      this._onNodeDataChanged(
        {
          oldValue: change.oldValue,
          newValue: change.newValue,
          node: node,
        },
        this._rootStore
      );
    }
  };

  nodeIsSelectionEnabledChanged = (
    node: NodeState,
    change: PropertyChange<boolean | undefined>
  ) => {
    if (this._onNodeIsSelectionEnabledChanged) {
      this._onNodeIsSelectionEnabledChanged(
        {
          oldValue: change.oldValue,
          newValue: change.newValue,
          node: node,
        },
        this._rootStore
      );
    }
  };

  nodeIsDragEnabledChanged = (
    node: NodeState,
    change: PropertyChange<boolean | undefined>
  ) => {
    if (this._onNodeIsDragEnabledChanged) {
      this._onNodeIsDragEnabledChanged(
        {
          oldValue: change.oldValue,
          newValue: change.newValue,
          node: node,
        },
        this._rootStore
      );
    }
  };

  dragStarted = (info: OnDragStarted) => {
    if (this._onDragStarted) {
      this._onDragStarted(info, this._rootStore);
    }
  };

  drag = (info: OnDrag) => {
    if (this._onDrag) {
      this._onDrag(info, this._rootStore);
    }
  };

  dragEnded = (info: OnDragEnded) => {
    if (this._onDragEnded) {
      this._onDragEnded(info, this._rootStore);
    }
  };

  importedStateRendered = () => {
    if (this._rootStore.diagramSettings.zoomToFitSettings.callOnImportState) {
      this._rootStore.diagramState.zoomToFit();
    }

    if (this._onImportedStateRendered) {
      this._onImportedStateRendered(this._rootStore);
    }
  };

  linksAdded = (info: OnLinksAddResult) => {
    if (
      this._onLinksAddResult &&
      (info.addedLinks.length > 0 || info.failedToAddLinks.length > 0)
    ) {
      this._onLinksAddResult(info, this._rootStore);
    }
  };

  linksRemoved = (info: OnLinksRemoveResult) => {
    if (
      this._onLinksRemoveResult &&
      (info.removedLinks.length > 0 || info.failedToRemoveLinkIds.length > 0)
    ) {
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
  onNodesAddResult?: (info: OnNodesAddResult, rootStore: RootStore) => void;
  onNodesRemoveResult?: (
    info: OnNodesRemoveResult,
    rootStore: RootStore
  ) => void;
  onNodePositionChanged?: (
    info: OnNodePositionChanged,
    rootStore: RootStore
  ) => void;
  onNodeLabelChanged?: (info: OnNodeLabelChanged, rootStore: RootStore) => void;
  onNodeTypeChanged?: (info: OnNodeTypeChanged, rootStore: RootStore) => void;
  onNodeDataChanged?: (info: OnNodeDataChanged, rootStore: RootStore) => void;
  onNodeIsSelectionEnabledChanged?: (
    info: OnNodeIsSelectionEnabledChanged,
    rootStore: RootStore
  ) => void;
  onNodeIsDragEnabledChanged?: (
    info: OnNodeIsDragEnabledChanged,
    rootStore: RootStore
  ) => void;
  onDragStarted?: (info: OnDragStarted, rootStore: RootStore) => void;
  onDrag?: (info: OnDrag, rootStore: RootStore) => void;
  onDragEnded?: (info: OnDragEnded, rootStore: RootStore) => void;
  onImportedStateRendered?: (rootStore: RootStore) => void;
  onLinkValidation?: (info: OnLinkValidation, rootStore: RootStore) => boolean;
  onLinksAddResult?: (info: OnLinksAddResult, rootStore: RootStore) => void;
  onLinksRemoveResult?: (
    info: OnLinksRemoveResult,
    rootStore: RootStore
  ) => void;
  onLinkingStarted?: (info: OnLinkingStarted, rootStore: RootStore) => void;
  onLinkingEnded?: (info: OnLinkingEnded, rootStore: RootStore) => void;
}

export interface OnDragStarted {
  nodes: NodeState[];
}

export interface OnDrag {
  nodes: NodeState[];
  delta: Point;
}

export interface OnDragEnded {
  nodes: NodeState[];
}

export interface OnNodePropertyChanged<TValue> extends PropertyChange<TValue> {
  node: NodeState;
}

export interface OnNodePositionChanged extends OnNodePropertyChanged<Point> {}

export interface OnNodeLabelChanged
  extends OnNodePropertyChanged<string | undefined> {}

export interface OnNodeTypeChanged
  extends OnNodePropertyChanged<string | undefined> {}

export interface OnNodeDataChanged extends OnNodePropertyChanged<any> {}

export interface OnNodeIsSelectionEnabledChanged
  extends OnNodePropertyChanged<boolean | undefined> {}

export interface OnNodeIsDragEnabledChanged
  extends OnNodePropertyChanged<boolean | undefined> {}

export interface OnNodesAddResult {
  addedNodes: NodeState[];
  failedToAddNodes: ErrorResult<INodeState>[];
  importing: boolean;
}

export interface OnNodesRemoveResult {
  removedNodes: INodeExport[];
  failedToRemoveNodeIds: string[];
}

export interface OnLinkValidation {
  source: PortState;
  target: PortState;
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

export type PropertyChange<TValue> = {
  oldValue: TValue;
  newValue: TValue;
};
