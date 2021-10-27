import React, { useCallback } from 'react';
import { useGesture, WebKitGestureEvent } from '@use-gesture/react';
import { useRootStore } from 'hooks/useRootStore';
import { useDiagramDragHandlers } from 'hooks/userInteractions/useDiagramDragHandlers';
import { useDiagramPinchHandlers } from 'hooks/userInteractions/useDiagramPinchHandlers';
import { useDiagramWheelHandler } from 'hooks/userInteractions/useDiagramWheelHandler';

export const useDiagramUserInteraction = () => {
  const { diagramState, diagramSettings } = useRootStore();

  const cancelGesture = useCallback(
    (
      event: {target: EventTarget | null}
    ) => event.target !== diagramState.diagramInnerRef.current,
    [diagramState.diagramInnerRef]
  );

  const dragHandlers = useDiagramDragHandlers(cancelGesture);
  const pinchHandlers = useDiagramPinchHandlers(cancelGesture);
  const wheelHandler = useDiagramWheelHandler(diagramState);

  useGesture(
    {
      ...dragHandlers,
      ...pinchHandlers,
      ...wheelHandler,
    },
    {
      target: diagramState.diagramInnerRef,
      eventOptions: { passive: false },
      enabled: !diagramSettings.userInteraction.arePointerInteractionsDisabled
    }
  );
};
