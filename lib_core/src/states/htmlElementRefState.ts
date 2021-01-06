import { makeAutoObservable } from 'mobx';

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

  getBoundingClientRect(currentZoom: number) : IDomRect | undefined {
    const realRect = this.current?.getBoundingClientRect();
    if (realRect) {
      const rectJson = realRect.toJSON() as IDomRect;
      rectJson.width /= currentZoom;
      rectJson.height /= currentZoom;
      return rectJson;
    }
    else {
      return undefined;
    }
  }
}

export interface IDomRect {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}
