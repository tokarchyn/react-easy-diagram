import { PortState } from './portState';
import { RootStore } from './rootStore';

export class Callbacks implements ICallbacks {
  validateLinkEndpoints?: (source: PortState, target: PortState, rootStore: RootStore) => boolean; 
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  setCallbacks = (callbacks?: ICallbacks) => {
    this.validateLinkEndpoints = callbacks?.validateLinkEndpoints;
  }
}

export interface ICallbacks {
  validateLinkEndpoints?: Callbacks['validateLinkEndpoints']
}