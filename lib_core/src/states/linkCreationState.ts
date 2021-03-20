import { makeAutoObservable } from 'mobx';
import {
  createLinkPath,
  ILinkInteractionState,
  ILinkPath,
  LinkPortEndpointState,
  Point,
} from '..';
import { addPoints, multiplyPoint, subtractPoints } from '../utils';
import { LinkPointEndpointState } from './LinkPointEndpointState';
import { PortState } from './portState';
import { RootStore } from './rootStore';

export class LinkCreationState implements ILinkInteractionState {
  private _source: LinkPortEndpointState | null = null;
  private _target: LinkPointEndpointState | null = null;
  private _targetPortCandidate: PortState | null = null;

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  get selected() {
    return true;
  }

  get hovered() {
    return true;
  }

  get source() {
    return this._source;
  }

  get target() {
    return this._target;
  }

  get targetPortCandidate() {
    return this._targetPortCandidate;
  }

  startLinking = (
    portState: PortState,
    eventOffsetRelativeToTarget: Point
  ): boolean => {
    this._resetProps();
    this._source = new LinkPortEndpointState(
      portState.nodeId,
      portState.id,
      this._rootStore
    );

    const sourcePoint = this._source.point;
    const portSize = this._source.port.realSize;
    if (sourcePoint && portSize) {
      // endpoint port is calculated for center of port
      const topLeftCornerPoint = subtractPoints(
        sourcePoint,
        multiplyPoint(portSize, 0.5)
      );
      this._target = new LinkPointEndpointState(
        addPoints(
          topLeftCornerPoint,
          multiplyPoint(
            eventOffsetRelativeToTarget,
            1 / this._rootStore.diagramState.zoom
          )
        )
      );
    } else {
      this._resetProps();
      return false;
    }

    return true;
  };

  setTargetPortCandidate = (portState: PortState) => {
    if (!this._source) return;

    const canAddLink = this._rootStore.linksStore.canAddLink({
      source: {
        nodeId: this._source.nodeId,
        portId: this._source.portId,
      },
      target: {
        nodeId: portState.nodeId,
        portId: portState.id,
      },
    });

    this._targetPortCandidate = portState;
    if (canAddLink.success) {
      portState.validForConnection = true;
    } else {
      portState.validForConnection = false;
    }
  };

  resetTargetPortCandidate = (portState: PortState) => {
    if (this._targetPortCandidate === portState) {
      this._targetPortCandidate = null;
    }
    portState.validForConnection = true;
  };

  stopLinking = () => {
    if (this._targetPortCandidate && this._source) {
      const result = this._rootStore.linksStore.addLink({
        source: {
          nodeId: this._source.nodeId,
          portId: this._source.portId,
        },
        target: {
          nodeId: this._targetPortCandidate.nodeId,
          portId: this._targetPortCandidate.id,
        },
      });
      if (result.success) {
        this._rootStore.selectionState.select(result.value, false);
      }
    }
    this._resetProps();
  };

  get componentDefinition() {
    const { visualComponents } = this._rootStore.linksSettings;
    return visualComponents.getComponent(linkCreationComponentType);
  }

  get path(): ILinkPath | undefined {
    if (!this._source || !this._target) return undefined;
    else return createLinkPath(this._rootStore, this._source, this._target);
  }

  private _resetProps = () => {
    if (this._source) {
      this._source.port.validForConnection = true;
      this._source = null;
    }
    this._target = null;
    if (this._targetPortCandidate) {
      this._targetPortCandidate.validForConnection = true;
      this._targetPortCandidate = null;
    }
  };
}

export const linkCreationComponentType: string = 'linkCreation';
