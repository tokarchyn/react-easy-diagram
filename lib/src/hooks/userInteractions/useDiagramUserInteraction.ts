import React, { useCallback } from 'react';
import { useGesture } from 'react-use-gesture';
import { WebKitGestureEvent } from 'react-use-gesture/dist/types';
import { useRootStore } from 'hooks/useRootStore';
import { useDiagramDragHandlers } from 'hooks/userInteractions/useDiagramDragHandlers';
import { useDiagramPinchHandlers } from 'hooks/userInteractions/useDiagramPinchHandlers';
import { useDiagramWheelHandler } from 'hooks/userInteractions/useDiagramWheelHandler';

export const useDiagramUserInteraction = (): IUseDragAndZoomResult => {
  const { diagramState } = useRootStore();

  const cancelGesture = useCallback(
    (
      event:
        | TouchEvent
        | React.TouchEvent<Element>
        | React.WheelEvent<Element>
        | WheelEvent
        | WebKitGestureEvent
        | React.PointerEvent<Element>
        | PointerEvent
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
      domTarget: diagramState.diagramInnerRef,
      eventOptions: { passive: false },
    }
  );

  return {
    transform: diagramState.transformString,
  };
};

export interface IUseDragAndZoomResult {
  transform: string;
}
