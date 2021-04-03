import React, { useCallback } from 'react';
import { useGesture } from 'react-use-gesture';
import { WebKitGestureEvent } from 'react-use-gesture/dist/types';
import { useNotifyRef } from 'hooks/useNotifyRef';
import { useRootStore } from 'hooks/useRootStore';
import { useDiagramDragHandlers } from 'hooks/userInteractions/useDiagramDragHandlers';
import { useDiagramPinchHandlers } from 'hooks/userInteractions/useDiagramPinchHandlers';
import { useUserAbilityToSelectSwitcher } from 'hooks/userInteractions/useUserAbilityToSelectSwitcher';
import { useDiagramWheelHandler } from 'hooks/userInteractions/useDiagramWheelHandler';

export const useDiagramUserInteraction = (
  enable?: boolean
): IUseDragAndZoomResult => {
  const { diagramState } = useRootStore();
  const activeRef = useNotifyRef(false);

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

  const getOffset = useCallback(() => diagramState.offset, [diagramState]);
  const setOffset = useCallback(diagramState.setOffset, [diagramState]);

  const dragHandlers = useDiagramDragHandlers(
    activeRef,
    getOffset,
    setOffset,
    cancelGesture
  );

  const pinchHandlers = useDiagramPinchHandlers(
    diagramState.diagramInnerRef,
    activeRef,
    diagramState,
    cancelGesture
  );

  const wheelHandler = useDiagramWheelHandler(
    diagramState.diagramInnerRef,
    activeRef,
    diagramState
  );

  useGesture(
    {
      ...dragHandlers,
      ...pinchHandlers,
      ...wheelHandler,
    },
    {
      domTarget: diagramState.diagramInnerRef,
      eventOptions: { passive: false },
      enabled: enable,
    }
  );

  useUserAbilityToSelectSwitcher(
    activeRef.current,
    diagramState.diagramInnerRef.current?.ownerDocument?.body
  );

  return {
    transform: diagramState.transformString,
    active: activeRef.current,
  };
};

export interface IUseDragAndZoomResult {
  transform: string;
  active: boolean;
}
