import { Point } from '../types/common';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './rootStore';
import { IUserInteractionTransformation } from '../hooks/userInteractions/common';
import { clampValue, generateTransform, MAX_SCALE, MIN_SCALE } from '../utils';

export class DiagramState implements IUserInteractionTransformation {
  offset: Point = [0, 0];
  zoom: number = 1;
  
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore;
  }

  setOffset = (newOffset: Point) => {
    this.offset = newOffset
  }

  setTransformation = (newOffset: Point, newZoom: number) => {
    this.setOffset(newOffset);
    this.setZoom(newZoom);
  }

  setZoom = (newZoom: number) => {
    this.zoom = clampValue(newZoom, MIN_SCALE, MAX_SCALE);
  }

  get transformString() {
    return generateTransform(this.offset, this.zoom);
  }
}

export interface ICommonSettings {
  readonly: boolean; // TODO: allow to make readonly specific components, such as nodes, links.
}
