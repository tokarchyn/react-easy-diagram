import { Dictionary, Point } from '../types/common';
import { makeAutoObservable } from 'mobx';
import { IPortState, PortState } from './portState';
import { deepCopy, generateTransform, guidForcedUniqueness } from '../utils';
import { RootStore } from './rootStore';
import { HtmlElementRefState } from './htmlElementRefState';
import { componentDefaultType } from './visualComponents';

export class NodeState {
  private _id: string;
  private _position: Point;
  private _ports: Dictionary<PortState>;
  private _ref: HtmlElementRefState;
  private _componentType: string;
  private _extra: any;

  private _rootStore: RootStore;

  constructor(rootStore: RootStore, id: string, state?: INodeStateWithoutId) {
    this._rootStore = rootStore;

    this._id = id;
    this._ref = new HtmlElementRefState(null);
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

    this._ports = {};
    newState?.ports && newState.ports.forEach(this.addPort);
  };

  export = (): INodeStateWithId => ({
    ...deepCopy({
      id: this._id,
      position: this._position,
      componentType: this.componentType,
      extra: this.extra,
    }),
    ports: Object.values(this._ports).map((p) => p.export()),
  });

  get id() {
    return this._id;
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

  get realSize(): Point | null {
    return this._ref.realSize;
  }

  getPort = (portId: string): PortState | undefined => {
    if (portId && this._ports[portId]) {
      return this._ports[portId];
    } else return undefined;
  };

  addPort = (port: IPortState): boolean => {
    if (!port || (port.id && this._ports[port.id])) {
      return false;
    }
    const newPort = new PortState(
      this._rootStore,
      port.id ?? guidForcedUniqueness(this._ports),
      this._id,
      port
    );
    this._ports[newPort.id] = newPort;
    return true;
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
}

export interface INodeStateWithoutId {
  position: Point;
  ports?: IPortState[];
  componentType?: string;
  extra?: any;
}

export interface INodeStateWithId extends INodeStateWithoutId {
  id: string;
}

export interface INodeState extends INodeStateWithoutId {
  id?: string;
}
