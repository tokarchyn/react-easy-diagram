import { PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { NodeState } from 'states/nodeState';
import { SuccessOrErrorResult } from 'utils/result';

export class Callbacks implements ICallbacks {
  private _validateLinkEndpoints?: (
    source: PortState,
    target: PortState,
    rootStore: RootStore
  ) => boolean;
  private _nodesAdded?: (
    addResults: SuccessOrErrorResult<NodeState>[],
    importing: boolean,
    rootStore: RootStore
  ) => any;

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore;
  }

  import = (callbacks?: ICallbacks) => {
    this._validateLinkEndpoints = callbacks?.validateLinkEndpoints;
    this._nodesAdded = callbacks?.nodesAdded;
  };

  export = () => ({
    validateLinkEndpoints: this._validateLinkEndpoints,
    nodesAdded: this._nodesAdded,
  });

  get validateLinkEndpoints() {
    return this._validateLinkEndpoints;
  }
  get nodesAdded() {
    return this._nodesAdded;
  }
}

export interface ICallbacks {
  validateLinkEndpoints?: Callbacks['validateLinkEndpoints'];
  nodesAdded?: Callbacks['nodesAdded'];
}
