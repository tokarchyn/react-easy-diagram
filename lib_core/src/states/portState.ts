import { Point } from '../types/common';
import { makeAutoObservable } from 'mobx';
import { HtmlElementRefState } from './htmlElementRefState';
import { componentDefaultType, NodeState, RootStore } from '.';

export class PortState {
  id: string;
  nodeId: string;
  label?: string;
  type: string;
  ref: HtmlElementRefState = new HtmlElementRefState(null);
  dragging: boolean = false;
  hovered: boolean = false;
  validForConnection: boolean = true;

  rootStore: RootStore;

  constructor(
    rootStore: RootStore,
    id: string,
    nodeId: string,
    state?: IPortStateWithoutIds
  ) {
    this.id = id;
    this.nodeId = nodeId;
    this.import(state);

    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  import = (state?: IPortStateWithoutIds) => {
    this.type = state?.type ?? componentDefaultType;
    this.label = state?.label ?? '';
  };

  hover = () => {
    this.hovered = true;
  };

  stopHover = () => {
    this.hovered = false;
  };

  drag = () => {
    this.dragging = true;
  };

  stopDrag = () => {
    this.dragging = false;
  };

  get node(): NodeState {
    return this.rootStore.nodesStore.getNodeOrThrowException(this.nodeId);
  }

  get offsetRelativeToNode(): Point | null {
    if (this.node.ref.current) {
      return this.ref.offsetRelativeToParent(this.node.ref.current);
    }

    return null;
  }

  get realSize(): Point | null {
    return this.ref.realSize;
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
