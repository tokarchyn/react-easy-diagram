import React, { useMemo } from 'react';
import { Diagram } from '../components/Diagram';
import { DiagramApi } from '../components/DiagramInner';
import { IDiagramInitState, IDiagramSetting } from '../states/initializers';
import { useNotifyRef } from './useNotifyRef';

export const useDiagram = (
  settings?: IDiagramSetting,
  initState?: IDiagramInitState
) => {
  const apiRef = useNotifyRef<DiagramApi | null>(null);

  const obj = useMemo(
    () => ({
      Diagram: () => (
        <Diagram ref={apiRef} initState={initState} settings={settings} />
      ),
      apiRef,
    }),
    []
  );

  return obj;
};
