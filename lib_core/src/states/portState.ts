import { Point } from '../types/common';
import { makeAutoObservable } from 'mobx';
import { HtmlElementRefState } from './htmlElementRefState';
import { componentDefaultType, NodeState, RootStore } from '.';
import { deepCopy } from '../utils';

export class PortState {
  private _id: string;
  private _nodeId: string;
  private _label: string;
  private _type: string;

  private _ref: HtmlElementRefState = new HtmlElementRefState(null);
  private _dragging: boolean = false;
  private _hovered: boolean = false;
  private _validForConnection: boolean = true;

  private _rootStore: RootStore;

  constructor(
    rootStore: RootStore,
    id: string,
    nodeId: string,
    state?: IPortStateWithoutIds
  ) {
    this._id = id;
    this._nodeId = nodeId;
    this.import(state);

    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  get id() {
    return this._id;
  }

  get nodeId() {
    return this._nodeId;
  }

  get ref() {
    return this._ref;
  }

  get dragging() {
    return this._dragging;
  }

  set dragging(value: boolean) {
    this._dragging = value;
  }

  get hovered() {
    return this._hovered;
  }

  set hovered(value: boolean) {
    this._hovered = value;
  }

  get validForConnection() {
    return this._validForConnection;
  }

  set validForConnection(value: boolean) {
    this._validForConnection = value;
  }

  get label() {
    return this._label;
  }

  setLabel = (value: string | null | undefined) => {
    this._label = value ?? '';
  }

  get type() {
    return this._type;
  }

  setType = (value: string | null | undefined) => {
    this._type = value ?? componentDefaultType;
  }

  import = (state?: IPortStateWithoutIds) => {
    this.setType(state?.type);
    this.setLabel(state?.label);
  };

  export = (): IPortStateWithIds =>
    deepCopy({
      id: this._id,
      nodeId: this._nodeId,
      label: this._label,
      type: this._type,
    });

  get node(): NodeState {
    return this._rootStore.nodesStore.getNodeOrThrowException(this.nodeId);
  }

  get offsetRelativeToNode(): Point | null {
    if (this.node.ref.current) {
      return this._ref.offsetRelativeToParent(this.node.ref.current);
    }

    return null;
  }

  /**
   * @returns Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
   * Value can be @type {null} in case reference to real DOM object is not set.
   */
  get realSize(): Point | null {
    return this._ref.realSize;
  }

  get componentDefinition() {
    const { portVisualComponents } = this._rootStore.portsSettings;
    return portVisualComponents.getComponent(this.type);
  }
}

export interface IPortStateWithoutIds {
  label?: string;
  type?: string;
}

export interface IPortStateWithIds extends IPortStateWithoutIds {
  id: string;
  nodeId: string;
}

export interface IPortState extends IPortStateWithoutIds {
  id?: string;
  nodeId?: string;
}
