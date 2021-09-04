import React, { useCallback, useMemo, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { NodeState } from 'states/nodeState';
import { addPoints, multiplyPoint, Point } from 'utils/point';
import { useRootStore } from 'hooks/useRootStore';
import { useUserAbilityToSelectSwitcher } from 'hooks/userInteractions/useUserAbilityToSelectSwitcher';
import {
  canDragGestureBeTapInstead,
  eventPathContainsClass,
  GestureHandlers,
} from 'hooks/userInteractions/common';
import { useCursor, useDiagramCursor } from 'hooks/userInteractions/useCursor';

export const useNodeUserInteraction = (
  nodeState: NodeState
): React.RefObject<HTMLElement> => {
  const rootStore = useRootStore();

  // In case the snap to grid option is enabled in settings
  const remainderFromPreviousDragEventRef = useRef<
    Map<NodeState, Point | undefined>
  >(new Map());
  const dragAllowedRef = useRef<boolean>(false);
  const selectOnLongTapRef = useRef<NodeJS.Timeout | null>(null);
  const cancelSelectOnLongTap = useCallback(() => {
    if (selectOnLongTapRef.current) {
      clearTimeout(selectOnLongTapRef.current);
      selectOnLongTapRef.current = null;
      return true;
    }
    return false;
  }, [selectOnLongTapRef]);
  const userInteractionElemRef = useRef<HTMLElement>(null);

  const handlers = useMemo<GestureHandlers>(
    () => ({
      onDrag: ({ pinching, delta, ctrlKey, movement }) => {
        if (
          !dragAllowedRef.current ||
          pinching ||
          canDragGestureBeTapInstead(movement)
        ) {
          return;
        }
        cancelSelectOnLongTap();
        if (!nodeState.isDragEnabled) {
          return;
        }

        if (nodeState.isSelectionEnabled && !nodeState.selected) {
          // If there is any node that was dragged then its probably due to multi-touch,
          // in this case it's better to not unselect those nodes.
          if (
            rootStore.selectionState.selectedNodes.some((n) => n.isDragActive)
          ) {
            rootStore.selectionState.select(nodeState, true);
          } else {
            rootStore.selectionState.select(nodeState, ctrlKey);
          }
        }

        if (nodeState.selected) {
          rootStore.selectionState.selectedNodes.forEach((n) => {
            n.isDragActive = true;
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
        dragAllowedRef.current = allowNodeInteraction(event);
        if (!dragAllowedRef.current) {
          return;
        }
        cancelSelectOnLongTap();
        if (nodeState.isSelectionEnabled) {
          selectOnLongTapRef.current = global.setTimeout(() => {
            if (selectOnLongTapRef.current) {
              selectOnLongTapRef.current = null;
              rootStore.selectionState.select(nodeState, true);
            }
          }, selectDelay);
        }
      },
      onDragEnd: ({ tap, ctrlKey }) => {
        if (!dragAllowedRef.current) {
          return;
        }
        const selectLongOnTapCancelled = cancelSelectOnLongTap();
        rootStore.selectionState.selectedNodes.forEach((n) => {
          n.isDragActive = false;
        });

        // selectLongOnTapCancelled means that callback in timer wasn't executed yet
        if (nodeState.isSelectionEnabled && tap && selectLongOnTapCancelled) {
          rootStore.selectionState.select(nodeState, ctrlKey);
        }
        remainderFromPreviousDragEventRef.current.clear();
      },
    }),
    [nodeState, rootStore]
  );

  useGesture(handlers, {
    domTarget: userInteractionElemRef,
    eventOptions: { passive: false },
  });

  useUserAbilityToSelectSwitcher(
    nodeState.isDragActive,
    userInteractionElemRef.current?.ownerDocument?.body
  );

  useDiagramCursor(nodeState.isDragActive, 'move');
  useCursor(nodeState.isDragActive, 'move', nodeState.ref.current);

  return userInteractionElemRef;
};

const selectDelay: number = 500;

function allowNodeInteraction(
  event: React.PointerEvent<Element> | PointerEvent
) {
  return eventPathContainsClass(
    event,
    enableNodeUserInteractionClassName,
    disableNodeUserInteractionClassName
  );
}

export const enableNodeUserInteractionClassName =
  'react_easy_diagram_enable_node_user_interaction';
export const disableNodeUserInteractionClassName =
  'react_easy_diagram_disable_node_user_interaction';
