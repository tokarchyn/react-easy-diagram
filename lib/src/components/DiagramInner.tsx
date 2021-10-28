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
  let className = 'react_fast_diagram_DiagramInner';
  if (
    !rootStore.diagramSettings.userInteraction.arePointerInteractionsDisabled
  ) {
    // Disable touch actions as useGesture library recommends
    className += ' react_fast_diagram_touch_action_disabled';
  }

  return (
    <div
      ref={rootStore.diagramState.diagramInnerRef}
      style={props.diagramStyles}
      className={className}
    >
      <BackgroundWrapper />
      <LinksLayer transform={transform} />
      <NodesLayer transform={transform} />
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
