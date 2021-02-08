import {
  IDiagramSettings,
  ILinksSettings,
  INodesSettings,
  IPortsSettings,
} from '.';
import { ICallbacks } from './callbacks';
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
  };

  reinitState = (nodes?: INodeState[], links?: ILinkState[]) => {
    this.rootStore.nodesStore.importState(nodes);
    this.rootStore.linksStore.importState(links);
  };

  reinitSettings = (settings: ISettings) => {
    this.rootStore.diagramSettings.fromJson(settings.diagram);
    this.rootStore.nodesSettings.fromJson(settings.nodes);
    this.rootStore.linksSettings.fromJson(settings.links);
    this.rootStore.portsSettings.fromJson(settings.ports);
    this.rootStore.callbacks.setCallbacks(settings.callbacks);
  };

  zoomIn = () => this.rootStore.diagramState.zoomIntoCenter(1 / 0.8);
  zoomOut = () => this.rootStore.diagramState.zoomIntoCenter(0.8);

  recalculatePortPosition = () => {
    //
  };
}

export interface ISettings {
  diagram?: IDiagramSettings;
  nodes?: INodesSettings;
  links?: ILinksSettings;
  ports?: IPortsSettings;
  callbacks?: ICallbacks;
}
