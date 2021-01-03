import { DiagramApi } from './diagramApi';
import { DiagramState } from './diagramState';
import { LinksSettings } from './linksSettingsState';
import { LinksStore } from './linksStore';
import { NodesSettings } from './nodesSettingsState';
import { NodesStore } from './nodesStore';

export class RootStore {
  diagramState: DiagramState;
  nodesStore: NodesStore;
  nodesSettings: NodesSettings;
  linksStore: LinksStore;
  linksSettings: LinksSettings;

  diagramApi: DiagramApi;

  constructor() {
    this.diagramState = new DiagramState(this);
    this.nodesStore = new NodesStore(this);
    this.nodesSettings = new NodesSettings();
    this.linksStore = new LinksStore(this);
    this.linksSettings = new LinksSettings();

    this.diagramApi = new DiagramApi(this);
  }
}
