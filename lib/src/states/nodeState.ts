import { autorun, makeAutoObservable, reaction } from 'mobx';
import { Dictionary, isBoolean } from 'utils/common';
import {
  SuccessOrErrorResult,
  errorResult,
  successValueResult,
} from 'utils/result';
import { deepCopy } from 'utils';
import { guidForcedUniqueness } from 'utils/guid';
import { HtmlElementRefState } from 'states/htmlElementRefState';
import { LinkState } from 'states/linkState';
import { PortState, IPortStateWithoutIds } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { ISelectableItem } from 'states/selectionState';
import { componentDefaultType } from 'states/visualComponents';
import { arePointsEqual, Point } from 'utils/point';
import { generateTransform } from 'utils/transformation';

export class NodeState implements ISelectableItem {
  private _id: string;
  private _label: string;
  private _position: Point;
  private _ports: Map<string, PortState>;
  private _ref: HtmlElementRefState;
  private _type: string;
  private _selected: boolean;
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
    this.setPosition(newState?.position);
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
   * @returns remainder in case snap to grid is turned on. For example if newPosition would be [22,17] and snap [10,10],
   * the node position would be set to [20,20] and remainder equals [2,-3]
   */
  setPosition = (
    newPosition: Point | null | undefined,
    ignoreSnapping: boolean = false
  ): Point | undefined => {
    newPosition = newPosition ?? [0, 0];

    let remainder = undefined;
    if (!ignoreSnapping) {
      const result = snapPositionToGrid(
        newPosition,
        this._rootStore.nodesSettings.gridSnap
      );
      newPosition = result.position;
      remainder = result.remainder;
    }

    if (arePointsEqual(newPosition, this._position)) return remainder;

    const lastPos = this._position;
    this._position = newPosition;
    // Do not notify if position was not initialized before
    if (lastPos) {
      this._rootStore.callbacks.nodePositionChanged(
        this,
        lastPos,
        this._position,
        this.isDragActive
      );
    }
    return remainder;
  };

  get type() {
    return this._type;
  }

  setType = (value: string | null | undefined) => {
    this._type = value ?? componentDefaultType;
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
    return this._isDragEnabled === null
      ? this._rootStore.diagramSettings.userInteraction.nodeDrag
      : this._isDragEnabled;
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
      this._rootStore.callbacks.nodeDragStateChanged(this);
    }
  }
}

function snapPositionToGrid(position: Point, snap: Point | null) {
  if (!snap)
    return {
      position,
      remainder: undefined,
    };

  const resultX = snapPositionValueToGridValue(position[0], snap[0]);
  const resultY = snapPositionValueToGridValue(position[1], snap[1]);

  return {
    position: [resultX.value, resultY.value] as Point,
    remainder: [resultX.remainder, resultY.remainder] as Point,
  };
}

function snapPositionValueToGridValue(value: number, snapValue: number) {
  const mod = value % snapValue;
  let remainder = 0;
  let newValue = value;
  if (snapValue / 2 > mod) {
    newValue -= mod;
    remainder = mod;
  } else {
    newValue += snapValue - mod;
    remainder = -(snapValue - mod);
  }
  return { value: newValue, remainder };
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
