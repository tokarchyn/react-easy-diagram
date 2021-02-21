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

export class LinkState implements ILinkState {
  id: string;
  componentType: string;
  source: LinkPortEndpointState;
  target: LinkPortEndpointState;
  segments: ILinkSegment[];
  extra: any;

  rootStore: RootStore;

  constructor(rootStore: RootStore, id: string, state: ILinkStateWithoutId) {
    this.rootStore = rootStore;

    this.id = id;
    this.import(state);

    makeAutoObservable(this, {
      rootStore: false,
    });
  }

  import = (state: ILinkStateWithoutId) => {
    this.source = this.createEndpointState(state.source);
    this.target = this.createEndpointState(state.target);
    this.componentType = state.componentType ?? componentDefaultType;
    this.segments = state.segments ?? [];
    this.extra = state.extra ?? null;
  };

  export = () : ILinkStateWithId => ({
    source: this.source.export(),
    target: this.target.export(),
    ...deepCopy({
      id: this.id,
      componentType: this.componentType,
      segments: this.segments,
      extra: this.extra
    })
  });

  get path(): ILinkPath | undefined {
    return createLinkPath(this.rootStore, this.source, this.target);
  }

  get componentDefinition() {
    const { visualComponents } = this.rootStore.linksSettings;
    return visualComponents.getComponent(this.componentType);
  }

  private createEndpointState = (
    endpoint: ILinkPortEndpoint
  ): LinkPortEndpointState => {
    return new LinkPortEndpointState(
      endpoint.nodeId,
      endpoint.portId,
      this.rootStore
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
    source.point,
    target.point,
    source.port.type,
    target instanceof LinkPointEndpointState ? undefined : target.port.type
  );

  return {
    svgPath: pathStr,
    source: source.point,
    target: target.point,
  };
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
