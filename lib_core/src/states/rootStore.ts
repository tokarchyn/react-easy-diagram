import { DiagramApi } from './diagramApi';
import { DiagramState } from './diagramState';
import { LinksSettings } from './linksSettingsState';
import { LinksStore } from './linksStore';
import { NodesSettings } from './nodesSettingsState';
import { NodesStore } from './nodesStore';
import { PortsSettings } from './portsSettingsState';

export class RootStore {
  diagramState: DiagramState;
  nodesStore: NodesStore;
  nodesSettings: NodesSettings;
  linksStore: LinksStore;
  linksSettings: LinksSettings;
  portsSettings: PortsSettings;

  diagramApi: DiagramApi;

  constructor() {
    this.diagramState = new DiagramState(this);
    this.nodesStore = new NodesStore(this);
    this.nodesSettings = new NodesSettings();
    this.linksStore = new LinksStore(this);
    this.linksSettings = new LinksSettings();
    this.portsSettings = new PortsSettings();

    this.diagramApi = new DiagramApi(this);
  }
}
