import { makeAutoObservable } from 'mobx';

export class MutableRefState<T> {
  currentInternal: T;

  constructor(initValue: T) {
    this.currentInternal = initValue;
    makeAutoObservable(this);
  }

  get current() {
    return this.currentInternal;
  }

  set current(value: T) {
    this.currentInternal = value;
  }
}
