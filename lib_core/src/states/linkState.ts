import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { v4 } from 'uuid';
import { RootStore } from './rootStore';
import {
  LinkPortEndpointState,
  ILinkPortEndpoint,
} from './linkPortEndpointState';
import { componentDefaultType } from './visualComponents';
import { LinkPointEndpointState } from './LinkPointEndpointState';

export class LinkState implements ILinkState {
  id: string;
  componentType: string;
  source: LinkPortEndpointState;
  target: LinkPortEndpointState;
  segments: ILinkSegment[];
  extra: any;

  rootStore: RootStore;

  constructor(rootStore: RootStore, data: ILinkState) {
    this.rootStore = rootStore;

    this.id = data.id ?? v4();
    this.source = this.createEndpointState(data.source);
    this.target = this.createEndpointState(data.target);
    this.componentType = data.componentType ?? componentDefaultType;
    this.segments = data.segments ?? [];
    this.extra = data.extra;

    makeAutoObservable(this, {
      rootStore: false,
    });
  }

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

export interface ILinkState {
  id?: string;
  componentType?: string;
  source: ILinkPortEndpoint;
  target: ILinkPortEndpoint;
  segments?: ILinkSegment[];
  extra?: any;
}

export interface ILinkSegment {
  position: Point;
}

export interface ILinkPath {
  svgPath: string;
  source: Point;
  target: Point;
}
