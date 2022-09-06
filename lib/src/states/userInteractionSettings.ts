import { makeAutoObservable } from 'mobx';

export class UserInteractionSettings {
  private _diagramZoom: boolean;
  private _diagramPan: boolean;
  private _nodeDrag: boolean;
  private _portConnection: boolean;
  private _nodeSelection: boolean;
  private _linkSelection: boolean;
  private _multiselectionKey: MultipleSelectionKey;
  private _disableAllPointerInteractionsCounter: number;

  constructor() {
    this.import();
    makeAutoObservable(this);
  }

  import = (obj?: Partial<IUserInteraction>) => {
    this._diagramZoom = obj?.diagramZoom ?? true;
    this._diagramPan = obj?.diagramPan ?? true;
    this._nodeDrag = obj?.nodeDrag ?? true;
    this._portConnection = obj?.portConnection ?? true;
    this._nodeSelection = obj?.nodeSelection ?? true;
    this._linkSelection = obj?.linkSelection ?? true;
    this._multiselectionKey = obj?.multiselectionKey ?? 'shift';
    this._disableAllPointerInteractionsCounter =
      obj?.disableAllMouseAndTouchInteractions ? 1 : 0;
  };

  get diagramZoom() {
    return this._diagramZoom;
  }

  set diagramZoom(value: boolean) {
    this._diagramZoom = value;
  }

  get diagramPan() {
    return this._diagramPan;
  }

  set diagramPan(value: boolean) {
    this._diagramPan = value;
  }

  get nodeDrag() {
    return this._nodeDrag;
  }

  set nodeDrag(value: boolean) {
    this._nodeDrag = value;
  }

  get portConnection() {
    return this._portConnection;
  }

  set portConnection(value: boolean) {
    this._portConnection = value;
  }

  get nodeSelection() {
    return this._nodeSelection;
  }

  set nodeSelection(value: boolean) {
    this._nodeSelection = value;
  }

  get linkSelection() {
    return this._linkSelection;
  }

  set linkSelection(value: boolean) {
    this._linkSelection = value;
  }

  get multiselectionKey() {
    return this._multiselectionKey;
  }

  set multiselectionKey(value: MultipleSelectionKey) {
    this._multiselectionKey = value;
  }

  disableAllPointerInteractions = (force: boolean = false) => {
    this._disableAllPointerInteractionsCounter = force
      ? 1
      : this._disableAllPointerInteractionsCounter + 1;
  };

  enableAllPointerInteractions = (force: boolean = false) => {
    this._disableAllPointerInteractionsCounter = force
      ? 0
      : this._disableAllPointerInteractionsCounter - 1;
  };

  get arePointerInteractionsDisabled(): boolean {
    return this._disableAllPointerInteractionsCounter > 0;
  }

  isCallbackMultiselectionActivated = (
    shiftKey: boolean,
    altKey: boolean,
    ctrlKey: boolean,
    metaKey: boolean
  ): boolean => {
    switch (this.multiselectionKey) {
      case 'alt':
        return altKey;
      case 'ctrl':
        return ctrlKey;
      case 'meta':
        return metaKey;
      case 'shift':
        return shiftKey;
      default:
        return false;
    }
  };
}

export interface IUserInteraction {
  diagramZoom: boolean;
  diagramPan: boolean;
  nodeDrag: boolean;
  portConnection: boolean;
  nodeSelection: boolean;
  linkSelection: boolean;
  multiselectionKey: MultipleSelectionKey;
  disableAllMouseAndTouchInteractions: boolean;
}

export type MultipleSelectionKey = 'ctrl' | 'alt' | 'meta' | 'shift';
