import { Point } from '../types/common';
import { autorun, makeAutoObservable } from 'mobx';
import { RootStore } from './rootStore';
import { IUserInteractionTransformation } from '../hooks/userInteractions/common';
import { generateTransform } from '../utils';

export class DiagramState implements IUserInteractionTransformation {
  offset: Point = [0, 0];
  zoom: number = 1;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, { rootStore: false })

    autorun(() =>{
      console.log(`${this.offset}`);
    });
  }

  setOffset = (newOffset: Point) => {
    this.offset = newOffset
  }

  setTransformation = (newOffset: Point, newZoom: number) => {
    this.offset = newOffset;
    this.zoom = newZoom;
  }

  get transformString() {
    return generateTransform(this.offset, this.zoom);
  }
}

export interface ICommonSettings {
  readonly: boolean; // TODO: allow to make readonly specific components, such as nodes, links.
}
