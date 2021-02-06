import React, { useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { Point } from '../..';
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

  useGesture(
    {
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
          portState.drag();
        }
      },
      onDragEnd: () => {
        portState.stopDrag();
        linkCreation.stopLinking();
      },
      onPointerEnter: () => {
        portState.hover();
        linkCreation.setTargetPortCandidate(portState);
      },
      onPointerLeave: () => {
        portState.stopHover();
        linkCreation.resetTargetPortCandidate(portState);
      },
    },
    {
      domTarget: userInteractionElemRef,
      eventOptions: { passive: false },
      enabled: enable,
    }
  );

  useUserAbilityToSelectSwitcher(
    portState.dragging,
    userInteractionElemRef.current?.ownerDocument?.body
  );

  return {
    active: portState.dragging,
    userInteractionElemRef,
  };
};

export interface IUsePortUserInteractionResult {
  active: boolean;
  userInteractionElemRef: React.MutableRefObject<HTMLDivElement | null>;
}
