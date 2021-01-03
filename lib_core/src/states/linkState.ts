import { makeAutoObservable } from 'mobx';
import { componentDefaultType, Point } from '../types/common';
import { v4 } from 'uuid';
import { RootStore } from './rootStore';

export class LinkState {
  id: string;
  componentType: string = componentDefaultType;
  source: LinkEndpoint = {position: [0,0]};
  target: LinkEndpoint = {position: [0,0]};
  segments?: ILinkSegment[] = [];
  extra?: any = null;

  rootStore: RootStore;

  constructor(rootStore: RootStore, id: string = v4()) {
    this.id = id;
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fromJson = (obj: ILinkState) => {
    this.componentType = obj.componentType ?? componentDefaultType;
    this.source = obj.source;
    this.target = obj.target;
    this.segments = obj.segments;
    this.extra = obj.extra;
  }

  get path() : string {
    const {linksSettings} = this.rootStore;
    return linksSettings.pathConstructor(this.sourcePoint, this.targetPoint);
  }

  get sourcePoint() : Point {
    return this.getEndpointPoint(this.source);
  }

  get targetPoint() : Point {
    return this.getEndpointPoint(this.target);
  }

  get componentDefinition() {
    const { visualComponents } = this.rootStore.linksSettings;
    return visualComponents.getComponent(this.componentType);
  }

  private getEndpointPoint(endpoint: LinkEndpoint): Point {
    if ('nodeId' in endpoint) {
      return this.getEndpointPointForNode(endpoint);
    } else {
      return endpoint.position;
    }
  }
  
  private getEndpointPointForNode(
    endpoint: ILinkNodeEndpoint
  ): Point {
    const node = this.rootStore.nodesStore.nodes[endpoint.nodeId];
    const htmlElem = node?.ref?.current;
    if (htmlElem) {
      return [
        node.offset[0] +
          (htmlElem.clientWidth ? htmlElem.clientWidth / 2 : 0),
        node.offset[1] +
          (htmlElem.clientHeight ? htmlElem.clientHeight / 2 : 0),
      ];
    } else {
      return node.offset;
    }
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
  id: string
}

export interface ILinkSegment {
  position: Point;
}

export interface ILinkNodeEndpoint {
  nodeId: string;
  portId?: string;
}

export interface ILinkPointEndpoint {
  position: Point;
}

export type LinkEndpoint = ILinkNodeEndpoint | ILinkPointEndpoint;