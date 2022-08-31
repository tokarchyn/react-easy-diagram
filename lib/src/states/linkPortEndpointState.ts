import { makeAutoObservable } from 'mobx';
import { PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { deepCopy } from 'utils/common';
import { addPoints, multiplyPoint, Point } from 'utils/point';

export class LinkPortEndpointState implements ILinkPortEndpoint {
  private _port: PortState;

  private _rootStore: RootStore;

  constructor(port: PortState, rootStore: RootStore) {
    this._port = port;
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  export = (): ILinkPortEndpoint =>
    deepCopy({
      nodeId: this._port.nodeId,
      portId: this._port.id,
    });

  get port(): PortState {
    return this._port;
  }

  get point(): Point | undefined {
    if (this.port.offsetRelativeToNode && this.port.ref.sizeExcludingZoom) {
      return addPoints(
        this.port.node.position,
        addPoints(
          this.port.offsetRelativeToNode,
          multiplyPoint(this.port.ref.sizeExcludingZoom, 0.5)
        )
      );
    }

    return undefined;
  }

  get portId() {
    return this.port.id;
  }

  get nodeId() {
    return this.port.node.id;
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
