import React, { useEffect, useMemo } from 'react';
import { InnerDiagram } from './DiagramInner';
import '../Diagram.css';
import { RootStore } from '../states/rootStore';
import { DiagramApi, IDiagramSetting } from '../states/diagramApi';
import { INodeState } from '../states/nodeState';
import { ILinkState } from '../states/linkState';

export const RootStoreContext = React.createContext<RootStore | null>(null);

export const Diagram: React.FC<IDiagramProps> = (props) => {
  const rootStore = useMemo(() => {
    const store = new RootStore();
    store.diagramApi.reinitState(
      props.initState?.nodes ?? [],
      props.initState?.links ?? []
    );
    props.settings && store.diagramApi.reinitSettings(props.settings);
    return store;
  }, []);

  useEffect(() => {
    if (props.apiRef) {
      props.apiRef.current = rootStore.diagramApi;
    }
  }, [rootStore, props.apiRef]);

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

export interface IDiagramInitState {
  nodes: INodeState[];
  links: ILinkState[];
}

Diagram.displayName = 'Diagram';
