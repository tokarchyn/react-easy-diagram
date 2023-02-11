import React, {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { LinksLayer } from 'components/link/LinksLayer';
import { NodesLayer } from 'components/node/NodesLayer';
import { useDiagramUserInteraction } from 'hooks/userInteractions/useDiagramUserInteraction';
import { observer } from 'mobx-react-lite';
import { useRootStore } from 'hooks/useRootStore';
import { BackgroundWrapper } from 'components/background/BackgroundWrapper';
import { MiniControlWrapper } from 'components/miniControl/MiniControlWrapper';
import { generateTransform } from 'utils/transformation';
import '../Diagram.css';

export interface IDiagramInnerProps {
  diagramStyles?: React.CSSProperties;
  children?: ReactNode | undefined;
}

export const DigramInner = observer<IDiagramInnerProps>((props) => {
  const rootStore = useRootStore();
  useDiagramUserInteraction();

  useResizeAction(() => {
    rootStore.diagramState.ref.recalculateSizeAndPosition();
    rootStore.nodesStore.nodes.forEach((n) => n.recalculatePortsOffset());
  });

  const [{ offset, zoom }, setOffsetZoom] = useState({
    offset: rootStore.diagramState.offset,
    zoom: rootStore.diagramState.zoom,
  });

  useEffect(() => {
    setOffsetZoom({
      offset: rootStore.diagramState.offset,
      zoom: rootStore.diagramState.zoom,
    });
  }, [rootStore.diagramState.offset, rootStore.diagramState.zoom]);

  const lastRenderedImportRef = useRef(-1);

  useLayoutEffect(() => {
    if (
      rootStore.diagramState.importGenerationId > lastRenderedImportRef.current
    ) {
      lastRenderedImportRef.current = rootStore.diagramState.importGenerationId;

      rootStore.callbacks.importedStateRendered();

      setOffsetZoom({
        offset: rootStore.diagramState.offset,
        zoom: rootStore.diagramState.zoom,
      });
    }
  }, [rootStore.diagramState.importGenerationId]);

  let className = 'react_fast_diagram_DiagramInner';
  if (
    !rootStore.diagramSettings.userInteraction.arePointerInteractionsDisabled
  ) {
    // Disable touch actions as useGesture library recommends
    className += ' react_fast_diagram_touch_action_disabled';
  }

  const transform = generateTransform(offset, zoom);

  return (
    <div
      ref={rootStore.diagramState.ref}
      style={props.diagramStyles}
      data-zoom={zoom}
      className={className}
    >
      <BackgroundWrapper />
      <LinksLayer transform={transform} />
      <NodesLayer transform={transform} />
      {props.children}
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
