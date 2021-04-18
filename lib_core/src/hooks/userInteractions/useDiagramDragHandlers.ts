import { useMemo } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { useRootStore } from 'hooks/useRootStore';
import { useNotifyRef } from 'hooks/useNotifyRef';
import { useUserAbilityToSelectSwitcher } from 'hooks/userInteractions/useUserAbilityToSelectSwitcher';

type DragEventHandler =
  | Handler<'drag', React.PointerEvent<Element> | PointerEvent>
  | undefined;

export interface IDragHandlers {
  onDrag: DragEventHandler;
  onDragStart: DragEventHandler;
  onDragEnd: DragEventHandler;
}

export function useDiagramDragHandlers(
  cancelEvent?: (event: React.PointerEvent<Element> | PointerEvent) => boolean
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
        diagramState.setOffset([
          diagramState.offset[0] + delta[0],
          diagramState.offset[1] + delta[1],
        ]);
      },
      onDragStart: ({ event, cancel }) => {
        if (cancelEvent && cancelEvent(event)) {
          cancel();
          return;
        }
        // Do not activate so drag will not be performed, but also don't cancel, as it would not be possible to clear selection
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
    [activeRef, diagramState, cancelEvent, rootStore]
  );

  useUserAbilityToSelectSwitcher(
    activeRef.current,
    diagramState.diagramInnerRef.current?.ownerDocument?.body
  );

  return handlers;
}
