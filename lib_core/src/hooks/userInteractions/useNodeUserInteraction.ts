import React, { useContext, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { RootStoreContext } from '../../components/Diagram';
import { NodeState } from '../../states/nodeState';
import { useNotifyRef } from '../useNotifyRef';
import { useRootStore } from '../useRootStore';
import { useDragHandlers } from './useDragHandlers';
import { useUserAbilityToSelectSwitcher } from './useUserAbilityToSelectSwitcher';

export const useNodeUserInteraction = (
  nodeState: NodeState,
  enable?: boolean
): IUseNodeUserInteractionResult => {
  const { diagramStore } = useRootStore();

  // Should trigger rendering on change, otherwise useUserSelectSwitcher will not be invoked
  const activeRef = useNotifyRef(false);
  const userInteractionElemRef = useRef<HTMLElement>(null);

  const dragHandlers = useDragHandlers(
    activeRef,
    nodeState,
    () => diagramStore.zoom
  );

  useGesture(dragHandlers, {
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
  userInteractionElemRef: React.RefObject<HTMLElement>;
}
