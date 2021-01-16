import { makeAutoObservable, observable } from 'mobx';
import { Point } from '..';
import { addPoints } from '../utils';
import { LinkState } from './linkState';
import { PortState } from './portState';
import { RootStore } from './rootStore';

export class LinkCreationState {
  link: LinkState | null = null;
  targetPortCandidate: PortState | null = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      link: observable,
      targetPortCandidate: observable,
    });
    this.rootStore = rootStore;
  }

  startLinking(
    portState: PortState,
    eventOffsetRelativeToTarget: Point | undefined
  ) {
    this.link = new LinkState(this.rootStore);
    this.link.setSource({
      nodeId: portState.nodeId,
      portId: portState.id,
    });
    this.link.setTarget({
      position:
        portState.offsetRelativeToNode &&
        portState.node &&
        eventOffsetRelativeToTarget
          ? addPoints(
              addPoints(portState.offsetRelativeToNode, portState.node.offset),
              eventOffsetRelativeToTarget
            )
          : this.link.source.point,
    });
  }

  setTargetPortCandidate(portState: PortState) {
    if (this.link?.source && 'portId' in this.link.source) {
      if (this.link.source.nodeId !== portState.nodeId) {
        this.targetPortCandidate = portState;
      }
    }
  }

  resetTargetPortCandidateIfSame(portState: PortState) {
    if (this.targetPortCandidate === portState) {
      this.targetPortCandidate = null;
    }
  }

  stopLinking() {
    if (this.targetPortCandidate && this.link) {
      this.link.setTarget({
        nodeId: this.targetPortCandidate.nodeId,
        portId: this.targetPortCandidate.id,
      });
      this.rootStore.linksStore.addLink(this.link);
    }
    this.targetPortCandidate = null;
    this.link = null;
  }
}
