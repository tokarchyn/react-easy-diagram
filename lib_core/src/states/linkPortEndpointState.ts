import { makeAutoObservable } from 'mobx';
import { addPoints, multiplyPoint, Point } from 'utils/point';
import { deepCopy } from 'utils';
import { NodeState } from 'states/nodeState';
import { PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';

export class LinkPortEndpointState implements ILinkPortEndpoint {
  private _nodeId: string;
  private _portId: string;

  private _rootStore: RootStore;

  constructor(nodeId: string, portId: string, rootStore: RootStore) {
    this._nodeId = nodeId;
    this._portId = portId;
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  export = (): ILinkPortEndpoint =>
    deepCopy({
      nodeId: this._nodeId,
      portId: this._portId,
    });

  get nodeId() {
    return this._nodeId;
  }

  get portId() {
    return this._portId;
  }

  get node(): NodeState {
    return this._rootStore.nodesStore.getNodeOrThrowException(this._nodeId);
  }

  get port(): PortState | undefined {
    return this.node.getPort(this._portId);
  }

  get point(): Point | undefined {
    if (this.port && this.port.offsetRelativeToNode && this.port.realSize) {
      return addPoints(
        this.node.position,
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
