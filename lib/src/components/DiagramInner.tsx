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

export const DigramInner = observer<IDiagramInnerProps>((props) => {
  const rootStore = useRootStore();
  useDiagramUserInteraction();

  const offset = rootStore.diagramState.offset;
  const zoom = rootStore.diagramState.zoom;
  // Notify state about already rendered zoom and offset.
  useEffect(() => {
    rootStore.diagramState.renderOffsetAndZoom(offset, zoom);
  }, [offset, zoom]);

  useResizeAction(() =>
    rootStore.nodesStore.nodes.forEach((n) =>
      n.recalculatePortsSizeAndPosition()
    )
  );

  const transform = generateTransform(offset, zoom);

  return (
    <div
      ref={rootStore.diagramState.diagramInnerRef}
      style={{
        touchAction: rootStore.diagramSettings.userInteraction
          .arePointerInteractionsDisabled
          ? 'auto'
          : undefined,
        ...props.diagramStyles,
      }}
      className='react_fast_diagram_DiagramInner'
    >
      <BackgroundWrapper />
      <LinksLayer linksStore={rootStore.linksStore} transform={transform} />
      <NodesLayer nodesStore={rootStore.nodesStore} transform={transform} />
      <MiniControlWrapper />
    </div>
  );
});

function useResizeAction(action: () => any) {
  const rootStore = useRootStore();

  useEffect(() => {
    window.addEventListener('resize', action);
    return () => window.removeEventListener('resize', action);
  }, [rootStore, action]);
}
