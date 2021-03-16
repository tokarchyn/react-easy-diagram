import React, { useMemo, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { ReactEventHandlers } from 'react-use-gesture/dist/types';
import { useNotifyRef, useRootStore } from '..';
import { LinkCreationState } from '../../states';
import { LinkState } from '../../states/linkState';
import { GestureHandlers } from './common';

export const useLinkUserInteraction = (
  linkState: LinkState | LinkCreationState
): IUseLinkUserInteractionResult => {
  const rootStore = useRootStore();
  const selectionHandledRef = useNotifyRef(false);
  const selectionTimeoutRef = useNotifyRef<NodeJS.Timeout | null>(null);
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
            onDragStart: ({ event }) => {
              selectionHandledRef.current = false;
              selectionTimeoutRef.current = setTimeout(() => {
                if (!selectionHandledRef.current) {
                  selectionHandledRef.current = true;
                  rootStore.selectionState.select(linkState, true);
                }
              }, selectDelay);
            },
            onDragEnd: ({ tap, ctrlKey }) => {
              if (selectionTimeoutRef.current) {
                clearTimeout(selectionTimeoutRef.current);
              }
              if (tap && !selectionHandledRef.current) {
                selectionHandledRef.current = true;
                rootStore.selectionState.select(linkState, ctrlKey);
              }
            },
          }
        : {},
    [linkState]
  );

  const bind = useGesture(handlers, {
    eventOptions: { passive: false },
  });

  return { bind };
};

const selectDelay: number = 500;

export interface IUseLinkUserInteractionResult {
  bind: (...args: any[]) => ReactEventHandlers;
}
