import { makeAutoObservable, observable } from 'mobx';
import { Point } from 'utils/point';
import { LinkPointEndpointState } from 'states/linkPointEndpointState';
import {
  LinkPortEndpointState,
  ILinkPortEndpoint,
} from 'states/linkPortEndpointState';
import { RootStore } from 'states/rootStore';
import { COMPONENT_DEFAULT_TYPE } from 'states/visualComponents';
import { isBoolean, deepCopy } from 'utils/common';

export class LinkState implements ILinkInteractionState {
  private _id: string;
  private _type: string;
  private _source?: LinkPortEndpointState;
  private _sourceEndpoint: ILinkPortEndpoint;
  private _target?: LinkPortEndpointState;
  private _targetEndpoint: ILinkPortEndpoint;
  private _segments: ILinkSegment[];
  private _selected: boolean;
  private _hovered: boolean;
  private _data: any;
  private _isSelectionEnabled: boolean | null;

  private _rootStore: RootStore;

  constructor(rootStore: RootStore, id: string, state: ILinkStateWithoutId) {
    this._rootStore = rootStore;

    this._id = id;
    this._selected = false;
    this._hovered = false;
    this.import(state);

    makeAutoObservable(this, {
      // @ts-ignore
      _rootStore: false
    });
  }

  import = (state: ILinkStateWithoutId) => {
    this._sourceEndpoint = {
      nodeId: state.source.nodeId,
      portId: state.source.portId,
    };
    this._targetEndpoint = {
      nodeId: state.target.nodeId,
      portId: state.target.portId,
    };
    this.setType(state.type);
    this.setSegments(state.segments);
    this.setData(state.data);
    this.setIsSelectionEnabled(state?.isSelectionEnabled);
  };

  export = (): ILinkStateWithId => ({
    ...deepCopy({
      id: this._id,
      source: this._sourceEndpoint,
      target: this._targetEndpoint,
      type: this.type,
      segments: this.segments,
      data: this.data,
      isSelectionEnabled: this._isSelectionEnabled ?? undefined,
    }),
  });

  get id() {
    return this._id;
  }

  get type() {
    return this._type;
  }

  setType = (value: string | null | undefined) => {
    this._type = value ?? COMPONENT_DEFAULT_TYPE;
  };

  get segments() {
    return this._segments;
  }

  setSegments = (value: ILinkSegment[] | null | undefined) => {
    this._segments = value ?? [];
  };

  get path(): ILinkPath | undefined {
    if (this.source && this.target) {
      return createLinkPath(this._rootStore, this.source, this.target);
    }

    return undefined;
  }

  get componentDefinition() {
    const { visualComponents } = this._rootStore.linksSettings;
    return visualComponents.getComponent(this.type);
  }

  get selected() {
    return this._selected;
  }

  set selected(value: boolean) {
    this._selected = value;
  }

  get hovered() {
    return this._hovered;
  }

  set hovered(value: boolean) {
    this._hovered = value;
  }

  get data() {
    return this._data;
  }

  get source() {
    return this._createEndpointState(this.sourceEndpoint);
  }

  get sourceEndpoint() {
    return this._sourceEndpoint;
  }

  get target() {
    return this._createEndpointState(this.targetEndpoint);
  }

  get targetEndpoint() {
    return this._targetEndpoint;
  }

  swapEndpoints = () => {
    const tmp = this.sourceEndpoint;
    this._sourceEndpoint = this.targetEndpoint;
    this._targetEndpoint = tmp;
  }

  setData = (value: any) => {
    this._data = value ?? null;
  };

  get isSelectionEnabled(): boolean {
    return this._isSelectionEnabled === null
      ? this._rootStore.diagramSettings.userInteraction.linkSelection
      : this._isSelectionEnabled;
  }

  setIsSelectionEnabled = (value: boolean | null | undefined) => {
    this._isSelectionEnabled = isBoolean(value) ? value : null;
  };

  private _createEndpointState = (
    endpoint: ILinkPortEndpoint
  ): LinkPortEndpointState | undefined => {
    const node = this._rootStore.nodesStore.getNode(endpoint.nodeId);
    if (!node) return undefined;
    const port = node.getPort(endpoint.portId);
    if (!port) return undefined;

    return new LinkPortEndpointState(port, this._rootStore);
  };
}

export function createLinkPath(
  rootStore: RootStore,
  source: LinkPortEndpointState,
  target: LinkPortEndpointState | LinkPointEndpointState
): ILinkPath | undefined {
  const { linksSettings } = rootStore;
  if (
    !source.port ||
    (target instanceof LinkPortEndpointState && !target.port) ||
    !source.point ||
    !target.point
  ) {
    return undefined;
  }

  const pathStr = linksSettings.pathConstructor(
    {
      point: source.point,
      portType: source.port.type,
      direction: source.port.linkDirection,
    },
    {
      point: target.point,
      portType:
        target instanceof LinkPointEndpointState
          ? undefined
          : target.port!.type,
      direction:
        target instanceof LinkPointEndpointState
          ? undefined
          : target.port!.linkDirection,
    }
  );

  return {
    svgPath: pathStr,
    source: source.point,
    target: target.point,
  };
}

export interface ILinkInteractionState {
  selected: boolean;
  hovered: boolean;
}

export interface ILinkStateWithoutId {
  type?: string;
  source: ILinkPortEndpoint;
  target: ILinkPortEndpoint;
  segments?: ILinkSegment[];
  data?: any;
  isSelectionEnabled?: boolean;
}

export interface ILinkStateWithId extends ILinkStateWithoutId {
  id: string;
}

export interface ILinkState extends ILinkStateWithoutId {
  id?: string;
}

export interface ILinkSegment {
  position: Point;
}

export interface ILinkPath {
  svgPath: string;
  source: Point;
  target: Point;
}
