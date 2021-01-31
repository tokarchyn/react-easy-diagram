import { Dictionary, Point } from '../types/common';
import { autorun, makeAutoObservable } from 'mobx';
import { IPortState, PortState } from './portState';
import { v4 } from 'uuid';
import { generateTransform } from '../utils';
import { RootStore } from './rootStore';
import { HtmlElementRefState } from './htmlElementRefState';
import { componentDefaultType } from './visualComponents';

export class NodeState {
  id: string = '';
  offset: Point = [0,0];
  ports: Dictionary<PortState> = {};
  ref: HtmlElementRefState;
  componentType: string = componentDefaultType;
  extra?: any = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore, id: string = v4()) { 
    this.id = id;
    this.ref = new HtmlElementRefState(null);
    makeAutoObservable(this);
    this.rootStore = rootStore;
    // autorun(() => {
    //   console.log(`Node '${this.id}'. Offset: ${JSON.stringify(this.offset)}. Size: ${JSON.stringify(this.realSize)}`)
    // })
  }

  setOffset = (newOffset: Point) => {
    this.offset = newOffset;
  }

  fromJson = (obj: INodeState) => {
    this.offset = obj.position;
    this.componentType = obj.componentType ?? componentDefaultType;
    this.extra = obj.extra;

    this.ports = {};
    if (obj.ports && Object.keys(obj.ports).length > 0) {
      Object.entries(obj.ports).forEach(([portId, portObj]) => {
        const portState = new PortState(this.rootStore, portId, this.id);
        portState.fromJson(portObj);
        this.ports[portId] = portState;
      });
    }
  }

  get transformString() {
    return generateTransform(this.offset);
  }

  get componentDefinition() {
    const { visualComponents } = this.rootStore.nodesSettings;
    return visualComponents.getComponent(this.componentType);
  }

  get realSize() : Point | null {
    return this.ref.realSize;
  }
}

export interface INodeState {
  id?: string;
  position: Point;
  ports?: Dictionary<IPortState>;
  componentType?: string;
  extra?: any;
}
