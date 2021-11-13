import { DiagramContext, IDiagramProps } from 'components/DiagramContext';
import { DigramInner } from 'components/DiagramInner';
import React from 'react';

export function Diagram(props: IDiagramProps) {
  return (
    <DiagramContext
      initState={props.initState}
      settings={props.settings}
      storeRef={props.storeRef}
    >
      <DigramInner />
    </DiagramContext>
  );
}
