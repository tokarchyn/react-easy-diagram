import React, { useMemo } from 'react';
import {
  Diagram,
  IDiagramInitState
} from '../components/Diagram';
import { ISettings, RootStore } from '../states/rootStore';
import { useNotifyRef } from './useNotifyRef';

export const useDiagram = (
  initState?: IDiagramInitState,
  settings?: ISettings
) => {
  const storeRef = useNotifyRef<RootStore | null>(null);

  const obj = useMemo(
    () => ({
      Diagram: () => (
        <Diagram storeRef={storeRef} initState={initState} settings={settings} />
      ),
      storeRef,
    }),
    []
  );

  return obj;
};
