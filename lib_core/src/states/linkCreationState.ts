import { makeAutoObservable, observable } from 'mobx';
import {
  componentDefaultType,
  createLinkPath,
  ILinkPath,
  LinkPortEndpointState,
  Point,
} from '..';
import { addPoints } from '../utils';
import { LinkPointEndpointState } from './LinkPointEndpointState';
import { ILinkPortEndpoint } from './linkPortEndpointState';
import { PortState } from './portState';
import { RootStore } from './rootStore';

export class LinkCreationState {
  componentType: string = componentDefaultType;
  source: LinkPortEndpointState | null = null;
  target: LinkPointEndpointState | null = null;
  linkTargetCandidate: ILinkPortEndpoint | null = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  startLinking(
    portState: PortState,
    eventOffsetRelativeToTarget: Point | undefined
  ): boolean {
    this.resetProps();
    this.source = new LinkPortEndpointState(
      portState.nodeId,
      portState.id,
      this.rootStore
    );

    let targetPoint: Point;
    if (portState.offsetRelativeToNode && eventOffsetRelativeToTarget) {
      targetPoint = addPoints(
        addPoints(portState.offsetRelativeToNode, portState.node.offset),
        eventOffsetRelativeToTarget
      );
    } else {
      const sourcePoint = this.source.point;
      if (sourcePoint) {
        targetPoint = sourcePoint;
      } else {
        this.resetProps();
        return false;
      }
    }

    this.target = new LinkPointEndpointState(targetPoint);

    return true;
  }

  setTargetPortCandidate = (portState: PortState) => {
    if (!this.source) return;

    const canAddLink = this.rootStore.linksStore.canAddLink({
      source: {
        nodeId: this.source.nodeId,
        portId: this.source.portId,
      },
      target: {
        nodeId: portState.nodeId,
        portId: portState.id,
      },
    });

    if (canAddLink.result) {
      this.linkTargetCandidate = {
        nodeId: portState.nodeId,
        portId: portState.id,
      };
      portState.validForConnection = true;
    } else {
      console.log(canAddLink.error);
      portState.validForConnection = false;
    }
  };

  resetTargetPortCandidateIfSame = (portState: PortState) => {
    if (
      this.linkTargetCandidate &&
      this.linkTargetCandidate.nodeId === portState.nodeId &&
      this.linkTargetCandidate.portId === portState.id
    ) {
      this.linkTargetCandidate = null;
    }
  };

  stopLinking = () => {
    if (this.linkTargetCandidate && this.source) {
      this.rootStore.linksStore.addLinkFromData({
        source: {
          nodeId: this.source.nodeId,
          portId: this.source.portId,
        },
        target: this.linkTargetCandidate,
      });
    }
    this.resetProps();
  };

  get componentDefinition() {
    const { visualComponents } = this.rootStore.linksSettings;
    return visualComponents.getComponent(this.componentType);
  }

  get path(): ILinkPath | undefined {
    if (!this.source || !this.target) return undefined;
    else return createLinkPath(this.rootStore, this.source, this.target);
  }

  private resetProps = () => {
    this.source = null;
    this.target = null;
    this.linkTargetCandidate = null;
  };
}
