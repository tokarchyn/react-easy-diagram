import React, { useEffect, useMemo } from 'react';
import { InnerDiagram } from './DiagramInner';
import '../Diagram.css';
import { ISettings, RootStore } from '../states/rootStore';
import { INodeState } from '../states/nodeState';
import { ILinkState } from '../states/linkState';

import '../Diagram.css';

export const RootStoreContext = React.createContext<RootStore | null>(null);

export function Diagram (props: IDiagramProps) {
  const rootStore = useMemo(() => {
    const store = new RootStore();
    props.settings && store.importSettings(props.settings);
    store.importState(
      props.initState?.nodes ?? [],
      props.initState?.links ?? []
    );
    return store;
  }, []);

  useEffect(() => {
    if (props.storeRef) {
      props.storeRef.current = rootStore;
    }
  }, [rootStore, props.storeRef]);

  return (
    <RootStoreContext.Provider value={rootStore}>
      <InnerDiagram />
    </RootStoreContext.Provider>
  );
};

export interface IDiagramProps {
  settings?: ISettings;
  initState?: IDiagramInitState;
  storeRef?: React.MutableRefObject<RootStore | null>;
}

export interface IDiagramInitState {
  nodes: INodeState[];
  links: ILinkState[];
}

Diagram.displayName = 'Diagram';
