import React, { useMemo } from 'react';
import {
  Diagram,
  IDiagramInitState
} from '../components/Diagram';
import { DiagramApi, IDiagramSetting } from '../states/diagramApi';
import { useNotifyRef } from './useNotifyRef';

export const useDiagram = (
  initState?: IDiagramInitState,
  settings?: IDiagramSetting
) => {
  const apiRef = useNotifyRef<DiagramApi | null>(null);

  const obj = useMemo(
    () => ({
      Diagram: () => (
        <Diagram apiRef={apiRef} initState={initState} settings={settings} />
      ),
      apiRef,
    }),
    []
  );

  return obj;
};
