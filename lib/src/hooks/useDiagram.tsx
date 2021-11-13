import React, { useMemo } from 'react';
import { Diagram } from 'components/Diagram';
import type { IDiagramInitState } from 'components/DiagramContext';
import { RootStore } from 'states/rootStore';
import type { ISettings } from 'states/rootStore';
import { useNotifyRef } from 'hooks/useNotifyRef';

export const useDiagram = (
  initState?: IDiagramInitState,
  settings?: ISettings
) => {
  const storeRef = useNotifyRef<RootStore | null>(null);

  const obj = useMemo(
    () => ({
      Diagram: () => (
        <Diagram
          storeRef={storeRef}
          initState={initState}
          settings={settings}
        />
      ),
      storeRef,
    }),
    []
  );

  return obj;
};
