import React, { useCallback, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { NodeState } from '../../states/nodeState';
import { useNotifyRef } from '../useNotifyRef';
import { useRootStore } from '../useRootStore';
import { eventPathContainsClass } from './common';
import { useDragHandlers } from './useDragHandlers';
import { useUserAbilityToSelectSwitcher } from './useUserAbilityToSelectSwitcher';

export const useNodeUserInteraction = (
  nodeState: NodeState,
  enable?: boolean
): IUseNodeUserInteractionResult => {
  const { diagramState: diagramStore } = useRootStore();

  // Should trigger rendering on change, otherwise useUserSelectSwitcher will not be invoked
  const activeRef = useNotifyRef(false);
  const userInteractionElemRef = useRef<HTMLElement>(null);

  const getPosition = useCallback(() => nodeState.position, [nodeState]);
  const setPosition = useCallback(nodeState.setPosition, [nodeState]);
  const getDiagramZoom = useCallback(() => diagramStore.zoom, [diagramStore]);

  const dragHandlers = useDragHandlers(
    activeRef,
    getPosition,
    setPosition,
    getDiagramZoom,
    cancelPortsEvents
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

function cancelPortsEvents(event: React.PointerEvent<Element> | PointerEvent) {
  return eventPathContainsClass(event, 'react_fast_diagram_PortWrapper');
}

export interface IUseNodeUserInteractionResult {
  active: boolean;
  userInteractionElemRef: React.RefObject<HTMLElement>;
}
