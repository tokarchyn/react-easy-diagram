import { DiagramApi } from './diagramApi';
import { DiagramsSettings } from './diagramsSettings';
import { DiagramState } from './diagramState';
import { LinksSettings } from './linksSettings';
import { LinksStore } from './linksStore';
import { NodesSettings } from './nodesSettings';
import { NodesStore } from './nodesStore';
import { PortsSettings } from './portsSettings';

export class RootStore {
  diagramState: DiagramState;
  
  nodesStore: NodesStore;
  linksStore: LinksStore;
  
  diagramSettings: DiagramsSettings;
  nodesSettings: NodesSettings;
  portsSettings: PortsSettings;
  linksSettings: LinksSettings;
  
  diagramApi: DiagramApi;

  constructor() {
    this.diagramState = new DiagramState(this);

    this.nodesStore = new NodesStore(this);
    this.linksStore = new LinksStore(this);

    this.diagramSettings = new DiagramsSettings();
    this.nodesSettings = new NodesSettings();
    this.linksSettings = new LinksSettings();
    this.portsSettings = new PortsSettings();

    this.diagramApi = new DiagramApi(this);
  }
}
