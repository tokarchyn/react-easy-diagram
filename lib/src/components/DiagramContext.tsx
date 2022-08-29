import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { RootStore } from 'states/rootStore';
import type { ISettings } from 'states/rootStore';
import type { INodeState } from 'states/nodeState';
import type { ILinkState } from 'states/linkState';
import { observer } from 'mobx-react-lite';

export const RootStoreContext = React.createContext<RootStore | null>(null);

export const DiagramContext = observer((props: IDiagramContextProps) => {
  const rootStore = useMemo(() => new RootStore(), []);

  useEffect(() => {
    rootStore.importSettings(props.settings);
  }, [rootStore, props.settings]);

  useEffect(() => {
    rootStore.importState(
      props.initState?.nodes ?? [],
      props.initState?.links ?? []
    );
  }, [rootStore, props.initState]);

  useEffect(() => {
    if (props.storeRef) {
      props.storeRef.current = rootStore;
    }
  }, [rootStore, props.storeRef]);

  const lastRenderedImportRef = useRef(-1);

  useLayoutEffect(() => {
    if (
      rootStore.diagramState.renderImportedRequestId >
      lastRenderedImportRef.current
    ) {
      rootStore.callbacks.importedStateRendered();
      lastRenderedImportRef.current =
        rootStore.diagramState.renderImportedRequestId;
    }
  }, [rootStore.diagramState.renderImportedRequestId]);

  return (
    <RootStoreContext.Provider value={rootStore}>
      {props.children}
    </RootStoreContext.Provider>
  );
});

export type IDiagramContextProps = React.PropsWithChildren<{
  settings?: ISettings;
  initState?: IDiagramInitState;
  storeRef?: React.MutableRefObject<RootStore | null>;
}>;

export interface IDiagramInitState {
  nodes?: INodeState[];
  links?: ILinkState[];
}
