import React, { useEffect } from 'react';
import { LinksLayer } from 'components/LinksLayer';
import { NodesLayer } from 'components/NodesLayer';
import { useDiagramUserInteraction } from 'hooks/userInteractions/useDiagramUserInteraction';
import { observer } from 'mobx-react-lite';
import { useRootStore } from 'hooks/useRootStore';
import { BackgroundWrapper } from 'components/BackgroundWrapper';
import { MiniControlWrapper } from 'components/MiniControlWrapper';

export interface IDiagramInnerProps {
  diagramStyles?: React.CSSProperties;
}

export const InnerDiagram = observer<IDiagramInnerProps>((props) => {
  const rootStore = useRootStore();
  const { transform } = useDiagramUserInteraction();

  useEffect(() => {
    const resizeHandler = () => rootStore.nodesStore.nodes.forEach(n => n.recalculatePortsSizeAndPosition());
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [rootStore])

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
