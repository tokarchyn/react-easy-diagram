import { makeAutoObservable } from 'mobx';
import { isObject } from 'utils/common';

export class UserInteractionSettings {
  private _diagramZoom: boolean;
  private _diagramPan: boolean;
  private _nodeDrag: boolean;
  private _portConnection: boolean;
  private _nodeSelection: boolean;
  private _linkSelection: boolean;

  constructor() {
    this.import();
    makeAutoObservable(this);
  }

  import = (obj?: Partial<IUserInteraction> | boolean) => {
    if (obj === true || obj === undefined || obj === null) this.setAll(true);
    else if (obj === false) this.setAll(false);
    else if (isObject(obj)) {
      this._diagramZoom = obj.diagramZoom ?? true;
      this._diagramPan = obj.diagramPan ?? true;
      this._nodeDrag = obj.nodeDrag ?? true;
      this._portConnection = obj.portConnection ?? true;
      this._nodeSelection = obj.nodeSelection ?? true;
      this._linkSelection = obj.linkSelection ?? true;
    }
  };

  setAll = (value: boolean) => {
    this._diagramZoom = value;
    this._diagramPan = value;
    this._nodeDrag = value;
    this._portConnection = value;
    this._nodeSelection = value;
    this._linkSelection = value;
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
}

export interface IUserInteraction {
  diagramZoom: boolean;
  diagramPan: boolean;
  nodeDrag: boolean;
  portConnection: boolean;
  nodeSelection: boolean;
  linkSelection: boolean;
}
