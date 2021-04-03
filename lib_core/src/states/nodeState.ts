import { makeAutoObservable } from 'mobx';
import { Point, Dictionary } from 'types/common';
import {
  SuccessOrErrorResult,
  errorResult,
  successValueResult,
} from 'types/result';
import { deepCopy, generateTransform, guidForcedUniqueness } from 'utils';
import { HtmlElementRefState } from 'states/htmlElementRefState';
import { LinkState } from 'states/linkState';
import { PortState, IPortStateWithoutIds } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { ISelectableItem } from 'states/selectionState';
import { componentDefaultType } from 'states/visualComponents';

export class NodeState implements ISelectableItem {
  private _id: string;
  private _label: string;
  private _position: Point;
  private _ports: Dictionary<PortState>;
  private _ref: HtmlElementRefState;
  private _componentType: string;
  private _selected: boolean;
  private _extra: any;

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
  }

  import = (newState?: INodeStateWithoutId) => {
    this.setPosition(newState?.position);
    this.setComponentType(newState?.componentType);
    this.setExtra(newState?.extra);
    this.label = newState?.label ?? '';
    this._ports = {};
    newState?.ports && newState.ports.forEach(this.addPort);
  };

  export = (): INodeStateWithId => ({
    ...deepCopy({
      id: this._id,
      label: this._label,
      position: this._position,
      componentType: this.componentType,
      extra: this.extra,
    }),
    ports: Object.values(this._ports).map((p) => p.export()),
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

  setPosition = (value: Point | null | undefined) => {
    this._position = value ?? [0, 0];
  };

  get componentType() {
    return this._componentType;
  }

  setComponentType = (value: string | null | undefined) => {
    this._componentType = value ?? componentDefaultType;
  };

  get selected() {
    return this._selected;
  }

  set selected(value: boolean) {
    this._selected = value;
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

  get ports(): Readonly<Dictionary<PortState>> {
    return this._ports;
  }

  get transformString() {
    return generateTransform(this._position);
  }

  get componentDefinition() {
    const { visualComponents } = this._rootStore.nodesSettings;
    return visualComponents.getComponent(this.componentType);
  }

  /**
   * @returns Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
   * Value can be @type {null} in case reference to real DOM object is not set.
   */
  get realSize(): Point | null {
    return this._ref.realSize;
  }

  getPort = (portId: string): PortState | undefined => {
    if (portId && this._ports[portId]) {
      return this._ports[portId];
    } else return undefined;
  };

  addPort = (port: INodePortState): SuccessOrErrorResult<PortState> => {
    if (!port || (port.id && this._ports[port.id])) {
      return errorResult();
    }
    const newPort = new PortState(
      this._rootStore,
      port.id ?? guidForcedUniqueness(this._ports),
      this._id,
      port
    );
    this._ports[newPort.id] = newPort;
    return successValueResult(newPort);
  };

  removePort = (portId: string): boolean => {
    if (portId && this._ports[portId]) {
      delete this._ports[portId];
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
}

export interface INodeStateWithoutId {
  label?: string;
  position: Point;
  ports?: INodePortState[];
  componentType?: string;
  extra?: any;
}

export interface INodePortState extends IPortStateWithoutIds {
  id: string;
}

export interface INodeStateWithId extends INodeStateWithoutId {
  id: string;
}

export interface INodeState extends INodeStateWithoutId {
  id?: string;
}
