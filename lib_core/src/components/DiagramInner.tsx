import React, { useContext } from 'react';
import { LinksLayer } from './LinksLayer';
import { NodesLayer } from './NodesLayer';
import { useDiagramUserInteraction } from '../hooks/userInteractions/useDiagramUserInteraction';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from './Diagram';
import { useRootStore } from '../hooks/useRootStore';

export interface IDiagramInnerProps {
  diagramStyles?: React.CSSProperties;
}

export const InnerDiagram = observer<IDiagramInnerProps>((props) => {
  const rootStore = useRootStore();
  const { transform, userInteractionElemRef } = useDiagramUserInteraction();

  return (
    <div
      ref={userInteractionElemRef}
      style={{ touchAction: 'none', ...props.diagramStyles }}
      className='react_fast_diagram_DiagramInner'
    >
      <div
        className='react_fast_diagram_DiagramInner_DraggablePart'
        style={{
          transform: transform,
        }}
      >
        <LinksLayer linksStore={rootStore.linksStore} />
        <NodesLayer nodesStore={rootStore.nodesStore} />
      </div>
    </div>
  );
});

InnerDiagram.displayName = 'InnerDiagram';
