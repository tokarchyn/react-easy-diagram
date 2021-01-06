import { componentDefaultType } from '../types/common';
import { v4 } from 'uuid';
import { makeAutoObservable } from 'mobx';
import { HtmlElementRefState } from './htmlElementRefState';
import { RootStore } from '.';

export class PortState {
  id: string = '';
  nodeId: string = ''
  label?: string = '';
  type: string = '';
  ref: HtmlElementRefState;

  constructor(id: string = v4(), nodeId : string = v4()) {
    this.id = id;
    this.nodeId = nodeId;
    this.ref = new HtmlElementRefState(null);
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
