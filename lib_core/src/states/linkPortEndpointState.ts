import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { RootStore } from './rootStore';
import { PortState } from './portState';
import { NodeState } from './nodeState';
import { addPoints, multiplyPoint } from '../utils';

export class LinkPortEndpointState implements ILinkPortEndpoint {
  nodeId: string;
  portId: string;

  rootStore: RootStore;

  constructor(nodeId: string, portId: string, rootStore: RootStore) {
    this.nodeId = nodeId;
    this.portId = portId;
    rootStore.nodesStore
      .getNodeOrThrowException(this.nodeId)
      .getPortOrThrowException(this.portId);
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get node(): NodeState {
    return this.rootStore.nodesStore.getNodeOrThrowException(this.nodeId);
  }

  get port(): PortState {
    return this.node.getPortOrThrowException(this.portId);
  }

  get point(): Point | undefined {
    if (this.port.offsetRelativeToNode && this.port.realSize) {
      return addPoints(
        this.node.offset,
        addPoints(
          this.port.offsetRelativeToNode,
          multiplyPoint(this.port.realSize, 0.5)
        )
      );
    }

    return undefined;
  }
}

export interface ILinkPortEndpoint {
  nodeId: string;
  portId: string;
}

export function linkPortEndpointsEquals(
  a: ILinkPortEndpoint,
  b: ILinkPortEndpoint
): boolean {
  return a.nodeId === b.nodeId && a.portId === b.portId;
}
