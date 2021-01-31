import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { v4 } from 'uuid';
import { RootStore } from './rootStore';
import { LinkEndpoint, LinkEndpointState } from './linkEndpointState';
import { componentDefaultType } from './visualComponents';

export class LinkState {
  id: string;
  componentType: string = componentDefaultType;
  source: LinkEndpointState;
  target: LinkEndpointState;
  segments?: ILinkSegment[] = [];
  extra?: any = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore, id: string = v4()) {
    this.id = id;
    this.source = new LinkEndpointState(rootStore);
    this.target = new LinkEndpointState(rootStore);
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fromJson = (obj: ILinkState) => {
    this.componentType = obj.componentType ?? componentDefaultType;
    this.source.fromJson(obj.source);
    this.target.fromJson(obj.target);
    this.segments = obj.segments;
    this.extra = obj.extra;
  };

  get path(): ILinkPath {
    const { linksSettings } = this.rootStore;
    const pathStr = linksSettings.pathConstructor(
      this.source.point,
      this.target.point,
      this.source.port?.type,
      this.target.port?.type
    );

    return {
      svgPath: pathStr,
      source: this.source.point,
      target: this.target.point,
    };
  }

  get componentDefinition() {
    const { visualComponents } = this.rootStore.linksSettings;
    return visualComponents.getComponent(this.componentType);
  }

  setSource(source: LinkEndpoint) {
    this.source.fromJson(source);
  }

  setTarget(target: LinkEndpoint) {
    this.target.fromJson(target);
  }
}

export interface ILinkState {
  id?: string;
  componentType?: string;
  source: LinkEndpoint;
  target: LinkEndpoint;
  segments?: ILinkSegment[];
  extra?: any;
}

export interface ILinkStateObjectWithId extends ILinkState {
  id: string;
}

export interface ILinkSegment {
  position: Point;
}

export interface ILinkPath {
  svgPath: string;
  source: Point;
  target: Point;
}
