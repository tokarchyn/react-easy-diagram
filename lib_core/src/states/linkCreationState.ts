import { makeAutoObservable } from 'mobx';
import { v4 } from 'uuid';
import { Dictionary } from '../types/common';
import { ILinkState, LinkState } from './linkState';
import { RootStore } from './rootStore';

export class LinkCreationState {
  
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, { rootStore: false });
  }
}
