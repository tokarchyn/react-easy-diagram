import { makeAutoObservable } from 'mobx';
import { Point } from '..';

export class HtmlElementRefState {
  currentInternal: HTMLDivElement | null;

  constructor(initValue: HTMLDivElement | null) {
    this.currentInternal = initValue;
    makeAutoObservable(this);
  }

  get current() {
    return this.currentInternal;
  }

  set current(value: HTMLDivElement | null) {
    this.currentInternal = value;
  }

  offsetRelativeToParent = (parent: HTMLElement) : Point | null => {
    if (this.current){
      let iterElement = this.current as HTMLElement | null;
      let acumLeft = 0;
      let acumTop = 0;
      while(parent !== iterElement && iterElement) {
        acumLeft += iterElement.offsetLeft;
        acumTop += iterElement.offsetTop;
        iterElement = iterElement.parentElement;
      }

      return [acumLeft, acumTop];
    }
    
    return null;
  }

  get realSize() : Point | null {
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
