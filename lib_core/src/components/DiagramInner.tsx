import React from 'react';
import { LinksLayer } from './LinksLayer';
import { NodesLayer } from './NodesLayer';
import { useDiagramUserInteraction } from '../hooks/userInteractions/useDiagramUserInteraction';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../hooks/useRootStore';
import { BackgroundWrapper } from './BackgroundWrapper';
import { MiniControlWrapper } from './MiniControlWrapper';

export interface IDiagramInnerProps {
  diagramStyles?: React.CSSProperties;
}

export const InnerDiagram = observer<IDiagramInnerProps>((props) => {
  const rootStore = useRootStore();
  const { transform } = useDiagramUserInteraction();

  return (
    <div
      ref={rootStore.diagramState.diagramInnerRef}
      style={{ ...props.diagramStyles }}
      className='react_fast_diagram_DiagramInner'
    >
      <BackgroundWrapper />
      <div
        className='react_fast_diagram_DiagramInner_DraggablePart'
        style={{
          transform: transform,
        }}
      >
        <LinksLayer linksStore={rootStore.linksStore} />
        <NodesLayer nodesStore={rootStore.nodesStore} />
      </div>
      <MiniControlWrapper />
    </div>
  );
});

InnerDiagram.displayName = 'InnerDiagram';