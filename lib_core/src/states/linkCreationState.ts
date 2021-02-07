import { makeAutoObservable } from 'mobx';
import { createLinkPath, ILinkPath, LinkPortEndpointState, Point } from '..';
import { addPoints } from '../utils';
import { LinkPointEndpointState } from './LinkPointEndpointState';
import { PortState } from './portState';
import { RootStore } from './rootStore';

export class LinkCreationState {
  source: LinkPortEndpointState | null = null;
  target: LinkPointEndpointState | null = null;
  targetPortCandidate: PortState | null = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  startLinking = (
    portState: PortState,
    eventOffsetRelativeToTarget: Point | undefined
  ): boolean => {
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
  };

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

    this.targetPortCandidate = portState;
    if (canAddLink.result) {
      portState.validForConnection = true;
    } else {
      portState.validForConnection = false;
    }
  };

  resetTargetPortCandidate = (portState: PortState) => {
    if (this.targetPortCandidate === portState) {
      this.targetPortCandidate = null;
    }
    portState.validForConnection = true;
  };

  stopLinking = () => {
    if (this.targetPortCandidate && this.source) {
      this.rootStore.linksStore.addLinkFromData({
        source: {
          nodeId: this.source.nodeId,
          portId: this.source.portId,
        },
        target: {
          nodeId: this.targetPortCandidate.nodeId,
          portId: this.targetPortCandidate.id,
        },
      });
    }
    this.resetProps();
  };

  get componentDefinition() {
    const { visualComponents } = this.rootStore.linksSettings;
    return visualComponents.getComponent(linkCreationComponentType);
  }

  get path(): ILinkPath | undefined {
    if (!this.source || !this.target) return undefined;
    else return createLinkPath(this.rootStore, this.source, this.target);
  }

  private resetProps = () => {
    if (this.source) {
      this.source.port.validForConnection = true;
      this.source = null;
    }
    this.target = null;
    if (this.targetPortCandidate) {
      this.targetPortCandidate.validForConnection = true;
      this.targetPortCandidate = null;
    }
  };
}

export const linkCreationComponentType: string = 'linkCreation';
