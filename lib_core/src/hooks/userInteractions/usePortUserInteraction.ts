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
  const { linksStore, diagramState, nodesStore } = useRootStore();

  // Should trigger rendering on change, otherwise useUserSelectSwitcher will not be invoked
  const activeRef = useNotifyRef(false);
  const userInteractionElemRef = useRef<HTMLDivElement>(null);

  useGesture(
    {
      onDrag: ({ pinching, delta }) => {
        if (!activeRef.current || pinching) {
          return;
        }
        const parentScale = diagramState.zoom;
        linksStore.linkCreation?.setTarget({
          position: [
            linksStore.linkCreation.targetPoint[0] + delta[0] / parentScale,
            linksStore.linkCreation.targetPoint[1] + delta[1] / parentScale,
          ]
        });
      },
      onDragStart: ({ event }) => {
        const node = nodesStore.nodes[portState.nodeId];
        const nodeRect = node.ref.current?.getBoundingClientRect();
        const portRect = (event.target as Element)?.getBoundingClientRect();
        
        if (nodeRect && portRect) {
          activeRef.current = true;
          linksStore.startLinking(portState);
        }
      },
      onDragEnd: () => {
        activeRef.current = false;
        linksStore.stopLinking();
      },
      onPointerEnter: () => {
        console.log(`onPointerEnter: '${portState.nodeId}':'${portState.id}'`);
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
  userInteractionElemRef: React.RefObject<HTMLDivElement>;
}