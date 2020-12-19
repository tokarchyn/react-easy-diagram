import React, { forwardRef, useCallback } from 'react';
import { RecoilRoot } from 'recoil';
import type { MutableSnapshot } from 'recoil';
import { DiagramApi, InnerDiagram } from './DiagramInner';
import {
  IDiagramInitState,
  IDiagramSetting,
  initializeDiagram,
} from '../states/initializers';
import '../Diagram.css';

export interface IDiagramProps {
  settings?: IDiagramSetting;
  initState?: IDiagramInitState;
}

export const Diagram = forwardRef<DiagramApi, IDiagramProps>((props, ref) => {
  const initializeDiagramWrapper = useCallback(
    (snap: MutableSnapshot) =>
      initializeDiagram(snap, props.settings, props.initState),
    []
  );

  return (
    <RecoilRoot initializeState={initializeDiagramWrapper}>
      <InnerDiagram ref={ref} />
    </RecoilRoot>
  );
});

Diagram.displayName = 'Diagram';
