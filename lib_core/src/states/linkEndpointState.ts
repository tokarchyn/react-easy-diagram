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
      const nodeRect = node.ref.getBoundingClientRect(this.rootStore.diagramState.zoom);

      let portRect; 
      if (this.portId) {
        portRect = node.ports[this.portId].ref.getBoundingClientRect(this.rootStore.diagramState.zoom);
      }

      if (nodeRect && portRect) {
        let diff = [
          nodeRect.left - portRect.left,
          nodeRect.top - portRect.top
        ] as Point;
        diff = multiplyPoint(diff, -1/this.rootStore.diagramState.zoom)
        let result = addPoints(node.offset,diff);
        result = addPoints(result, [portRect.width/2, portRect.height/2]);
        return result;
      }
      else if (nodeRect) {
        return [
          node.offset[0] + (nodeRect.width / 2),
          node.offset[1] + (nodeRect.height / 2)
        ];
      }
      else {
        return node.offset;
      }
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
