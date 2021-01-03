import { ILinksSettingsObject, INodesSettingsObject } from '.';
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

  reinitSettings = (settings: IDiagramSetting) => {
    settings.nodes && this.rootStore.nodesSettings.fromJson(settings.nodes);
    settings.links && this.rootStore.linksSettings.fromJson(settings.links);
  }
}

export interface IDiagramSetting {
  // common?: ICommonSettings;
  nodes?: INodesSettingsObject;
  links?: ILinksSettingsObject;
}