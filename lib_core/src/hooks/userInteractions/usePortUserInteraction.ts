import { useMemo } from 'react';
import { useGesture } from 'react-use-gesture';
import { ReactEventHandlers } from 'react-use-gesture/dist/types';
import { PortState } from 'states/portState';
import { multiplyPoint, subtractPoints } from 'utils';
import { useRootStore } from 'hooks/useRootStore';
import type { IDragHandlers } from 'hooks/userInteractions/useDiagramDragHandlers';
import { useUserAbilityToSelectSwitcher } from 'hooks/userInteractions/useUserAbilityToSelectSwitcher';

export const usePortUserInteraction = (
  portState?: PortState,
  enable?: boolean
): IUsePortUserInteractionResult => {
  const {
    linksStore: { linkCreation },
    diagramState,
  } = useRootStore(); 
  const handlers = useMemo<IGestureHandlers | {}>(
    () => ({
      onDrag: ({ delta }) => {
        if (!portState || !portState.dragging) return;
        const parentScale = diagramState.zoom;
        linkCreation.target?.translateBy(multiplyPoint(delta, 1 / parentScale));
      },
      onDragStart: ({ event, xy }) => {
        if (!portState) return;
        // Important! Otherwise on touch display onPointerEnter will not work!
        const portHtmlElement = event.target as Element;
        portHtmlElement.releasePointerCapture(event.pointerId);

        let pointOnPort = subtractPoints(xy, [
          portHtmlElement.getBoundingClientRect().x,
          portHtmlElement.getBoundingClientRect().y,
        ]);

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
        portState.hovered = true;
        linkCreation.setTargetPortCandidate(portState);
      },
      onPointerLeave: () => {
        if (!portState) return;
        portState.hovered = false;
        linkCreation.resetTargetPortCandidate(portState);
      },
    }),
    [portState, linkCreation]
  );

  // Temporary bug fix when pointer events handlers are not reasigned.
  // See https://github.com/pmndrs/react-use-gesture/issues/263 and https://github.com/pmndrs/react-use-gesture/issues/264
  // There could be some other bugs related to handlers object replacing
  const bind = useGesture(handlers, {
    eventOptions: { passive: false },
    enabled: enable,
  });

  useUserAbilityToSelectSwitcher(
    !!portState?.dragging,
    portState?.ref.current?.ownerDocument?.body
  );

  return {
    active: !!portState?.dragging,
    bind,
  };
};

interface IGestureHandlers extends IDragHandlers {
  onPointerEnter: () => void;
  onPointerLeave: () => void;
}

export interface IUsePortUserInteractionResult {
  active: boolean;
  bind: (...args: any[]) => ReactEventHandlers;
}
