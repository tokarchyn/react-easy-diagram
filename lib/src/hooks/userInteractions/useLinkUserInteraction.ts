import { useNotifyRef } from 'hooks/useNotifyRef';
import { useRootStore } from 'hooks/useRootStore';
import { useMemo, useRef } from 'react';
import { ReactDOMAttributes, useGesture } from '@use-gesture/react';
import { LinkCreationState } from 'states/linkCreationState';
import { LinkState } from 'states/linkState';
import { GestureHandlers } from 'hooks/userInteractions/common';

export const useLinkUserInteraction = (
  linkState: LinkState | LinkCreationState
): IUseLinkUserInteractionResult => {
  const rootStore = useRootStore();

  const activeRef = useNotifyRef(false);
  const selectionHandledRef = useRef(false);
  const selectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlers = useMemo<GestureHandlers>(
    () =>
      linkState instanceof LinkState
        ? {
            onPointerEnter: () => {
              linkState.hovered = true;
            },
            onPointerLeave: () => {
              linkState.hovered = false;
            },
            onDragStart: () => {
              activeRef.current = !rootStore.dragState.isActive;
              if (activeRef.current) {
                selectionHandledRef.current = false;

                if (linkState.isSelectionEnabled) {
                  selectionTimeoutRef.current = global.setTimeout(() => {
                    if (!selectionHandledRef.current) {
                      selectionHandledRef.current = true;
                      rootStore.selectionState.switch(linkState);
                    }
                  }, selectDelay);
                }
              }
            },
            onDragEnd: ({ tap, ctrlKey, shiftKey, altKey, metaKey }) => {
              if (activeRef.current) {
                activeRef.current = false;
                if (selectionTimeoutRef.current) {
                  clearTimeout(selectionTimeoutRef.current);
                }

                if (
                  linkState.isSelectionEnabled &&
                  tap &&
                  !selectionHandledRef.current
                ) {
                  selectionHandledRef.current = true;
                  rootStore.selectionState.switch(
                    linkState,
                    !rootStore.diagramSettings.userInteraction.isCallbackMultiselectionActivated(
                      shiftKey,
                      altKey,
                      ctrlKey,
                      metaKey
                    )
                  );
                }
              }
            },
          }
        : {},
    [linkState, rootStore]
  );

  const bind = useGesture(handlers, {
    eventOptions: { passive: false },
    enabled: !rootStore.diagramSettings.userInteraction.arePointerInteractionsDisabled
  });

  return { bind };
};

const selectDelay: number = 500;

export interface IUseLinkUserInteractionResult {
  bind: (...args: any[]) => ReactDOMAttributes;
}
