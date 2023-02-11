import { makeAutoObservable, reaction, untracked } from 'mobx';
import { addPoints, multiplyPoint, Point, subtractPoints } from 'utils/point';
import { DirectionWithDiagonals } from 'utils/position';
import { HtmlElementRefState } from 'states/htmlElementRefState';
import { LinkState } from 'states/linkState';
import { NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { COMPONENT_DEFAULT_TYPE } from 'states/visualComponents';
import { isBoolean, deepCopy } from 'utils/common';
import { PortPosition } from 'hooks/useRelativePositionStyles';

export class PortState {
  private _id: string;
  private _label?: string | null;
  private _type?: string | null;
  private _data: any;
  private _linkDirection?: DirectionWithDiagonals | null;
  private _isConnectionEnabled?: boolean | null;
  private _position?: PortPosition | null;
  private _offsetFromNodeCenter?: number | null;
  private _offsetFromOrigin?: Point | null;

  private _ref: HtmlElementRefState;
  private _dragging: boolean = false;
  private _hovered: boolean = false;
  private _validForConnection: boolean = true;

  private _offsetRecalculationRequested: number = 0;
  private _triggerOffsetRecalculation: number = 0;

  private _node: NodeState;
  private _rootStore: RootStore;

  constructor(
    rootStore: RootStore,
    node: NodeState,
    id: string,
    state?: IPortStateWithoutIds
  ) {
    this._id = id;
    this._node = node;
    this._rootStore = rootStore;
    this._ref = new HtmlElementRefState(null, rootStore.diagramState);
    this.import(state);

    makeAutoObservable<PortState, '_rootStore' | '_node' | '_ref'>(this, {
      _node: false,
      node: false,
      _rootStore: false,
      _ref: false,
    });

    reaction(
      () => [
        this._label,
        this._type,
        this._data,
        this._position,
        this._offsetFromNodeCenter,
        this._offsetFromOrigin,
      ],
      () => {
        this.recalculateOffset();
      }
    );
  }

  get nodeComponentPortState(): IPortFinalState | undefined {
    return this.node.componentDefinition.settings?.ports?.find(
      (p) => p.id === this._id
    );
  }

  get id() {
    return this._id;
  }

  get nodeId() {
    return this.node.id;
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

  get label(): string | undefined {
    return this._label === undefined
      ? this.nodeComponentPortState?.label
      : this._label ?? undefined;
  }

  setLabel = (value: string | null | undefined) => {
    this._label = value;
  };

  get type(): string {
    return (
      (this._type === undefined
        ? this.nodeComponentPortState?.type
        : this._type) ?? COMPONENT_DEFAULT_TYPE
    );
  }

  setType = (value: string | null | undefined) => {
    this._type = value;
  };

  get position(): PortPosition | undefined {
    return this._position === undefined
      ? this.nodeComponentPortState?.position
      : this._position ?? undefined;
  }

  setPosition = (value: PortPosition | null | undefined) => {
    this._position = value;
  };

  get offsetFromNodeCenter(): number | undefined {
    return this._offsetFromNodeCenter === undefined
      ? this.nodeComponentPortState?.offsetFromNodeCenter
      : this._offsetFromNodeCenter ?? undefined;
  }

  setOffsetFromNodeCenter = (value: number | null | undefined) => {
    this._offsetFromNodeCenter = value;
  };

  get offsetFromOrigin(): Point | undefined {
    return this._offsetFromOrigin === undefined
      ? this.nodeComponentPortState?.offsetFromOrigin
      : this._offsetFromOrigin ?? undefined;
  }

  setOffsetFromOrigin = (value: Point | null | undefined) => {
    this._offsetFromOrigin = value;
  };

  /**
   * Update all properties. If some property missing in `state` parameter, the default one will be used.
   */
  import = (state?: IPortStateWithoutIds) => {
    this.setType(state?.type);
    this.setLabel(state?.label);
    this.setData(state?.data);
    this.setLinkDirection(state?.linkDirection);
    this.setIsConnectionEnabled(state?.isConnectionEnabled);
    this.setPosition(state?.position);
    this.setOffsetFromNodeCenter(state?.offsetFromNodeCenter);
    this.setOffsetFromOrigin(state?.offsetFromOrigin);
  };

  /**
   * Update only those properties presented in `state` parameter
   */
  update = (state?: IPortStateWithoutIds) => {
    if (!state) return;

    state.label !== undefined && this.setLabel(state.label);
    state.type !== undefined && this.setType(state.type);
    state.data !== undefined && this.setData(state.data);
    state.linkDirection !== undefined &&
      this.setLinkDirection(state.linkDirection);
    state.isConnectionEnabled !== undefined &&
      this.setIsConnectionEnabled(state.isConnectionEnabled);
    state.position !== undefined && this.setPosition(state?.position);
    state.offsetFromNodeCenter !== undefined &&
      this.setOffsetFromNodeCenter(state?.offsetFromNodeCenter);
    state.offsetFromOrigin !== undefined &&
      this.setOffsetFromOrigin(state?.offsetFromOrigin);
  };

  export = (): IPortExport =>
    deepCopy({
      id: this._id,
      nodeId: this.nodeId,
      label: this._label,
      type: this._type,
      data: this._data,
      linkDirection: this._linkDirection,
      isConnectionEnabled: this._isConnectionEnabled,
      position: this._position,
      offsetFromNodeCenter: this._offsetFromNodeCenter,
      offsetFromOrigin: this._offsetFromOrigin,
    });

  get data() {
    return this._data === undefined
      ? this.nodeComponentPortState?.data
      : this._data;
  }

  setData = (value: any) => {
    this._data = value;
  };

  get node(): NodeState {
    return this._node;
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

  get componentDefinition() {
    const { portVisualComponents } = this._rootStore.portsSettings;
    return portVisualComponents.getComponent(this.type);
  }

  get connectedLinks(): LinkState[] {
    return this._rootStore.linksStore.getPortLinks(this.nodeId, this.id);
  }

  get connectedPorts(): PortState[] {
    return this.connectedLinks
      .map((v) =>
        v.sourceEndpoint.portId === this._id ? v.target?.port : v.source?.port
      )
      .filter((p) => p) as PortState[]; // cast because typescript cannot deal with undefined check
  }

  get linkDirection(): DirectionWithDiagonals | undefined {
    if (this._linkDirection) return this._linkDirection;
    if (this.position) return positionToLinkDirection[this.position];

    // Try to guess
    if (!this.offsetRelativeToNode) return undefined;

    const nodeCenter =
      this.node.ref.sizeExcludingZoom &&
      multiplyPoint(this.node.ref.sizeExcludingZoom, 0.5);
    if (!nodeCenter) return undefined;

    if (this._rootStore.linksSettings.preferLinksDirection === 'horizontal') {
      return this.offsetRelativeToNode[0] < nodeCenter[0] ? 'left' : 'right';
    } else if (
      this._rootStore.linksSettings.preferLinksDirection === 'vertical'
    ) {
      return this.offsetRelativeToNode[1] < nodeCenter[1] ? 'up' : 'down';
    }
  }

  setLinkDirection = (value: DirectionWithDiagonals | undefined | null) => {
    this._linkDirection = value;
  };

  get isConnectionEnabled(): boolean {
    return (
      (this._isConnectionEnabled === undefined
        ? this.nodeComponentPortState?.isConnectionEnabled
        : this._isConnectionEnabled) ??
      this._rootStore.diagramSettings.userInteraction.portConnection
    );
  }

  setIsConnectionEnabled = (value: boolean | null | undefined) => {
    this._isConnectionEnabled = value;
  };
}

const positionToLinkDirection: {
  [key in PortPosition]: DirectionWithDiagonals;
} = {
  'left-center': 'left',
  'left-bottom': 'left',
  'left-top': 'left',

  'top-left': 'up',
  'top-center': 'up',
  'top-right': 'up',

  'right-center': 'right',
  'right-bottom': 'right',
  'right-top': 'right',

  'bottom-left': 'down',
  'bottom-center': 'down',
  'bottom-right': 'down',

  'diagonal-left-top': 'left-up',
  'diagonal-right-top': 'right-up',
  'diagonal-right-bottom': 'right-down',
  'diagonal-left-bottom': 'left-down',
};

// https://stackoverflow.com/questions/21912684/how-to-get-value-of-translatex-and-translatey
// https://gist.github.com/aderaaij/a6b666bf756b2db1596b366da921755d
function getTranslate(item: HTMLElement): Point {
  let transArr: Point = [0, 0];
  if (!window.getComputedStyle) {
    return transArr;
  }
  const style = window.getComputedStyle(item);
  const transform = style.transform || style.webkitTransform;
  // matrix(a, b, c, d, tx, ty)
  // consider also to add matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)
  let mat = transform.match(/^matrix\((.+)\)$/);
  if (mat) {
    transArr = [
      parseFloat(mat[1].split(', ')[4]),
      parseFloat(mat[1].split(', ')[5]),
    ];
  }

  return transArr;
}

export interface IPortFinalState {
  id: string;
  label?: string;
  type?: string;
  data?: any;
  linkDirection?: DirectionWithDiagonals;
  isConnectionEnabled?: boolean;
  position?: PortPosition;
  offsetFromNodeCenter?: number;
  offsetFromOrigin?: Point;
}

export interface IPortStateWithoutIds {
  label?: string | null;
  type?: string | null;
  data?: any;
  linkDirection?: DirectionWithDiagonals | null;
  isConnectionEnabled?: boolean | null;
  position?: PortPosition | null;
  offsetFromNodeCenter?: number | null;
  offsetFromOrigin?: Point | null;
}

export interface IPortState extends IPortStateWithoutIds {
  id: string;
}

export interface IPortExport extends IPortStateWithoutIds {
  id: string;
  nodeId: string;
}

export function createFullPortId(nodeId: string, portId: string) {
  return `${nodeId}-${portId}`;
}
