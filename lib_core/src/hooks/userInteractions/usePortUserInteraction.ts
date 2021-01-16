import React, { useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { Point } from '../..';
import { PortState } from '../../states/portState';
import { useNotifyRef } from '../useNotifyRef';
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

  // Should trigger rendering on change, otherwise useUserSelectSwitcher will not be invoked
  const activeRef = useNotifyRef(false);
  const userInteractionElemRef = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement | null>;

  useGesture(
    {
      onDrag: ({ pinching, delta }) => {
        if (!activeRef.current || pinching || !linkCreation.link) {
          return;
        }
        const parentScale = diagramState.zoom;
        linkCreation.link.setTarget({
          position: [
            linkCreation.link.target.point[0] + delta[0] / parentScale,
            linkCreation.link.target.point[1] + delta[1] / parentScale,
          ],
        });
      },
      onDragStart: ({ event }) => {
        // Important! Otherwise on touch display onPointerEnter will not work!
        const portHtmlElement = event.target as Element;
        portHtmlElement.releasePointerCapture(event.pointerId);

        activeRef.current = true;

        let eventOffsetRelativeToTarget;
        // On the old browser these properties could be not available
        if('offsetX' in event && 'offsetY' in event) {
          eventOffsetRelativeToTarget = [event.offsetX, event.offsetY] as Point
        }

        linkCreation.startLinking(portState, eventOffsetRelativeToTarget);
      },
      onDragEnd: () => {
        activeRef.current = false;
        linkCreation.stopLinking();
      },
      onPointerEnter: () => {
        linkCreation.setTargetPortCandidate(portState);
      },
      onPointerLeave: () => {
        linkCreation.resetTargetPortCandidateIfSame(portState);
      },
    },
    {
      domTarget: userInteractionElemRef,
      eventOptions: { passive: false },
      enabled: enable,
    }
  );

  useUserAbilityToSelectSwitcher(
    activeRef.current,
    userInteractionElemRef.current?.ownerDocument?.body
  );

  return {
    active: activeRef.current,
    userInteractionElemRef,
  };
};

export interface IUsePortUserInteractionResult {
  active: boolean;
  userInteractionElemRef: React.MutableRefObject<HTMLDivElement | null>;
}
