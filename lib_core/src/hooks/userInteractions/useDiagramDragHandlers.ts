import { useMemo } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { Point } from 'utils/point';
import { useRootStore } from 'hooks/useRootStore';

type DragEventHandler =
  | Handler<'drag', React.PointerEvent<Element> | PointerEvent>
  | undefined;

export interface IDragHandlers {
  onDrag: DragEventHandler;
  onDragStart: DragEventHandler;
  onDragEnd: DragEventHandler;
}

export function useDiagramDragHandlers(
  activeRef: React.MutableRefObject<boolean>,
  getPosition: () => Point,
  setPosition: (position: Point) => any,
  cancelEvent?: (event: React.PointerEvent<Element> | PointerEvent) => boolean
): IDragHandlers {
  const rootStore = useRootStore();
  const handlers = useMemo<IDragHandlers>(
    () => ({
      onDrag: ({ pinching, delta }) => {
        if (!activeRef.current || pinching) {
          return;
        }
        const currentPosition = getPosition();
        setPosition([
          currentPosition[0] + delta[0],
          currentPosition[1] + delta[1],
        ]);
      },
      onDragStart: ({ event, cancel }) => {
        if (cancelEvent && cancelEvent(event)) {
          cancel();
          return;
        }
        // Do not activate so drag will not be performed, but also don't cancel, as it would not be posseble to clear selection
        if (!rootStore.diagramSettings.userInteraction.diagramPan) {
          return;
        }
        activeRef.current = true;
      },
      onDragEnd: ({ tap }) => {
        if (tap) {
          rootStore.selectionState.clear();
        }
        activeRef.current = false;
      },
    }),
    [activeRef, getPosition, setPosition, cancelEvent, rootStore]
  );

  return handlers;
}
