import { makeAutoObservable } from 'mobx';
import { Point } from 'utils/point';
import { subtractPoints, multiplyPoint, addPoints } from 'utils/point';
import { LinkPointEndpointState } from 'states/linkPointEndpointState';
import { LinkPortEndpointState } from 'states/linkPortEndpointState';
import {
  ILinkInteractionState,
  ILinkPath,
  createLinkPath,
} from 'states/linkState';
import { PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';

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

  get isLinking() {
    return !!this._source;
  }

  startLinking = (portState: PortState, pointOnPort: Point): boolean => {
    this._resetProps();
    this._source = new LinkPortEndpointState(
      portState.nodeId,
      portState.id,
      this._rootStore
    );

    const sourcePoint = this._source.point;
    const portSize = this._source.port!.ref.size;
    if (sourcePoint && portSize) {
      // endpoint point is calculated for center of port
      const topLeftCornerPoint = subtractPoints(
        sourcePoint,
        multiplyPoint(portSize, 0.5)
      );
      this._target = new LinkPointEndpointState(
        addPoints(
          topLeftCornerPoint,
          multiplyPoint(pointOnPort, 1 / this._rootStore.diagramState.zoom)
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

    const canAddLink = this._rootStore.linksStore.validateLink({
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
      const result = this._rootStore.linksStore.validateAndAddLink({
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
        this._rootStore.selectionState.select(result.value, true);
      }
    }
    this._resetProps();
  };

  get componentDefinition() {
    const { visualComponents } = this._rootStore.linksSettings;
    return visualComponents.getComponent(LINK_CREATION_COMPONENT_TYPE);
  }

  get path(): ILinkPath | undefined {
    if (!this._source || !this._target) return undefined;
    else return createLinkPath(this._rootStore, this._source, this._target);
  }

  private _resetProps = () => {
    if (this._source) {
      if (this._source.port) {
        this._source.port.validForConnection = true;
      }
      this._source = null;
    }
    this._target = null;
    if (this._targetPortCandidate) {
      this._targetPortCandidate.validForConnection = true;
      this._targetPortCandidate = null;
    }
  };
}

export const LINK_CREATION_COMPONENT_TYPE: string = 'linkCreation';
