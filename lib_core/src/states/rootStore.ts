import { Callbacks, ICallbacks } from './callbacks';
import { DiagramSettings, IDiagramSettings } from './diagramSettings';
import { DiagramState } from './diagramState';
import { ILinksSettings, LinksSettings } from './linksSettings';
import { LinksStore } from './linksStore';
import { ILinkState } from './linkState';
import { INodesSettings, NodesSettings } from './nodesSettings';
import { NodesStore } from './nodesStore';
import { INodeState } from './nodeState';
import { IPortsSettings, PortsSettings } from './portsSettings';

export class RootStore {
  diagramState: DiagramState;
  
  nodesStore: NodesStore;
  linksStore: LinksStore;
  
  diagramSettings: DiagramSettings;
  nodesSettings: NodesSettings;
  portsSettings: PortsSettings;
  linksSettings: LinksSettings;
  callbacks: Callbacks;

  constructor() {
    this.diagramState = new DiagramState(this);

    this.nodesStore = new NodesStore(this);
    this.linksStore = new LinksStore(this);
    
    this.diagramSettings = new DiagramSettings();
    this.nodesSettings = new NodesSettings();
    this.linksSettings = new LinksSettings();
    this.portsSettings = new PortsSettings();
    this.callbacks = new Callbacks(this);
  }

  importState = (nodes?: INodeState[], links?: ILinkState[]) => {
    this.nodesStore.import(nodes);
    this.linksStore.import(links);
  };

  export = () : {nodes: INodeState[], links: ILinkState[]} => ({
    nodes: this.nodesStore.export(),
    links: this.linksStore.export()
  });

  importSettings = (settings: ISettings) => {
    this.diagramSettings.import(settings.diagram);
    this.nodesSettings.import(settings.nodes);
    this.linksSettings.import(settings.links);
    this.portsSettings.import(settings.ports);
    this.callbacks.import(settings.callbacks);
  };
}

export interface ISettings {
  diagram?: IDiagramSettings;
  nodes?: INodesSettings;
  links?: ILinksSettings;
  ports?: IPortsSettings;
  callbacks?: ICallbacks;
}
