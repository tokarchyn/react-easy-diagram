import React, { useEffect } from 'react';
import { LinksLayer } from 'components/link/LinksLayer';
import { NodesLayer } from 'components/node/NodesLayer';
import { useDiagramUserInteraction } from 'hooks/userInteractions/useDiagramUserInteraction';
import { observer } from 'mobx-react-lite';
import { useRootStore } from 'hooks/useRootStore';
import { BackgroundWrapper } from 'components/background/BackgroundWrapper';
import { MiniControlWrapper } from 'components/miniControl/MiniControlWrapper';
import { generateTransform } from 'utils/transformation';

export interface IDiagramInnerProps {
  diagramStyles?: React.CSSProperties;
}

export const InnerDiagram = observer<IDiagramInnerProps>((props) => {
  const rootStore = useRootStore();
  useDiagramUserInteraction();

  const offset = rootStore.diagramState.offset;
  const zoom = rootStore.diagramState.zoom;
  // Notify state about already rendered zoom and offset.
  useEffect(() => {
    rootStore.diagramState.renderOffsetAndZoom(offset, zoom);
  }, [offset, zoom]);

  useEffect(() => {
    const resizeHandler = () =>
      rootStore.nodesStore.nodes.forEach((n) =>
        n.recalculatePortsSizeAndPosition()
      );
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [rootStore]);

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
          transform: generateTransform(offset, zoom),
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
