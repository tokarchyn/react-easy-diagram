import React, { useCallback, useEffect, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { WebKitGestureEvent } from 'react-use-gesture/dist/types';
import { useRecoilState } from 'recoil';
import { diagramTransformationState } from '../../states/diagramState';
import {
  areTranformationsEqual,
  generateTransform,
  ITransformation,
} from '../../utils';
import { useNotifyRef } from '../useNotifyRef';
import { useUserAbilityToSelectSwitcher } from './common';
import { useDragHandlers } from './useDragHandlers';
import { usePinchHandlers } from './usePinchHandlers';
import { useWheelHandler } from './useWheelHandler';

export const useDiagramUserInteraction = (
  enable?: boolean
): IUseDragAndZoomResult => {
  const [transformation, setTransformation] = useRecoilState(
    diagramTransformationState
  );
  const stateRef = useNotifyRef<ITransformation>({
    scale: transformation.scale,
    position: transformation.position,
  });
  const activeRef = useNotifyRef(false);
  const userInteractionElemRef = useRef<HTMLDivElement>(null);

  useTransformationSync(
    activeRef.current,
    stateRef,
    transformation,
    setTransformation
  );

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
    stateRef,
    undefined,
    cancelGesture
  );

  const pinchHandlers = usePinchHandlers(
    userInteractionElemRef,
    activeRef,
    stateRef,
    cancelGesture
  );

  const wheelHandler = useWheelHandler(
    userInteractionElemRef,
    activeRef,
    stateRef,
    setTransformation
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
    transform: generateTransform(
      stateRef.current.position,
      stateRef.current.scale
    ),
    active: activeRef.current,
  };
};

export interface IUseDragAndZoomResult {
  userInteractionElemRef: React.RefObject<HTMLDivElement>;
  transform: string;
  active: boolean;
}

function useTransformationSync(
  active: boolean,
  internalTransformationRef: React.MutableRefObject<ITransformation>,
  externalTransformation: ITransformation,
  setExternalTransformation: (
    setter: (currentTransformation: ITransformation) => ITransformation
  ) => void
) {
  useEffect(() => {
    if (!active) {
      if (
        !areTranformationsEqual(
          internalTransformationRef.current,
          externalTransformation
        )
      ) {
        internalTransformationRef.current = {
          scale: externalTransformation.scale,
          position: externalTransformation.position,
        };
      }
    } else {
      setExternalTransformation((currentTransformation) => {
        if (
          !areTranformationsEqual(
            currentTransformation,
            internalTransformationRef.current
          )
        ) {
          return internalTransformationRef.current;
        } else return currentTransformation;
      });
    }
  }, [
    active,
    internalTransformationRef.current,
    externalTransformation,
    setExternalTransformation,
  ]);
}
