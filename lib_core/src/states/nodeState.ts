import { componentDefaultType, Dictionary, Point } from '../types/common';
import { MutableRefObject } from 'react';
import { makeAutoObservable, makeObservable, observable } from 'mobx';
import { IPortStateObject, PortState } from './portState';
import { v4 } from 'uuid';
import { generateTransform } from '../utils';
import { RootStore } from './rootStore';
import React from 'react';

export class MutableRefState<T> {
  currentInternal: T;

  constructor(initValue: T) {
    this.currentInternal = initValue;
    makeAutoObservable(this);
  }

  get current() {
    return this.currentInternal;
  }

  set current(value: T) {
    this.currentInternal = value;
  }
}

export class NodeState {
  id: string = '';
  offset: Point = [0,0];
  ports: Dictionary<PortState> = {};
  ref: MutableRefState<HTMLDivElement | null> = new MutableRefState(null);
  componentType: string = componentDefaultType;
  extra?: any = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore, id: string = v4()) { 
    this.id = id;
    makeAutoObservable(this);
    this.rootStore = rootStore;
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
        const portState = new PortState(portId);
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
}

export interface INodeState {
  id?: string;
  position: Point;
  ports?: Dictionary<IPortStateObject>;
  componentType?: string;
  extra?: any;
}
