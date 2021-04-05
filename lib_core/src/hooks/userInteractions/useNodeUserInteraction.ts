import React, { useMemo, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { NodeState } from 'states/nodeState';
import { addPoints, multiplyPoint, Point } from 'utils/point';
import { useNotifyRef } from 'hooks/useNotifyRef';
import { useRootStore } from 'hooks/useRootStore';
import { useUserAbilityToSelectSwitcher } from 'hooks/userInteractions/useUserAbilityToSelectSwitcher';
import {
  canDragGestureBeTapInstead,
  eventPathContainsClass,
  GestureHandlers,
} from 'hooks/userInteractions/common';

export const useNodeUserInteraction = (
  nodeState: NodeState,
  enable?: boolean
): IUseNodeUserInteractionResult => {
  const rootStore = useRootStore();

  // Should trigger rendering on change, otherwise useUserSelectSwitcher will not be invoked
  const activeRef = useNotifyRef(false);
  // In case the snap to grid option is enabled in settings
  const remainderFromPreviousDragEventRef = useRef<
    Map<NodeState, Point | undefined>
  >(new Map());
  const selectionHandledRef = useRef(false);
  const selectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractionElemRef = useRef<HTMLElement>(null);

  const handlers = useMemo<GestureHandlers>(
    () => ({
      onDrag: ({ pinching, delta, ctrlKey, movement }) => {
        if (
          !activeRef.current ||
          pinching ||
          canDragGestureBeTapInstead(movement)
        ) {
          return;
        } else if (!nodeState.selected && !selectionHandledRef.current) {
          rootStore.selectionState.select(nodeState, ctrlKey);
          selectionHandledRef.current = true;
        } else if (nodeState.selected) {
          // prevent canceling selection on timeout
          selectionHandledRef.current = true;
          rootStore.selectionState.selectedItems
            .filter((i) => i instanceof NodeState)
            .forEach((n: NodeState) => {
              const newPosition = addPoints(
                n.position,
                multiplyPoint(delta, 1 / rootStore.diagramState.zoom),
                remainderFromPreviousDragEventRef.current.get(n) ?? [0, 0]
              );
              const newRemainder = n.setPosition(newPosition);
              remainderFromPreviousDragEventRef.current.set(n, newRemainder);
            });
        }
      },
      onDragStart: ({ event }) => {
        if (cancelPortsEvents(event)) {
          return;
        }
        activeRef.current = true;
        selectionHandledRef.current = false;
        selectionTimeoutRef.current = setTimeout(() => {
          if (activeRef.current && !selectionHandledRef.current) {
            selectionHandledRef.current = true;
            rootStore.selectionState.select(nodeState, true);
          }
        }, selectDelay);
      },
      onDragEnd: ({ tap, ctrlKey }) => {
        if (selectionTimeoutRef.current) {
          clearTimeout(selectionTimeoutRef.current);
        }
        activeRef.current = false;
        if (tap && !selectionHandledRef.current) {
          rootStore.selectionState.select(nodeState, ctrlKey);
        }
        remainderFromPreviousDragEventRef.current.clear();
      },
    }),
    [activeRef, nodeState, rootStore]
  );

  useGesture(handlers, {
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

const selectDelay: number = 500;

function cancelPortsEvents(event: React.PointerEvent<Element> | PointerEvent) {
  return eventPathContainsClass(event, 'react_easy_diagram_port');
}

export interface IUseNodeUserInteractionResult {
  active: boolean;
  userInteractionElemRef: React.RefObject<HTMLElement>;
}
