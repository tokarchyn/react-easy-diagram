import { componentDefaultType } from '../types/common';
import { v4 } from 'uuid';
import { makeAutoObservable } from 'mobx';

export class PortState {
  id: string = '';
  label?: string = '';
  type: string = '';

  constructor(id: string = v4()) {
    this.id = id;
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
