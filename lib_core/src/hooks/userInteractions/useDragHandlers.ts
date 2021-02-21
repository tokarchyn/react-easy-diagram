import { useMemo } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { IUserInteractionTranslate } from './common';

type DragEventHandler =
  | Handler<'drag', React.PointerEvent<Element> | PointerEvent>
  | undefined;

export interface IDragHandlers {
  onDrag: DragEventHandler;
  onDragStart: DragEventHandler;
  onDragEnd: DragEventHandler;
}

export function useDragHandlers(
  activeRef: React.MutableRefObject<boolean>,
  state: IUserInteractionTranslate,
  parentScaleGetter?: () => number,
  cancel?: (event: React.PointerEvent<Element> | PointerEvent) => boolean
): IDragHandlers {
  const handlers = useMemo<IDragHandlers>(
    () => ({
      onDrag: ({ pinching, delta }) => {
        if (!activeRef.current || pinching) {
          return;
        }
        const parentScale = parentScaleGetter ? parentScaleGetter() : 1;
        state.setOffset([
          state.offset[0] + delta[0] / parentScale,
          state.offset[1] + delta[1] / parentScale,
        ]);
      },
      onDragStart: ({ event }) => {
        if (cancel && cancel(event)) {
          return;
        }
        activeRef.current = true;
      },
      onDragEnd: () => (activeRef.current = false),
    }),
    [activeRef, state, parentScaleGetter, cancel]
  );

  return handlers;
}
