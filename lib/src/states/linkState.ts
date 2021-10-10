import { makeAutoObservable } from 'mobx';
import { Point } from 'utils/point';
import { LinkPointEndpointState } from 'states/linkPointEndpointState';
import {
  LinkPortEndpointState,
  ILinkPortEndpoint,
} from 'states/linkPortEndpointState';
import { RootStore } from 'states/rootStore';
import { COMPONENT_DEFAULT_TYPE } from 'states/visualComponents';
import { isBoolean, deepCopy } from 'utils/common';

export class LinkState
  implements ILinkState, ILinkInteractionState {
  private _id: string;
  private _type: string;
  private _source: LinkPortEndpointState;
  private _target: LinkPortEndpointState;
  private _segments: ILinkSegment[];
  private _selected: boolean;
  private _hovered: boolean;
  private _extra: any;
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
      _rootStore: false,
    });
  }
  
  import = (state: ILinkStateWithoutId) => {
    this._source = this._createEndpointState(state.source);
    this._target = this._createEndpointState(state.target);
    this.setType(state.type);
    this.setSegments(state.segments);
    this.setExtra(state.extra);
    this.setIsSelectionEnabled(state?.isSelectionEnabled);
  };
  
  private _createEndpointState = (
    endpoint: ILinkPortEndpoint
  ): LinkPortEndpointState => {
    return new LinkPortEndpointState(
      endpoint.nodeId,
      endpoint.portId,
      this._rootStore
    );
  };
  
  export = (): ILinkStateWithId => ({
    source: this.source.export(),
    target: this.target.export(),
    ...deepCopy({
      id: this._id,
      type: this.type,
      segments: this.segments,
      extra: this.extra,
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
    return createLinkPath(this._rootStore, this.source, this.target);
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

  get extra() {
    return this._extra;
  }

  get source() {
    return this._source;
  }

  get target() {
    return this._target;
  }

  setExtra = (value: any) => {
    this._extra = value ?? null;
  };

  get isSelectionEnabled(): boolean {
    return this._isSelectionEnabled === null
      ? this._rootStore.diagramSettings.userInteraction.linkSelection
      : this._isSelectionEnabled;
  }

  setIsSelectionEnabled = (value: boolean | null | undefined) => {
    this._isSelectionEnabled = isBoolean(value) ? value : null;
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
  extra?: any;
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
