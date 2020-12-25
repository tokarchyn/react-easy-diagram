import { useMemo } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { Point } from '../../types/common';
import { ITransformation } from '../../utils';

type DragEventHandler =
  | Handler<'drag', React.PointerEvent<Element> | PointerEvent>
  | undefined;

interface IDragHandlers {
  onDrag: DragEventHandler;
  onDragStart: DragEventHandler;
  onDragEnd: DragEventHandler;
}

export function useDragHandlers(
  activeRef: React.MutableRefObject<boolean>,
  stateRef: React.MutableRefObject<Point | ITransformation>,
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
        if ('scale' in stateRef.current) {
          stateRef.current = {
            scale: stateRef.current.scale,
            position: {
              x: stateRef.current.position.x + delta[0] / parentScale,
              y: stateRef.current.position.y + delta[1] / parentScale,
            },
          };
        } else {
          stateRef.current = {
            x: stateRef.current.x + delta[0] / parentScale,
            y: stateRef.current.y + delta[1] / parentScale,
          };
        }
      },
      onDragStart: ({ event }) => {
        if (cancel && cancel(event)) {
          return;
        }
        activeRef.current = true;
      },
      onDragEnd: () => (activeRef.current = false),
    }),
    [activeRef, stateRef, parentScaleGetter, cancel]
  );

  return handlers;
}
