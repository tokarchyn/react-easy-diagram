import { makeAutoObservable, reaction } from 'mobx';
import { HtmlElementRefState } from 'states/htmlElementRefState';
import { LinkState } from 'states/linkState';
import { INodeComponentSettings } from 'states/nodesSettings';
import {
  IPortExport,
  IPortState,
  IPortStateWithoutIds,
  PortState,
} from 'states/portState';
import { RootStore } from 'states/rootStore';
import { COMPONENT_DEFAULT_TYPE } from 'states/visualComponents';
import { deepCopy, Dictionary, isBoolean } from 'utils/common';
import { addPoints, arePointsEqual, Point } from 'utils/point';
import {
  errorResult,
  SuccessOrErrorResult,
  successValueResult,
} from 'utils/result';
import { generateTransform } from 'utils/transformation';
import { PropertyChange } from 'states/callbacks';

export class NodeState {
  private _id: string;
  private _label?: string;
  private _position: Point;
  private _ports: Map<string, PortState>;
  private _ref: HtmlElementRefState;
  private _type?: string;
  private _selected: boolean;
  private _hovered: boolean;
  private _data?: any;
  private _isSelectionEnabled?: boolean;
  private _isDragEnabled?: boolean;
  private _isDragActive: boolean;

  private _rootStore: RootStore;

  constructor(rootStore: RootStore, id: string, state?: INodeStateWithoutId) {
    this._rootStore = rootStore;

    this._id = id;
    this._ref = new HtmlElementRefState(null, rootStore.diagramState);
    this._selected = false;
    this._hovered = false;
    this._isDragActive = false;
    this.import(state);

    makeAutoObservable(this, {
      // @ts-ignore
      _rootStore: false,
    });

    reaction(
      () => [this._id, this._label, this._data, this._type, this._ports],
      () => {
        this.ref.recalculateSizeAndPosition();
        this.recalculatePortsOffset();
      }
    );
  }

  import = (newState?: INodeStateWithoutId) => {
    this._setPosition(newState?.position ?? [0, 0]);
    this._setType(newState?.type);
    this._setData(newState?.data);
    this._setLabel(newState?.label);
    this.setPorts(newState?.ports);
    this._setIsSelectionEnabled(newState?.isSelectionEnabled);
    this._setIsDragEnabled(newState?.isDragEnabled);
  };

  export = (): INodeExport => ({
    ...deepCopy({
      id: this._id,
      label: this._label,
      position: this._position,
      ports: Array.from(this._ports).map(([k, p]) => p.export()),
      type: this._type,
      data: this.data,
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

  setLabel = (
    value?: string | null
  ): PropertyChange<string | undefined> | undefined => {
    const change = this._setLabel(value);

    if (change) {
      this._rootStore.callbacks.nodeLabelChanged(this, change);
    }

    return change;
  };

  private _setLabel = (
    value?: string | null
  ): PropertyChange<string | undefined> | undefined => {
    const valueToSet = value ?? undefined;
    if (this._label === valueToSet) {
      return undefined;
    }
    const oldValue = this._label;
    this._label = valueToSet;
    return {
      oldValue: oldValue,
      newValue: this._label,
    };
  };

  get position() {
    return this._position;
  }

  /**
   * @param newPosition - new position
   * @param ignoreSnapping - do not take into account snapping to grid
   * @returns `undefined` if position did not change
   */
  setPosition = (
    newPosition: Point,
    ignoreSnapping: boolean = false
  ): PropertyChange<Point> | undefined => {
    const change = this._setPosition(newPosition, ignoreSnapping);

    if (change) {
      this._rootStore.callbacks.nodePositionChanged(this, change);
    }

    return change;
  };

  private _setPosition = (
    newPosition: Point,
    ignoreSnapping: boolean = false
  ): PropertyChange<Point> | undefined => {
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

      return {
        oldValue: oldPos,
        newValue: this._position,
      };
    } else return undefined;
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

  get type(): string {
    return this._type ?? COMPONENT_DEFAULT_TYPE;
  }

  setType = (
    value: string | null | undefined
  ): PropertyChange<string | undefined> | undefined => {
    const change = this._setType(value);

    if (change) {
      this._rootStore.callbacks.nodeTypeChanged(this, change);
    }

    return change;
  };

  private _setType = (
    value: string | null | undefined
  ): PropertyChange<string | undefined> | undefined => {
    const valueToSet = value ?? undefined;
    if (this._type === valueToSet) {
      return undefined;
    }
    const oldValue = this._type;
    this._type = valueToSet;
    return {
      oldValue: oldValue,
      newValue: this._type,
    };
  };

  get hovered() {
    return this._hovered;
  }

  set hovered(value: boolean) {
    this._hovered = value;
  }

  get data() {
    return this._data;
  }

  setData = (value?: any): PropertyChange<any> | undefined => {
    const change = this._setData(value);

    if (change) {
      this._rootStore.callbacks.nodeDataChanged(this, change);
    }

    return change;
  };

  private _setData = (value?: any): PropertyChange<any> | undefined => {
    if (this._data === value) {
      return undefined;
    }
    const oldValue = this._data;
    this._data = value ?? undefined;
    return {
      oldValue: oldValue,
      newValue: this._data,
    };
  };

  get ref() {
    return this._ref;
  }

  get ports(): ReadonlyMap<string, PortState> {
    return this._ports;
  }

  setPorts = (nodePorts?: IPortState[]) => {
    const componentPortsIds =
      (this.componentDefinition.settings as INodeComponentSettings)?.ports?.map(
        (p) => p.id
      ) ?? [];

    const nodePortsIds = nodePorts?.map((p) => p.id) ?? [];

    const portsIds = new Set([...componentPortsIds, ...nodePortsIds]);

    this._ports = new Map();
    portsIds.forEach((id) =>
      this._ports.set(
        id,
        this._createPortState(
          id,
          nodePorts?.find((p) => p.id === id)
        )
      )
    );
  };

  getPort = (portId: string): PortState | undefined => {
    if (portId) {
      return this._ports.get(portId);
    } else return undefined;
  };

  addPort = (port: IPortState): SuccessOrErrorResult<PortState> => {
    if (!port || this._ports.get(port.id)) {
      return errorResult();
    }
    const newPort = this._createPortState(port.id, port);
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

  private _createPortState = (id: string, state?: IPortStateWithoutIds) => {
    return new PortState(this._rootStore, this, id, state);
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

  recalculatePortsOffset = () => {
    this._ports.forEach((p) => p.recalculateOffset());
  };

  get transformString() {
    return generateTransform(this._position);
  }

  get componentDefinition() {
    const { visualComponents } = this._rootStore.nodesSettings;
    return visualComponents.getComponent(this.type);
  }

  get selected() {
    return this._selected;
  }

  set selected(value: boolean) {
    this._selected = value;
    if (!value) {
      this.isDragActive = false;
    }
  }

  get isSelectionEnabled(): boolean {
    return this._isSelectionEnabled === undefined
      ? this._rootStore.diagramSettings.userInteraction.nodeSelection
      : this._isSelectionEnabled;
  }

  setIsSelectionEnabled = (
    value: boolean | null | undefined
  ): PropertyChange<boolean | undefined> | undefined => {
    const change = this._setIsSelectionEnabled(value);

    if (change) {
      this._rootStore.callbacks.nodeIsSelectionEnabledChanged(this, change);
    }

    return change;
  };

  private _setIsSelectionEnabled = (
    value: boolean | null | undefined
  ): PropertyChange<boolean | undefined> | undefined => {
    const valueToSet = isBoolean(value) ? value : undefined;
    if (this._isSelectionEnabled === valueToSet) {
      return undefined;
    }

    const oldValue = this._isSelectionEnabled;
    this._isSelectionEnabled = valueToSet;
    return {
      oldValue: oldValue,
      newValue: this._isSelectionEnabled,
    };
  };

  get isDragEnabled(): boolean {
    return (
      (this._isDragEnabled === undefined
        ? this._rootStore.diagramSettings.userInteraction.nodeDrag
        : this._isDragEnabled) && this.isSelectionEnabled
    );
  }

  setIsDragEnabled = (
    value: boolean | null | undefined
  ): PropertyChange<boolean | undefined> | undefined => {
    const change = this._setIsDragEnabled(value);

    if (change) {
      this._rootStore.callbacks.nodeIsDragEnabledChanged(this, change);
    }

    return change;
  };

  private _setIsDragEnabled = (
    value: boolean | null | undefined
  ): PropertyChange<boolean | undefined> | undefined => {
    const valueToSet = isBoolean(value) ? value : undefined;
    if (this._isDragEnabled === valueToSet) {
      return undefined;
    }

    const oldValue = this._isDragEnabled;
    this._isDragEnabled = valueToSet;
    return {
      oldValue: oldValue,
      newValue: this._isDragEnabled,
    };
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
  data?: any;
  isSelectionEnabled?: boolean;
  isDragEnabled?: boolean;
  ports?: IPortState[];
}

export interface INodeStateWithId extends INodeStateWithoutId {
  id: string;
}

export interface INodeExport extends INodeStateWithId {
  id: string;
  ports: IPortExport[];
}

export interface INodeState extends INodeStateWithoutId {
  id?: string;
}

export interface INodeStateDiff {
  label?: string | null;
  position?: Point;
  type?: string;
  data?: any;
  isSelectionEnabled?: boolean;
  isDragEnabled?: boolean;
  ports?: IPortState[];
}
