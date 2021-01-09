import { makeAutoObservable, observable } from 'mobx';
import { LinkState } from './linkState';
import { PortState } from './portState';
import { RootStore } from './rootStore';

export class LinkCreationState {
  link: LinkState | null = null;
  targetPortCandidate: PortState | null = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {link: observable, targetPortCandidate: observable});
    this.rootStore = rootStore;
  }

  startLinking(portState: PortState) {
    this.link = new LinkState(this.rootStore);
    this.link.setSource({
      nodeId: portState.nodeId,
      portId: portState.id,
    });
    this.link.setTarget({
      position: this.link.source.point,
    });
  }

  setTargetPortCandidate(portState: PortState) {
    if (this.link?.source && 'portId' in this.link.source) {
      if (
        this.link.source.nodeId !== portState.nodeId
      ) {
        this.targetPortCandidate = portState;
      }
    }
  }

  resetTargetPortCandidate() {
    this.targetPortCandidate = null;
  }

  stopLinking() {
    if (this.targetPortCandidate && this.link) {
      this.link.setTarget({
        nodeId: this.targetPortCandidate.nodeId,
        portId: this.targetPortCandidate.id
      });
      this.rootStore.linksStore.addLink(this.link);
    }
    this.targetPortCandidate = null;
    this.link = null;
  }
}
