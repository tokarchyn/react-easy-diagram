import React, { useEffect, useMemo } from 'react';
import { InnerDiagram } from './DiagramInner';
import '../Diagram.css';
import { RootStore } from '../states/rootStore';
import { DiagramApi } from '../states/diagramApi';
import { INodeState } from '../states/nodeState';
import { ILinkState } from '../states/linkState';

export const RootStoreContext = React.createContext<RootStore | null>(null);

export const Diagram: React.FC<IDiagramProps> = (props) => {
  const rootStore = useMemo(() => {
    const store = new RootStore();
    console.log('new store');
    store.diagramApi.reinitState(props.initState?.nodes ?? [], props.initState?.links ?? [])
    return store;
  }, []);

  useEffect(
    () => {
      if (props.apiRef) {
        console.log('set ref')
        props.apiRef.current = rootStore.diagramApi
      }
    },
    [rootStore, props.apiRef],
  )

  return (
    <RootStoreContext.Provider value={rootStore}>
      <InnerDiagram />
    </RootStoreContext.Provider>
  );
};

export interface IDiagramProps {
  settings?: IDiagramSetting;
  initState?: IDiagramInitState;
  apiRef?: React.MutableRefObject<DiagramApi | null>;
}

export interface IDiagramSetting {
  // common?: ICommonSettings;
  // nodes?: INodesSettings;
  // links?: ILinksSettings;
}

export interface IDiagramInitState {
  nodes: INodeState[];
  links: ILinkState[];
}

Diagram.displayName = 'Diagram';
