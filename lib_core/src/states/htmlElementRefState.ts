import { makeAutoObservable } from 'mobx';
import { Point } from '..';

export class HtmlElementRefState {
  private _currentInternal: HTMLDivElement | null;

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

  offsetRelativeToParent = (parent: HTMLElement): Point | null => {
    if (this.current) {
      let iterElement = this.current as HTMLElement | null;
      let acumLeft = 0;
      let acumTop = 0;

      while (parent !== iterElement && iterElement) {
        acumLeft += iterElement.offsetLeft;
        acumTop += iterElement.offsetTop;
        iterElement = iterElement.parentElement;
      }

      return [acumLeft, acumTop];
    }

    return null;
  };

  get realSize(): Point | null {
    if (this.current) {
      return [this.current.clientWidth, this.current.clientHeight];
    } else {
      return null;
    }
  }
}

export interface IHtmlElementRect {
  left: number;
  top: number;
  width: number;
  height: number;
}
