import { useMemo } from 'react';
import { EventTypes, Handler } from '@use-gesture/react';
import { useRootStore } from 'hooks/useRootStore';
import { useNotifyRef } from 'hooks/useNotifyRef';
import { addPoints } from 'utils/point';
import { useDiagramCursor } from 'hooks/userInteractions/useCursor';
import { check } from './common';

type DragEventHandler = Handler<'drag', check<EventTypes, 'drag'>>;

export interface IDragHandlers {
  onDrag: DragEventHandler;
  onDragStart: DragEventHandler;
  onDragEnd: DragEventHandler;
}

export function useDiagramDragHandlers(
  cancelEvent: (event: { target: EventTarget | null }) => boolean
): IDragHandlers {
  const rootStore = useRootStore();
  const diagramState = rootStore.diagramState;

  const activeRef = useNotifyRef(false);
  const handlers = useMemo<IDragHandlers>(
    () => ({
      onDrag: ({ pinching, delta }) => {
        if (!activeRef.current || pinching) {
          return;
        }
        diagramState.setOffset(addPoints(diagramState.offset, delta));
      },
      onDragStart: ({ event, cancel }) => {
        if (cancelEvent(event)) {
          cancel();
          return;
        }
        // Do not activate so drag will not be performed, but also don't cancel, as it would not be possible to clear selection
        if (!rootStore.diagramSettings.userInteraction.diagramPan) {
          return;
        }
        if ((event as MouseEvent).buttons !== 1) {
          return;
        }
        activeRef.current = true;
      },
      onDragEnd: ({ tap }) => {
        if (activeRef.current) {
          if (tap) {
            rootStore.selectionState.unselectAll();
          }
          activeRef.current = false;
        }
      },
    }),
    [activeRef, diagramState, cancelEvent, rootStore]
  );

  useDiagramCursor(activeRef.current, 'grabbing');

  return handlers;
}
