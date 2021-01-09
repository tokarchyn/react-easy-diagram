import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { RootStore } from './rootStore';
import { addPoints, multiplyPoint } from '../utils';
import { PortState } from './portState';

export class LinkEndpointState {
  position: Point | null = null;
  nodeId: string | null = null;
  portId: string | null = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fromJson = (obj: LinkEndpoint) => {
    if ('position' in obj) {
      this.position = obj.position;
      this.nodeId = null;
      this.portId = null;
    }
    else {
      this.position= null;
      this.nodeId = obj.nodeId;
      this.portId = obj.portId ?? null;
    }
  };

  get port(): PortState | undefined {
    if (this.nodeId && this.portId) {
      const node = this.rootStore.nodesStore.nodes[this.nodeId];
      if (node?.ports) {
        return node.ports[this.portId];
      }
    }

    return undefined;
  }

  get point(): Point {
    if (this.nodeId) {
      const node = this.rootStore.nodesStore.nodes[this.nodeId];

      if (this.portId) {
        const port = node.ports[this.portId];

        if (port && port.offsetRelativeToNode && port.realSize) {
          return [
            node.offset[0] + port.offsetRelativeToNode[0] + port.realSize[0]/2,
            node.offset[1] + port.offsetRelativeToNode[1] + port.realSize[1]/2
          ];
        }
      }

      if (node.realSize) {
        return [
          node.offset[0] + (node.realSize[0] / 2),
          node.offset[1] + (node.realSize[1] / 2)
        ];
      }
      else return node.offset;
    } 

    return this.position ?? [0,0];
  }

  get hasOnlyPosition() : boolean {
    return !!this.position && !this.nodeId;
  }
}

export interface ILinkNodeEndpoint {
  nodeId: string;
  portId?: string;
}

export interface ILinkPointEndpoint {
  position: Point;
}

export type LinkEndpoint = ILinkNodeEndpoint | ILinkPointEndpoint;
