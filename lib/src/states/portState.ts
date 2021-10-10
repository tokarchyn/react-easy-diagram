import { makeAutoObservable, reaction } from 'mobx';
import { multiplyPoint, Point } from 'utils/point';
import { DirectionWithDiagonals } from 'utils/position';
import { HtmlElementRefState } from 'states/htmlElementRefState';
import { LinkState } from 'states/linkState';
import { NodeState } from 'states/nodeState';
import { IPortVisualComponentProps } from 'states/portsSettings';
import { RootStore } from 'states/rootStore';
import { COMPONENT_DEFAULT_TYPE } from 'states/visualComponents';
import {
  VisualComponentState,
  VisualComponent,
} from 'states/visualComponentState';
import { isBoolean, deepCopy } from 'utils/common';

export class PortState {
  private _id: string;
  private _nodeId: string;
  private _label: string;
  private _type: string;
  private _extra: any;
  private _component: VisualComponentState<IPortVisualComponentProps> | null;
  private _linkDirection: DirectionWithDiagonals | null;
  private _isConnectionEnabled: boolean | null;

  private _ref: HtmlElementRefState = new HtmlElementRefState(null);
  private _dragging: boolean = false;
  private _hovered: boolean = false;
  private _validForConnection: boolean = true;
  private _sizeAndPositionRecalculationWithDelay: number = 0;

  private _rootStore: RootStore;

  constructor(
    rootStore: RootStore,
    id: string,
    nodeId: string,
    state?: IPortStateWithoutIds
  ) {
    this._id = id;
    this._nodeId = nodeId;
    this.import(state);

    makeAutoObservable(this);
    this._rootStore = rootStore;

    reaction(
      () => [
        this._id,
        this._nodeId,
        this._label,
        this._type,
        this._extra,
        this._component,
      ],
      () => {
        this.recalculateSizeAndPosition();
      }
    );
  }

  get id() {
    return this._id;
  }

  get nodeId() {
    return this._nodeId;
  }

  get fullId() {
    return createFullPortId(this.nodeId, this.id);
  }

  get ref() {
    return this._ref;
  }

  get dragging() {
    return this._dragging;
  }

  set dragging(value: boolean) {
    this._dragging = value;
  }

  get hovered() {
    return this._hovered;
  }

  set hovered(value: boolean) {
    this._hovered = value;
  }

  get validForConnection() {
    return this._validForConnection;
  }

  set validForConnection(value: boolean) {
    this._validForConnection = value;
  }

  get label() {
    return this._label;
  }

  setLabel = (value: string | null | undefined) => {
    this._label = value ?? '';
  };

  get type() {
    return this._type;
  }

  setType = (value: string | null | undefined) => {
    this._type = value ?? COMPONENT_DEFAULT_TYPE;
  };

  /**
   * Update all properties. If some property missing in `state` parameter, the default one will be used.
   */
  import = (state?: IPortStateWithoutIds) => {
    this.setType(state?.type);
    this.setLabel(state?.label);
    this.setExtra(state?.extra);
    this.setComponent(state?.component);
    this.setLinkDirection(state?.linkDirection);
    this.setIsConnectionEnabled(state?.isConnectionEnabled);
  };

  /**
   * Update only those properties presented in `state` parameter
   */
  update = (state?: IPortStateWithoutIds) => {
    if (!state) return;

    state.type && this.setType(state.type);
    state.label && this.setLabel(state.label);
    state.extra && this.setExtra(state.extra);
    state.component && this.setComponent(state.component);
    state.linkDirection && this.setLinkDirection(state.linkDirection);
    state.isConnectionEnabled &&
      this.setIsConnectionEnabled(state.isConnectionEnabled);
  };

  export = (): IPortStateWithIds =>
    deepCopy({
      id: this._id,
      nodeId: this._nodeId,
      label: this._label,
      type: this._type,
      linkDirection: this._linkDirection ?? undefined,
      isConnectionEnabled: this._isConnectionEnabled ?? undefined,
    });

  get extra() {
    return this._extra;
  }

  setExtra = (value: any) => {
    this._extra = value ?? null;
  };

  get node(): NodeState {
    const node = this._rootStore.nodesStore.getNode(this.nodeId);
    if (node) return node;
    else throw `Node with id '${this.nodeId}' does not exist`;
  }

  get offsetRelativeToNode(): Point | null {
    if (this.node.ref.current) {
      return this._ref.offsetRelativeToParent(
        this.node.ref.current,
        // Zoom property cannot be used here because to calculate offset we use real
        // html elements that have not been rendered with the new zoom at this time
        this._rootStore.diagramState.renderedZoom
      );
    }

    return null;
  }

  /**
   * @returns Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
   * Value can be @type {null} in case reference to real DOM object is not set.
   */
  get realSize(): Point | null {
    return this._ref.realSize;
  }

  setComponent = (
    value?: VisualComponent<IPortVisualComponentProps> | null
  ) => {
    if (!value) {
      this._component = null;
    } else {
      this._component = new VisualComponentState<IPortVisualComponentProps>(
        value
      );
    }
  };

  get componentDefinition() {
    if (this._component) return this._component;
    const { portVisualComponents } = this._rootStore.portsSettings;
    return portVisualComponents.getComponent(this.type);
  }

  get connectedLinks(): LinkState[] {
    return this._rootStore.linksStore.getPortLinks(this.nodeId, this.id);
  }

  get connectedPorts(): PortState[] {
    return this.connectedLinks
      .map((v) =>
        v.source.portId === this._id ? v.target.port : v.source.port
      )
      .filter((p) => p) as PortState[]; // cast because typescript cannot deal with undefined check
  }

  get linkDirection(): DirectionWithDiagonals | undefined {
    if (this._linkDirection) return this._linkDirection;

    // Try to guess
    if (!this.offsetRelativeToNode) return undefined;

    const nodeCenter =
      this.node.realSize && multiplyPoint(this.node.realSize, 0.5);
    if (!nodeCenter) return undefined;

    if (this._rootStore.linksSettings.preferLinksDirection === 'horizontal') {
      return this.offsetRelativeToNode[0] < nodeCenter[0] ? 'left' : 'right';
    } else if (
      this._rootStore.linksSettings.preferLinksDirection === 'vertical'
    ) {
      return this.offsetRelativeToNode[1] < nodeCenter[1] ? 'up' : 'down';
    }
  }

  setLinkDirection = (value: DirectionWithDiagonals | undefined) => {
    this._linkDirection = value ?? null;
  };

  setLinkDirectionIfNotYet = (direction: DirectionWithDiagonals) => {
    this._linkDirection = this._linkDirection ?? direction;
  };

  recalculateSizeAndPosition = () => {
    this._sizeAndPositionRecalculationWithDelay += 1;
  };

  recalculateSizeAndPositionWithoutDelay = () => {
    this._ref.recalculateSizeAndPosition();
  };

  get sizeAndPositionRecalculationWithDelay() {
    return this._sizeAndPositionRecalculationWithDelay;
  }

  get isConnectionEnabled(): boolean {
    return this._isConnectionEnabled === null
      ? this._rootStore.diagramSettings.userInteraction.portConnection
      : this._isConnectionEnabled;
  }

  setIsConnectionEnabled = (value: boolean | null | undefined) => {
    this._isConnectionEnabled = isBoolean(value) ? value : null;
  };
}

export interface IPortStateWithoutIds {
  label?: string;
  type?: string;
  extra?: any;
  component?: VisualComponent<IPortVisualComponentProps>;
  linkDirection?: DirectionWithDiagonals;
  isConnectionEnabled?: boolean;
}

export interface IPortState extends IPortStateWithoutIds {
  id: string;
}

export interface IPortStateWithIds extends IPortStateWithoutIds {
  id: string;
  nodeId: string;
}

export function createFullPortId(nodeId: string, portId: string) {
  return `${nodeId}-${portId}`;
}
