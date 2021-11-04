import { makeAutoObservable, reaction, untracked } from 'mobx';
import { addPoints, multiplyPoint, Point, subtractPoints } from 'utils/point';
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

  private _ref: HtmlElementRefState;
  private _dragging: boolean = false;
  private _hovered: boolean = false;
  private _validForConnection: boolean = true;

  private _offsetRecalculationRequested: number = 0;
  private _triggerOffsetRecalculation: number = 0;

  private _rootStore: RootStore;

  constructor(
    rootStore: RootStore,
    id: string,
    nodeId: string,
    state?: IPortStateWithoutIds
  ) {
    this._id = id;
    this._nodeId = nodeId;
    this._ref = new HtmlElementRefState(null, rootStore.diagramState);
    this.import(state);

    makeAutoObservable(this);
    this._rootStore = rootStore;

    reaction(
      () => [this._label, this._type, this._extra],
      () => {
        this.recalculateOffset();
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

  /**
   * Offset relative to parent node, helps us to calculate positions of link endpoints for example.
   * @returns offset excluding zoom
   */
  get offsetRelativeToNode(): Point | null {
    /* This value is implemented as getter to automatically recalculate 
    value if html element is attached (react ref) and also it helps with performance
    as if there is no observers the value will not be calculated */
    this._triggerOffsetRecalculation | 1;

    /* There is another method of calculating offset by using getBoundingClientReact, but it 
    has its drawbacks like that it return position related to viewport and therefore requires
    from us to synchronize moments when node and port getBoundingClientReact is called. It also
    requires using diagram zoom to correctly calculate offset. */
    if (this.ref.current && this.node.ref.current) {
      let iterElement = this.ref.current as HTMLElement | null;
      let nextOffsetParent = null as Element | null;
      let acumLeft = 0;
      let acumTop = 0;

      while (this.node.ref.current !== iterElement && iterElement) {
        if (!nextOffsetParent || nextOffsetParent === iterElement) {
          const translate = getTranslate(iterElement);
          acumLeft += iterElement.offsetLeft + translate[0];
          acumTop += iterElement.offsetTop + translate[1];
          nextOffsetParent = iterElement.offsetParent;
        }
        iterElement = iterElement.parentElement;
      }
      return [acumLeft, acumTop];
    }

    return null;
  }

  recalculateOffset = () => {
    this._offsetRecalculationRequested += 1;
  };

  recalculateOffsetImmediately = () => {
    this._triggerOffsetRecalculation += 1;
  };

  /**
   * Is used to trigger port rerendering and following offset recalculation
   */
  get offsetRecalculationRequested() {
    return this._offsetRecalculationRequested;
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
      this.node.ref.size && multiplyPoint(this.node.ref.size, 0.5);
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

  get isConnectionEnabled(): boolean {
    return this._isConnectionEnabled === null
      ? this._rootStore.diagramSettings.userInteraction.portConnection
      : this._isConnectionEnabled;
  }

  setIsConnectionEnabled = (value: boolean | null | undefined) => {
    this._isConnectionEnabled = isBoolean(value) ? value : null;
  };
}

// https://stackoverflow.com/questions/21912684/how-to-get-value-of-translatex-and-translatey
// https://gist.github.com/aderaaij/a6b666bf756b2db1596b366da921755d
function getTranslate(item: HTMLElement): Point {
  const transArr: Point = [0, 0];
  if (!window.getComputedStyle) {
    return transArr;
  }
  const style = window.getComputedStyle(item);
  const transform = style.transform || style.webkitTransform;
  // matrix(a, b, c, d, tx, ty)
  // consider also to add matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)
  let mat = transform.match(/^matrix\((.+)\)$/);
  if (mat) {
    transArr[0] = parseFloat(mat[1].split(', ')[4]);
    transArr[1] = parseFloat(mat[1].split(', ')[5]);
  }

  return transArr;
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
