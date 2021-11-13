import React, { useEffect, useMemo } from 'react';
import { RootStore } from 'states/rootStore';
import type { ISettings } from 'states/rootStore';
import type { INodeState } from 'states/nodeState';
import type { ILinkState } from 'states/linkState';

export const RootStoreContext = React.createContext<RootStore | null>(null);

export function DiagramContext(props: IDiagramProps) {
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
      {props.children}
    </RootStoreContext.Provider>
  );
}

export type IDiagramProps = React.PropsWithChildren<{
  settings?: ISettings;
  initState?: IDiagramInitState;
  storeRef?: React.MutableRefObject<RootStore | null>;
}>;

export interface IDiagramInitState {
  nodes?: INodeState[];
  links?: ILinkState[];
}
