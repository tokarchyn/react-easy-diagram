import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { RootStore } from './rootStore';
import {
  LinkPortEndpointState,
  ILinkPortEndpoint,
} from './linkPortEndpointState';
import { componentDefaultType } from './visualComponents';
import { LinkPointEndpointState } from './LinkPointEndpointState';
import { deepCopy } from '../utils';
import { ISelectableItem } from './selectionState';

export class LinkState
  implements ILinkState, ISelectableItem, ILinkInteractionState {
  private _id: string;
  private _componentType: string;
  private _source: LinkPortEndpointState;
  private _target: LinkPortEndpointState;
  private _segments: ILinkSegment[];
  private _selected: boolean;
  private _hovered: boolean;
  private _extra: any;

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
    this.setComponentType(state.componentType);
    this.setSegments(state.segments);
    this.setExtra(state.extra);
  };

  export = (): ILinkStateWithId => ({
    source: this.source.export(),
    target: this.target.export(),
    ...deepCopy({
      id: this._id,
      componentType: this.componentType,
      segments: this.segments,
      extra: this.extra,
    }),
  });

  get id() {
    return this._id;
  }

  get componentType() {
    return this._componentType;
  }

  setComponentType = (value: string | null | undefined) => {
    this._componentType = value ?? componentDefaultType;
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
    return visualComponents.getComponent(this.componentType);
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

  private _createEndpointState = (
    endpoint: ILinkPortEndpoint
  ): LinkPortEndpointState => {
    return new LinkPortEndpointState(
      endpoint.nodeId,
      endpoint.portId,
      this._rootStore
    );
  };
}

export function createLinkPath(
  rootStore: RootStore,
  source: LinkPortEndpointState,
  target: LinkPortEndpointState | LinkPointEndpointState
): ILinkPath | undefined {
  const { linksSettings } = rootStore;
  if (!source.point || !target.point) {
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
        target instanceof LinkPointEndpointState ? undefined : target.port.type,
      direction:
        target instanceof LinkPointEndpointState
          ? undefined
          : target.port.linkDirection,
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
  componentType?: string;
  source: ILinkPortEndpoint;
  target: ILinkPortEndpoint;
  segments?: ILinkSegment[];
  extra?: any;
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
