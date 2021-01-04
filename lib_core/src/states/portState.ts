import { componentDefaultType } from '../types/common';
import { v4 } from 'uuid';
import { makeAutoObservable } from 'mobx';
import { MutableRefState } from './mutableRefState';

export class PortState {
  id: string = '';
  nodeId: string = ''
  label?: string = '';
  type: string = '';
  ref: MutableRefState<HTMLDivElement | null> = new MutableRefState(null);

  constructor(id: string = v4(), nodeId : string = v4()) {
    this.id = id;
    this.nodeId = nodeId;
    makeAutoObservable(this);
  }

  fromJson = (obj: IPortState) => {
    this.type = obj.type ?? componentDefaultType;
    this.label = obj.label;
  }
}

export interface IPortState {
  label?: string;
  type?: string;
}
