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
  private _diagramState: DiagramState;

  private _nodesStore: NodesStore;
  private _linksStore: LinksStore;

  private _diagramSettings: DiagramSettings;
  private _nodesSettings: NodesSettings;
  private _portsSettings: PortsSettings;
  private _linksSettings: LinksSettings;
  private _callbacks: Callbacks;

  constructor() {
    this._diagramSettings = new DiagramSettings();
    this._nodesSettings = new NodesSettings();
    this._linksSettings = new LinksSettings();
    this._portsSettings = new PortsSettings();
    this._callbacks = new Callbacks(this);

    this._diagramState = new DiagramState(this);

    this._nodesStore = new NodesStore(this);
    this._linksStore = new LinksStore(this);
  }

  get diagramState() {
    return this._diagramState;
  }

  get nodesStore() {
    return this._nodesStore;
  }

  get linksStore() {
    return this._linksStore;
  }

  get diagramSettings() {
    return this._diagramSettings;
  }

  get nodesSettings() {
    return this._nodesSettings;
  }

  get linksSettings() {
    return this._linksSettings;
  }

  get portsSettings() {
    return this._portsSettings;
  }

  get callbacks() {
    return this._callbacks;
  }

  importState = (nodes?: INodeState[], links?: ILinkState[]) => {
    this._nodesStore.import(nodes);
    this._linksStore.import(links);
  };

  export = (): { nodes: INodeState[]; links: ILinkState[] } => ({
    nodes: this._nodesStore.export(),
    links: this._linksStore.export(),
  });

  importSettings = (settings: ISettings) => {
    this._diagramSettings.import(settings.diagram);
    this._nodesSettings.import(settings.nodes);
    this._linksSettings.import(settings.links);
    this._portsSettings.import(settings.ports);
    this._callbacks.import(settings.callbacks);
  };
}

export interface ISettings {
  diagram?: IDiagramSettings;
  nodes?: INodesSettings;
  links?: ILinksSettings;
  ports?: IPortsSettings;
  callbacks?: ICallbacks;
}
