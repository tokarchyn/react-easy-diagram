import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { addPoints } from '../utils';

export class LinkPointEndpointState {
  point: Point;

  constructor(pos: Point) {
    this.point = pos;
    makeAutoObservable(this);
  }

  translateBy = (pointToTranslateBy: Point) => {
    this.point = addPoints(this.point, pointToTranslateBy);
  };
}