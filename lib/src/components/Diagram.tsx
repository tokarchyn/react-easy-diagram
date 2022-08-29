import { DiagramContext, IDiagramContextProps } from 'components/DiagramContext';
import { DigramInner, IDiagramInnerProps } from 'components/DiagramInner';
import React from 'react';

export type IDiagramProps = IDiagramInnerProps & IDiagramContextProps;

export function Diagram(props: IDiagramProps) {
  return (
    <DiagramContext
      initState={props.initState}
      settings={props.settings}
      storeRef={props.storeRef}
    >
      <DigramInner children={props.children}/>
    </DiagramContext>
  );
}
