import { IDiagramSettings, ILinksSettings, INodesSettings, IPortsSettings } from '.';
import { ILinkState } from './linkState';
import { INodeState } from './nodeState';
import { RootStore } from './rootStore';

export class DiagramApi {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  addNode = (node: INodeState) => {
    this.rootStore.nodesStore.addNode(node);
  }

  reinitState = (nodes: INodeState[], links: ILinkState[]) => {
    this.rootStore.nodesStore.fromJson(nodes);
    this.rootStore.linksStore.fromJson(links);
  }

  reinitSettings = (settings: ISettings) => {
    settings.diagram && this.rootStore.diagramSettings.fromJson(settings.diagram);
    settings.nodes && this.rootStore.nodesSettings.fromJson(settings.nodes);
    settings.links && this.rootStore.linksSettings.fromJson(settings.links);
    settings.ports && this.rootStore.portsSettings.fromJson(settings.ports);
  }

  zoom = (changeBy: number) => {
    this.rootStore.diagramState.setZoom(this.rootStore.diagramState.zoom + changeBy);
  }

  zoomIn = () => this.zoom(0.2);
  zoomOut = () => this.zoom(-0.2);

  recalculatePortPosition = () => {
    // 
  }
}

export interface ISettings {
  diagram?: IDiagramSettings;
  nodes?: INodesSettings;
  links?: ILinksSettings;
  ports?: IPortsSettings;
}