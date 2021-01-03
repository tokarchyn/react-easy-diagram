import { componentDefaultType, Dictionary, Point } from '../types/common';
import { MutableRefObject } from 'react';
import { autorun, makeAutoObservable, observable } from 'mobx';
import { IPortStateObject, PortState } from './portState';
import { v4 } from 'uuid';
import { generateTransform } from '../utils';
import { RootStore } from './rootStore';
import { trace } from "mobx";

export class NodeState {
  id: string;
  offset: Point;
  ports: Dictionary<PortState>;
  ref?: MutableRefObject<HTMLDivElement | null>;
  componentType: string = componentDefaultType;
  extra?: any;

  pointer: string = v4();

  // rootStore: RootStore;

  constructor(id: string = v4()) {
    makeAutoObservable(this);
    this.id = id;
    // this.rootStore = rootStore;
  }

  setOffset = (newOffset: Point) => {
    // console.trace();
    // console.log(`Set new offset ${JSON.stringify(newOffset)}`);
    this.offset = newOffset;
  }

  fromJson = (obj: INodeState) => {
    this.offset = obj.position;
    this.componentType = obj.componentType ?? componentDefaultType;
    this.extra = obj.extra;

    this.ports = {};
    if (obj.ports && Object.keys(obj.ports).length > 0) {
      Object.entries(obj.ports).forEach(([portId, portObj]) => {
        const portState = new PortState(portId);
        portState.fromJson(portObj);
        this.ports[portId] = portState;
      });
    }
  }

  get transformString() {
    return generateTransform(this.offset);
  }

  // get componentDefinition() {
  //   const { visualComponents } = this.rootStore.nodesSettings;
  //   return visualComponents.getComponent(this.componentType);
  // }
}

export interface INodeState {
  id?: string;
  position: Point;
  ports?: Dictionary<IPortStateObject>;
  componentType?: string;
  extra?: any;
}
