import { makeAutoObservable, reaction } from 'mobx';
import { HtmlElementRefState } from 'states/htmlElementRefState';
import { LinkState } from 'states/linkState';
import { IPortStateWithoutIds, PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { COMPONENT_DEFAULT_TYPE } from 'states/visualComponents';
import { deepCopy, Dictionary, isBoolean } from 'utils/common';
import { guidForcedUniqueness } from 'utils/guid';
import { addPoints, arePointsEqual, Point } from 'utils/point';
import {
  errorResult,
  SuccessOrErrorResult,
  successValueResult,
} from 'utils/result';
import { generateTransform } from 'utils/transformation';

export class NodeState {
  private _id: string;
  private _label: string;
  private _position: Point;
  private _ports: Map<string, PortState>;
  private _ref: HtmlElementRefState;
  private _type: string;
  private _selected: boolean;
  private _hovered: boolean;
  private _extra: any;
  private _isSelectionEnabled: boolean | null;
  private _isDragEnabled: boolean | null;
  private _isDragActive: boolean = false;

  private _rootStore: RootStore;

  constructor(rootStore: RootStore, id: string, state?: INodeStateWithoutId) {
    this._rootStore = rootStore;

    this._id = id;
    this._ref = new HtmlElementRefState(null);
    this._selected = false;
    this._hovered = false;
    this.import(state);

    makeAutoObservable(this, {
      // @ts-ignore
      _rootStore: false,
    });

    reaction(
      () => [this._id, this._label, this._extra, this._type],
      () => {
        this.recalculatePortsSizeAndPosition();
      }
    );
  }

  import = (newState?: INodeStateWithoutId) => {
    this.setPosition(newState?.position ?? [0, 0]);
    this.setType(newState?.type);
    this.setExtra(newState?.extra);
    this.label = newState?.label ?? '';
    this._ports = new Map();
    this.setIsSelectionEnabled(newState?.isSelectionEnabled);
    this.setIsDragEnabled(newState?.isDragEnabled);
  };

  export = (): INodeStateWithId => ({
    ...deepCopy({
      id: this._id,
      label: this._label,
      position: this._position,
      type: this._type,
      extra: this.extra,
      isSelectionEnabled: this._isSelectionEnabled ?? undefined,
      isDragEnabled: this._isDragEnabled ?? undefined,
    }),
  });

  get id() {
    return this._id;
  }

  get label() {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get position() {
    return this._position;
  }

  /**
   * @param newPosition - new position
   * @param ignoreSnapping - do not take into account snapping to grid
   * @returns false if position did not change
   */
  setPosition = (
    newPosition: Point,
    ignoreSnapping: boolean = false
  ): boolean => {
    const snap = this._rootStore.nodesSettings.gridSnap;
    if (!ignoreSnapping && snap) {
      newPosition = [
        snapPosition(newPosition[0], snap[0]),
        snapPosition(newPosition[1], snap[1]),
      ];
    }

    if (!arePointsEqual(newPosition, this._position)) {
      const oldPos = this._position;
      this._position = newPosition;

      // Do not notify if position was not initialized before
      if (oldPos) {
        this._rootStore.callbacks.nodePositionChanged(
          this,
          oldPos,
          this._position,
          this.isDragActive
        );
      }
      return true;
    } else return false;
  };

  /**
   * @param vector - vector to move node by
   * @param ignoreSnapping - do not take into account snapping to grid
   * @returns remainder in case snap to grid is turned on. For example if vector
   * would be [3,9], node current position [10,10] and snap [5,5],
   * the node position would be set to [10,15] and remainder equals [3,4]
   */
  moveBy = (
    vector: Point,
    ignoreSnapping: boolean = false
  ): Point | undefined => {
    let newPos = addPoints(this.position, vector);
    let remainder: Point | undefined = undefined;
    const snap = this._rootStore.nodesSettings.gridSnap;

    if (!ignoreSnapping && snap) {
      const res1 = snapMoveByVector(this.position[0], vector[0], snap[0]);
      const res2 = snapMoveByVector(this.position[1], vector[1], snap[1]);
      remainder = [res1.remainder, res2.remainder];
      newPos = [res1.value, res2.value];
    }

    this.setPosition(newPos, true);
    return remainder;
  };

  get type() {
    return this._type;
  }

  setType = (value: string | null | undefined) => {
    this._type = value ?? COMPONENT_DEFAULT_TYPE;
  };

  get selected() {
    return this._selected;
  }

  set selected(value: boolean) {
    this._selected = value;
    if (!value) {
      this.isDragActive = false;
    }
  }

  get hovered() {
    return this._hovered;
  }

  set hovered(value: boolean) {
    this._hovered = value;
  }

  get extra() {
    return this._extra;
  }

  setExtra = (value: any) => {
    this._extra = value ?? null;
  };

  get ref() {
    return this._ref;
  }

  get ports(): ReadonlyMap<string, PortState> {
    return this._ports;
  }

  get transformString() {
    return generateTransform(this._position);
  }

  get componentDefinition() {
    const { visualComponents } = this._rootStore.nodesSettings;
    return visualComponents.getComponent(this.type);
  }

  /**
   * @returns Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
   * Value can be @type {null} in case reference to real DOM object is not set.
   */
  get realSize(): Point | null {
    return this._ref.realSize;
  }

  getPort = (portId: string): PortState | undefined => {
    if (portId) {
      return this._ports.get(portId);
    } else return undefined;
  };

  addPort = (port: INodePortState): SuccessOrErrorResult<PortState> => {
    if (!port || (port.id && this._ports.get(port.id))) {
      return errorResult();
    }
    const newPort = new PortState(
      this._rootStore,
      port.id ?? guidForcedUniqueness((id) => !!this._ports.get(id)),
      this._id,
      port
    );
    this._ports.set(newPort.id, newPort);
    return successValueResult(newPort);
  };

  removePort = (portId: string): boolean => {
    if (portId && this._ports.get(portId)) {
      this._ports.delete(portId);
      this._rootStore.linksStore.removePortLinks(this._id, portId);
      return true;
    }
    return false;
  };

  getPortOrThrowException = (portId: string): PortState => {
    const port = this.getPort(portId);
    if (port) return port;
    else
      throw `Port with id '${portId}' does not exist in the node '${this._id}'`;
  };

  get connectedExternalPorts(): Dictionary<PortState[]> {
    const keyValues = Object.values(this.ports).map((p) => [
      p.id,
      p.connectedPorts,
    ]);
    return Object.fromEntries(keyValues);
  }

  get connectedLinks(): LinkState[] {
    return this._rootStore.linksStore.getNodeLinks(this._id);
  }

  recalculatePortsSizeAndPosition = () => {
    this._ports.forEach((p) => p.recalculateSizeAndPosition());
  };

  get isSelectionEnabled(): boolean {
    return this._isSelectionEnabled === null
      ? this._rootStore.diagramSettings.userInteraction.nodeSelection
      : this._isSelectionEnabled;
  }

  setIsSelectionEnabled = (value: boolean | null | undefined) => {
    this._isSelectionEnabled = isBoolean(value) ? value : null;
  };

  get isDragEnabled(): boolean {
    return (
      (this._isDragEnabled === null
        ? this._rootStore.diagramSettings.userInteraction.nodeDrag
        : this._isDragEnabled) && this.isSelectionEnabled
    );
  }

  setIsDragEnabled = (value: boolean | null | undefined) => {
    this._isDragEnabled = isBoolean(value) ? value : null;
  };

  get isDragActive() {
    return this._isDragActive;
  }

  set isDragActive(value) {
    if (this._isDragActive != value) {
      this._isDragActive = value;
    }
  }
}

function snapPosition(pos: number, snap: number) {
  const mod = pos % snap;
  if (Math.abs(mod) > snap / 2) return pos + snap * Math.sign(mod) - mod;
  else return pos - mod;
}

function snapMoveByVector(pos: number, vec: number, snapValue: number) {
  if (vec === 0) return { value: pos, remainder: 0 };

  let result = 0;
  let desiredPos = pos + vec;

  let frac = Math.trunc(desiredPos / snapValue);
  if ((vec < 0 && desiredPos > 0) || (vec > 0 && desiredPos < 0)) {
    frac += 1 * Math.sign(desiredPos);
  }
  if (frac === -0) frac = 0;

  result = frac * snapValue;

  if ((vec < 0 && result > pos) || (vec > 0 && result < pos)) {
    return { value: pos, remainder: vec };
  } else return { value: result, remainder: pos - result + vec };
}

export interface INodeStateWithoutId {
  label?: string;
  position: Point;
  type?: string;
  extra?: any;
  isSelectionEnabled?: boolean;
  isDragEnabled?: boolean;
}

export interface INodePortState extends IPortStateWithoutIds {
  id?: string;
}

export interface INodeStateWithId extends INodeStateWithoutId {
  id: string;
}

export interface INodeState extends INodeStateWithoutId {
  id?: string;
}
