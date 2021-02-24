import React, { useMemo, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { ReactEventHandlers } from 'react-use-gesture/dist/types';
import { IDragHandlers, Point } from '../..';
import { PortState } from '../../states/portState';
import { multiplyPoint } from '../../utils';
import { useRootStore } from '../useRootStore';
import { useUserAbilityToSelectSwitcher } from './useUserAbilityToSelectSwitcher';

export const usePortUserInteraction = (
  portState: PortState,
  enable?: boolean
): IUsePortUserInteractionResult => {
  const {
    linksStore: { linkCreation },
    diagramState,
  } = useRootStore();
  const userInteractionElemRef = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement | null>;

  const handlers = useMemo<IGestureHandlers>(
    () => ({
      onDrag: ({ delta }) => {
        if (!portState.dragging) return;
        const parentScale = diagramState.zoom;
        linkCreation.target?.translateBy(multiplyPoint(delta, 1 / parentScale));
      },
      onDragStart: ({ event }) => {
        // Important! Otherwise on touch display onPointerEnter will not work!
        const portHtmlElement = event.target as Element;
        portHtmlElement.releasePointerCapture(event.pointerId);

        let eventOffsetRelativeToTarget;
        // On the old browser these properties could be not available
        if ('offsetX' in event && 'offsetY' in event) {
          eventOffsetRelativeToTarget = [event.offsetX, event.offsetY] as Point;
        }

        if (linkCreation.startLinking(portState, eventOffsetRelativeToTarget)) {
          portState.dragging = true;
        }
      },
      onDragEnd: () => {
        portState.dragging = false;
        linkCreation.stopLinking();
      },
      onPointerEnter: () => {
        portState.hovered = true;
        linkCreation.setTargetPortCandidate(portState);
      },
      onPointerLeave: () => {
        portState.hovered = false;
        linkCreation.resetTargetPortCandidate(portState);
      },
    }),
    [portState, linkCreation]
  );

  // Temporary bug fix when pointer events handlers are not reasigned. See https://github.com/pmndrs/react-use-gesture/issues/263 and https://github.com/pmndrs/react-use-gesture/issues/264
  const bind = useGesture(handlers, {
    eventOptions: { passive: false },
    enabled: enable,
  });

  useUserAbilityToSelectSwitcher(
    portState.dragging,
    userInteractionElemRef.current?.ownerDocument?.body
  );

  return {
    active: portState.dragging,
    userInteractionElemRef,
    bind,
  };
};

interface IGestureHandlers extends IDragHandlers {
  onPointerEnter: () => void;
  onPointerLeave: () => void;
}

export interface IUsePortUserInteractionResult {
  active: boolean;
  userInteractionElemRef: React.MutableRefObject<HTMLDivElement | null>;
  bind: (...args: any[]) => ReactEventHandlers;
}
