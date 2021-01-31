import { Point } from '../types/common';
import { v4 } from 'uuid';
import { autorun, makeAutoObservable } from 'mobx';
import { HtmlElementRefState } from './htmlElementRefState';
import { componentDefaultType, NodeState, RootStore } from '.';

export class PortState {
  id: string = '';
  nodeId: string = ''
  label?: string = '';
  type: string = '';
  ref: HtmlElementRefState;

  rootStore: RootStore;

  constructor(rootStore: RootStore, id: string = v4(), nodeId : string = v4()) {
    this.id = id;
    this.nodeId = nodeId;
    this.ref = new HtmlElementRefState(null);
    makeAutoObservable(this);
    this.rootStore = rootStore;
    // autorun(() => {
    //   console.log(`Port '${this.nodeId + ' - ' + this.id}'. Offset: ${JSON.stringify(this.offsetRelativeToNode)}. Size: ${JSON.stringify(this.realSize)}`)
    // })
  }

  fromJson = (obj: IPortState) => {
    this.type = obj.type ?? componentDefaultType;
    this.label = obj.label;
  }

  get node() : NodeState | undefined {
    return this.rootStore.nodesStore.nodes[this.nodeId];
  }
  
  get offsetRelativeToNode(): Point | null {
    if (this.node?.ref.current) {
      return this.ref.offsetRelativeToParent(this.node.ref.current);
    }

    return null;
  }

  get realSize() : Point | null {
    return this.ref.realSize;
  }
}

export interface IPortState {
  label?: string;
  type?: string;
}
