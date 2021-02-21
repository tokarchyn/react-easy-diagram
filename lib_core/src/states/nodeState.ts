import { Dictionary, Point } from '../types/common';
import { makeAutoObservable } from 'mobx';
import { IPortState, PortState } from './portState';
import { generateTransform, guidForcedUniqueness } from '../utils';
import { RootStore } from './rootStore';
import { HtmlElementRefState } from './htmlElementRefState';
import { componentDefaultType } from './visualComponents';

export class NodeState {
  id: string;
  offset: Point;
  private _ports: Dictionary<PortState>;
  ref: HtmlElementRefState;
  componentType: string;
  extra?: any;

  rootStore: RootStore;

  constructor(rootStore: RootStore, id: string, state?: INodeStateWithoutId) {
    this.rootStore = rootStore;

    this.id = id;
    this.ref = new HtmlElementRefState(null);
    this.import(state);

    makeAutoObservable(this, {
      rootStore: false,
    });
  }

  setOffset = (newOffset: Point) => {
    this.offset = newOffset;
  };

  import = (newState?: INodeStateWithoutId) => {
    this.offset = newState?.position ?? [0, 0];
    this.componentType = newState?.componentType ?? componentDefaultType;
    this.extra = newState?.extra ?? null;

    this._ports = {};
    newState?.ports && newState.ports.forEach(this.addPort);
  };

  get ports(): Readonly<Dictionary<PortState>> {
    return this._ports;
  }

  get transformString() {
    return generateTransform(this.offset);
  }

  get componentDefinition() {
    const { visualComponents } = this.rootStore.nodesSettings;
    return visualComponents.getComponent(this.componentType);
  }

  get realSize(): Point | null {
    return this.ref.realSize;
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
      this.rootStore,
      port.id ?? guidForcedUniqueness(this._ports),
      this.id,
      port
    );
    this._ports[newPort.id] = newPort;
    return true;
  };

  removePort = (portId: string): boolean => {
    if (portId && this._ports[portId]) {
      delete this._ports[portId];
      this.rootStore.linksStore.removePortLinks(this.id, portId);
      return true;
    }
    return false;
  };

  getPortOrThrowException = (portId: string): PortState => {
    const port = this.getPort(portId);
    if (port) return port;
    else
      throw `Port with id '${portId}' does not exist in the node '${this.id}'`;
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
