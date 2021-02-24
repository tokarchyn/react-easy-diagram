import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { addPoints } from '../utils';

export class LinkPointEndpointState {
  private _point: Point;

  constructor(pos: Point) {
    this._point = pos;
    makeAutoObservable(this);
  }

  get point() {
    return this._point;
  }

  translateBy = (pointToTranslateBy: Point) => {
    this._point = addPoints(this._point, pointToTranslateBy);
  };
}
