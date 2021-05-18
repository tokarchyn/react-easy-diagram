import { PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';

export class Callbacks implements ICallbacks {
  private _validateLinkEndpoints?: (
    source: PortState,
    target: PortState,
    rootStore: RootStore
  ) => boolean;
  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore;
  }

  import = (callbacks?: ICallbacks) => {
    this._validateLinkEndpoints = callbacks?.validateLinkEndpoints;
  };

  export = () => ({
    validateLinkEndpoints: this._validateLinkEndpoints,
  });

  get validateLinkEndpoints() {
    return this._validateLinkEndpoints;
  }
}

export interface ICallbacks {
  validateLinkEndpoints?: Callbacks['validateLinkEndpoints'];
}
