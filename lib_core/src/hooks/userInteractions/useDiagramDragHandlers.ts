import { useMemo } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { ISelectableItem } from '../../states/selectionState';
import { Point } from '../../types/common';
import { useRootStore } from '../useRootStore';
import { IUserInteractionTranslate } from './common';

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
  cancel?: (event: React.PointerEvent<Element> | PointerEvent) => boolean
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
      onDragStart: ({ event }) => {
        if (cancel && cancel(event)) {
          return;
        }
        activeRef.current = true;
      },
      onDragEnd: ({tap}) => {
        activeRef.current = false;
        if (tap) {
          rootStore.selectionState.clear();
        }
      },
    }),
    [activeRef, getPosition, setPosition, cancel, rootStore]
  );

  return handlers;
}
