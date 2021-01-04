import { makeAutoObservable, trace } from 'mobx';
import { componentDefaultType, Point } from '../types/common';
import { v4 } from 'uuid';
import { RootStore } from './rootStore';
import { addPoints, multiplyPoint } from '../utils';

export class LinkState {
  id: string;
  componentType: string = componentDefaultType;
  source: LinkEndpoint = { position: [0, 0] };
  target: LinkEndpoint = { position: [0, 0] };
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
  };

  setSource(source: LinkEndpoint) {
    this.source = source;
  }

  setTarget(target: LinkEndpoint) {
    this.target = target;
  }

  get path(): string {
    const { linksSettings } = this.rootStore;
    return linksSettings.pathConstructor(this.sourcePoint, this.targetPoint);
  }

  get sourcePoint(): Point {
    return this.getEndpointPoint(this.source);
  }

  get targetPoint(): Point {
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

  private getEndpointPointForNode(endpoint: ILinkNodeEndpoint): Point {
    const node = this.rootStore.nodesStore.nodes[endpoint.nodeId];
    const nodehtml = node?.ref?.current;
    if (nodehtml) {
      if (endpoint.portId) {
        const porthtml = node.ports[endpoint.portId].ref.current;
        if (porthtml) {
          const nodeRect = nodehtml.getBoundingClientRect();
          const portRect = porthtml.getBoundingClientRect();
          let diff = [
            nodeRect.left - portRect.left,
            nodeRect.top - portRect.top
          ] as Point;
          diff = multiplyPoint(diff, -1/this.rootStore.diagramState.zoom)
          let result = addPoints(node.offset,diff);
          result = addPoints(result, [portRect.width/2, portRect.height/2]);
          return result;
        }
      } else {
        return [
          node.offset[0] +
            (nodehtml.clientWidth ? nodehtml.clientWidth / 2 : 0),
          node.offset[1] +
            (nodehtml.clientHeight ? nodehtml.clientHeight / 2 : 0),
        ];
      }
    } 

    return node.offset;
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

export interface ILinkNodeEndpoint {
  nodeId: string;
  portId?: string;
}

export interface ILinkPointEndpoint {
  position: Point;
}

export type LinkEndpoint = ILinkNodeEndpoint | ILinkPointEndpoint;
