import { Callbacks, ICallbacks } from 'states/callbacks';
import { DiagramSettings, IDiagramSettings } from 'states/diagramSettings';
import { DiagramState } from 'states/diagramState';
import { LinksSettings, ILinksSettings } from 'states/linksSettings';
import { LinksStore } from 'states/linksStore';
import { ILinkState } from 'states/linkState';
import { NodesSettings, INodesSettings } from 'states/nodesSettings';
import { NodesStore } from 'states/nodesStore';
import { INodeState } from 'states/nodeState';
import { PortsSettings, IPortsSettings } from 'states/portsSettings';
import { SelectionState } from 'states/selectionState';

export class RootStore {
  private _diagramState: DiagramState;

  private _nodesStore: NodesStore;
  private _linksStore: LinksStore;
  private _selectionState: SelectionState;

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
    this._callbacks = new Callbacks();

    this._diagramState = new DiagramState(this);

    this._nodesStore = new NodesStore(this);
    this._linksStore = new LinksStore(this);
    this._selectionState = new SelectionState(this);
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

  get selectionState() {
    return this._selectionState;
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
