import React, { useCallback, useContext, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { WebKitGestureEvent } from 'react-use-gesture/dist/types';
import { RootStoreContext } from '../../components/Diagram';
import { useNotifyRef } from '../useNotifyRef';
import { useRootStore } from '../useRootStore';
import { useDragHandlers } from './useDragHandlers';
import { usePinchHandlers } from './usePinchHandlers';
import { useUserAbilityToSelectSwitcher } from './useUserAbilityToSelectSwitcher';
import { useWheelHandler } from './useWheelHandler';

export const useDiagramUserInteraction = (
  enable?: boolean
): IUseDragAndZoomResult => {
  const { diagramStore } = useRootStore();
  const activeRef = useNotifyRef(false);
  const userInteractionElemRef = useRef<HTMLDivElement>(null);

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
    ) => event.target !== userInteractionElemRef.current,
    [userInteractionElemRef]
  );

  const dragHandlers = useDragHandlers(
    activeRef,
    diagramStore,
    undefined,
    cancelGesture
  );

  const pinchHandlers = usePinchHandlers(
    userInteractionElemRef,
    activeRef,
    diagramStore,
    cancelGesture
  );

  const wheelHandler = useWheelHandler(
    userInteractionElemRef,
    activeRef,
    diagramStore
  );

  useGesture(
    {
      ...dragHandlers,
      ...pinchHandlers,
      ...wheelHandler,
    },
    {
      domTarget: userInteractionElemRef,
      eventOptions: { passive: false },
      enabled: enable,
    }
  );

  useUserAbilityToSelectSwitcher(
    activeRef.current,
    userInteractionElemRef.current?.ownerDocument?.body
  );

  return {
    userInteractionElemRef,
    transform: diagramStore.transformString,
    active: activeRef.current,
  };
};

export interface IUseDragAndZoomResult {
  userInteractionElemRef: React.RefObject<HTMLDivElement>;
  transform: string;
  active: boolean;
}
