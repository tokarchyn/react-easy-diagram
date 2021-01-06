import React, { useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { PortState } from '../../states/portState';
import { useNotifyRef } from '../useNotifyRef';
import { useRootStore } from '../useRootStore';
import { useUserAbilityToSelectSwitcher } from './useUserAbilityToSelectSwitcher';

export const usePortUserInteraction = (
  portState: PortState,
  enable?: boolean
): IUseNodeUserInteractionResult => {
  const { linksStore: {linkCreation}, diagramState, nodesStore } = useRootStore();

  // Should trigger rendering on change, otherwise useUserSelectSwitcher will not be invoked
  const activeRef = useNotifyRef(false);
  const userInteractionElemRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement | null>;

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
          ]
        });
      },
      onDragStart: ({ event }) => {
        const nodeRect = nodesStore.nodes[portState.nodeId].ref.getBoundingClientRect(diagramState.zoom);
        const portHtmlElement = (event.target as Element);
        const portRect = (event.target as Element)?.getBoundingClientRect();
        portHtmlElement.releasePointerCapture(event.pointerId);
        if (nodeRect && portRect) {
          activeRef.current = true;
          linkCreation.startLinking(portState);
        }
      },
      onDragEnd: () => {
        activeRef.current = false;
        linkCreation.stopLinking();
      },
      onPointerEnter: () => {
        linkCreation.setTargetPortCandidate(portState);
      }
    }, {
    domTarget: userInteractionElemRef,
    eventOptions: { passive: false },
    enabled: enable,
  });

  useUserAbilityToSelectSwitcher(
    activeRef.current,
    userInteractionElemRef.current?.ownerDocument?.body
  );

  return {
    active: activeRef.current,
    userInteractionElemRef,
  };
};

export interface IUseNodeUserInteractionResult {
  active: boolean;
  userInteractionElemRef: React.MutableRefObject<HTMLDivElement | null>;
}