import { useNotifyRef } from 'hooks/useNotifyRef';
import { useRootStore } from 'hooks/useRootStore';
import { useMemo, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { ReactEventHandlers } from 'react-use-gesture/dist/types';
import { LinkCreationState } from 'states/linkCreationState';
import { LinkState } from 'states/linkState';
import { GestureHandlers } from 'hooks/userInteractions/common';
import { useUserAbilityToSelectSwitcher } from 'hooks/userInteractions/useUserAbilityToSelectSwitcher';

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
              activeRef.current = true;
              selectionHandledRef.current = false;

              if (linkState.isSelectionEnabled) {
                selectionTimeoutRef.current = setTimeout(() => {
                  if (!selectionHandledRef.current) {
                    selectionHandledRef.current = true;
                    rootStore.selectionState.select(linkState, true);
                  }
                }, selectDelay);
              }
            },
            onDragEnd: ({ tap, ctrlKey }) => {
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
                rootStore.selectionState.select(linkState, ctrlKey);
              }
            },
          }
        : {},
    [linkState, rootStore]
  );

  const bind = useGesture(handlers, {
    eventOptions: { passive: false },
  });

  useUserAbilityToSelectSwitcher(
    activeRef.current,
    rootStore.diagramState.diagramInnerRef.current?.ownerDocument?.body
  );

  return { bind };
};

const selectDelay: number = 500;

export interface IUseLinkUserInteractionResult {
  bind: (...args: any[]) => ReactEventHandlers;
}
