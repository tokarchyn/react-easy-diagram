import { makeAutoObservable } from 'mobx';
import { Point } from 'utils/point';

export class HtmlElementRefState {
  private _currentInternal: HTMLDivElement | null;
  private _triggerSizePositionRecalculation: number = 0;

  constructor(initValue: HTMLDivElement | null) {
    this._currentInternal = initValue;
    makeAutoObservable(this);
  }

  get current() {
    return this._currentInternal;
  }

  set current(value: HTMLDivElement | null) {
    this._currentInternal = value;
  }

  offsetRelativeToParent = (parent: HTMLElement, zoom: number): Point | null => {
    this._triggerSizePositionRecalculation | 1; // to make offsetRelativeToParent dependend on _triggerSizePositionRecalculation
    const curr = this.current as HTMLElement;
    if (!curr) return null;
    const boundingRect = curr.getBoundingClientRect();
    const parentBoundingRect = parent.getBoundingClientRect();
    return [(boundingRect.x - parentBoundingRect.x) / zoom, (boundingRect.y - parentBoundingRect.y) / zoom];
  };

  /**
   * @returns Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
   * Value can be @type {null} in case reference to real DOM object is not set.
   */
  get realSize(): Point | null {
    this._triggerSizePositionRecalculation | 1; // to make realSize dependend on _triggerSizePositionRecalculation
    if (this.current) {
      return [this.current.clientWidth, this.current.clientHeight];
    } else {
      return null;
    }
  }

  recalculateSizeAndPosition = () => {
    this._triggerSizePositionRecalculation += 1; 
  }
}

export interface IHtmlElementRect {
  left: number;
  top: number;
  width: number;
  height: number;
}
