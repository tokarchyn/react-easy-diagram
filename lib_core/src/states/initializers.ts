import { MutableSnapshot } from 'recoil';
import {
  commonSettingsState,
  defaultLinkType,
  ICommonSettings,
  LinkInitState,
  linksIdsState,
  linkWithIdState,
  NodeInitState,
  nodesIdsState,
  nodeWithIdState,
} from '..';
import { v4 as uuidv4 } from 'uuid';
import {
  INodesSettings,
  nodesSettingsState,
} from './nodesSettingsState';
import {
  ILinksSettings,
  linksSettingsState,
} from './linksSettingsState';

export function initializeDiagram(
  snap: MutableSnapshot,
  settings?: IDiagramSetting,
  initState?: IDiagramInitState
): void {
  initializeSettings(snap, settings);
  initializeState(snap, initState);
}

export function initializeState(
  snap: MutableSnapshot,
  initializer?: IDiagramInitState
): void {
  if (!initializer) {
    return;
  }

  initializeNodesState(snap, initializer.nodes);
  initializeLinksState(snap, initializer.links);
}

export function initializeSettings(
  snap: MutableSnapshot,
  settings?: IDiagramSetting
) {
  if (!settings) {
    return;
  }

  if (settings.common) {
    snap.set(commonSettingsState, settings.common);
  }

  if (settings.nodes) {
    const loadable = snap.getLoadable(nodesSettingsState);
    if ('defaultNodeType' in loadable.contents) {
      snap.set(nodesSettingsState, { ...loadable.contents, ...settings.nodes });
    }
  }

  if (settings.links) {
    const loadable = snap.getLoadable(linksSettingsState);
    if ('defaultLinkType' in loadable.contents) {
      snap.set(linksSettingsState, { ...loadable.contents, ...settings.links });
    }
  }
}

export interface IDiagramSetting {
  common?: ICommonSettings;
  nodes?: INodesSettings;
  links?: ILinksSettings;
}

export interface IDiagramInitState {
  nodes: NodeInitState[];
  links: LinkInitState[];
}

export function initializeNodesState(
  snap: MutableSnapshot,
  nodes: NodeInitState[]
): void {
  nodes.forEach((node) => {
    snap.set(nodeWithIdState(node.id), node);
  });
  snap.set(
    nodesIdsState,
    nodes.map((node) => node.id)
  );
}

export function initializeLinksState(
  snap: MutableSnapshot,
  links: LinkInitState[]
): void {
  const linksIds: string[] = [];
  links.forEach((linkOriginal) => {
    const link = {
      type: defaultLinkType,
      id: linkOriginal.id ?? uuidv4(),
      ...linkOriginal,
    };

    linksIds.push(link.id);
    snap.set(linkWithIdState(link.id), link);
  });
  snap.set(linksIdsState, linksIds);
}
