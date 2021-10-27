import { useMemo } from 'react';
import { ReactDOMAttributes, useGesture } from '@use-gesture/react';
import { PortState } from 'states/portState';
import { multiplyPoint, subtractPoints } from 'utils/point';
import { useRootStore } from 'hooks/useRootStore';
import type { IDragHandlers } from 'hooks/userInteractions/useDiagramDragHandlers';
import { useDiagramCursor } from 'hooks/userInteractions/useCursor';

export const usePortUserInteraction = (
  portState?: PortState
): IUsePortUserInteractionResult => {
  const {
    linksStore: { linkCreation },
    diagramState,
    diagramSettings,
  } = useRootStore();

  const handlers = useMemo<IGestureHandlers | {}>(
    () => ({
      onDrag: ({ delta }) => {
        if (!portState || !portState.dragging) return;
        const parentScale = diagramState.zoom;
        linkCreation.target?.translateBy(multiplyPoint(delta, 1 / parentScale));
      },
      onDragStart: ({ event, xy }) => {
        if (!portState || !portState.isConnectionEnabled) return;

        const portHtmlElement = event.target as Element;

        // Important! Otherwise on touch display onPointerEnter will not work!
        portHtmlElement.releasePointerCapture(
          (event as PointerEvent).pointerId
        );

        const clientRect = portHtmlElement.getBoundingClientRect();
        let pointOnPort = subtractPoints(xy, [clientRect.x, clientRect.y]);

        if (linkCreation.startLinking(portState, pointOnPort)) {
          portState.dragging = true;
        }
      },
      onDragEnd: () => {
        if (!portState) return;
        portState.dragging = false;
        linkCreation.stopLinking();
      },
      onPointerEnter: () => {
        if (!portState) return;

        if (portState.isConnectionEnabled) {
          portState.hovered = true;
          linkCreation.setTargetPortCandidate(portState);
        }
      },
      onPointerLeave: () => {
        if (!portState) return;
        portState.hovered = false;
        linkCreation.resetTargetPortCandidate(portState);
      },
    }),
    [portState, linkCreation, diagramState]
  );

  // Temporary bug fix when pointer events handlers are not reasigned.
  // See https://github.com/pmndrs/use-gesture/issues/263 and https://github.com/pmndrs/@use-gesture/react/issues/264
  // There could be some other bugs related to handlers object replacing
  const bind = useGesture(handlers, {
    eventOptions: { passive: false },
    drag: { pointer: { capture: false } },
  });

  useDiagramCursor(!!portState?.dragging, 'pointer');

  return {
    active: !!portState?.dragging,
    bind: diagramSettings.userInteraction.arePointerInteractionsDisabled
      ? () => ({})
      : bind,
  };
};

interface IGestureHandlers extends IDragHandlers {
  onPointerEnter: () => void;
  onPointerLeave: () => void;
}

export interface IUsePortUserInteractionResult {
  active: boolean;
  bind: (...args: any[]) => ReactDOMAttributes;
}
