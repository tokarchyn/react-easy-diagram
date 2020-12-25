import React, { useCallback, useEffect, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { Vector2, WebKitGestureEvent } from 'react-use-gesture/dist/types';
import { Point } from '../types/common';
import {
  addPoints,
  computeTransformationOnScale,
  generateTransform,
  ITransformation,
} from '../utils';
import { useNotifyRef } from './useNotifyRef';
import {
  allTouchTargetsContainsClass,
  dragHandlers,
  eventTargetContainsClass,
  useTransformationStateUpdating,
  useUserAbilityToSelectSwitcher,
} from './userInteractions/common';

export const useDragAndZoom = (
  props: IUseDragAndZoomProps
): IUseDragAndZoomResult => {
  // useState instead of reference cause the situation, when multiple gesture callback invocations go before state actually updates,
  // so those invocations will rely on old state data.
  const stateRef = useNotifyRef<ITransformation>({
    scale: props.scale ?? 1,
    position: props.position ?? { x: 0, y: 0 },
  });

  const pinchState = useRef<IPinchState>({
    distance: 0,
    origin: [0, 0],
  });

  // Should trigger rendering on change, otherwise useEffect will not be invoked
  const activeRef = useNotifyRef(false);

  useTransformationStateUpdating(
    activeRef.current,
    stateRef,
    props.scale,
    props.position
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
    ) => {
      if ('touches' in event) {
        return !allTouchTargetsContainsClass(
          event,
          props.listenOnlyClass,
          props.ignoreClass
        );
      } else {
        return !eventTargetContainsClass(
          event.target,
          props.listenOnlyClass,
          props.ignoreClass
        );
      }
    },
    [props.listenOnlyClass, props.ignoreClass]
  );

  useGesture(
    {
      ...dragHandlers(
        activeRef,
        stateRef,
        undefined,
        cancelGesture
      ),
      onPinch: ({ da: [distance], origin }) => {
        if (!activeRef.current) {
          return;
        }

        const originDiff = {
          x: origin[0] - pinchState.current.origin[0],
          y: origin[1] - pinchState.current.origin[1],
        };

        const diff = distance - pinchState.current.distance;
        if (Math.abs(diff) > 1 && props.elemToAttachTo.current) {
          const elWidth =
            props.elemToAttachTo.current.clientWidth * stateRef.current.scale;
          const targetElWidth = elWidth + diff;
          const factor = targetElWidth / elWidth;

          const scaleTransformation = computeTransformationOnScale(
            props.elemToAttachTo.current,
            { x: origin[0], y: origin[1] },
            addPoints(stateRef.current.position, originDiff),
            stateRef.current.scale,
            factor
          );

          pinchState.current = {
            distance,
            origin,
          };

          stateRef.current = scaleTransformation;
        } else {
          pinchState.current = {
            distance: pinchState.current.distance,
            origin,
          };
          stateRef.current = {
            scale: stateRef.current.scale,
            position: addPoints(stateRef.current.position, originDiff),
          };
        }
      },
      onPinchStart: ({ da: [distance], origin, event }) => {
        if (cancelGesture(event)) {
          pinchState.current = {
            distance,
            origin,
          };
          activeRef.current = true;
        }
      },
      onPinchEnd: () => (activeRef.current = false),
      onWheel: ({
        direction: [_, yDirection],
        event: { clientX, clientY },
      }) => {
        if (props.elemToAttachTo.current) {
          let factor = 0.9;
          if (yDirection < 0) {
            factor = 1 / factor;
          }
          const newTransformation = computeTransformationOnScale(
            props.elemToAttachTo.current,
            { x: clientX, y: clientY },
            stateRef.current.position,
            stateRef.current.scale,
            factor
          );
          stateRef.current = newTransformation;
        }
      },
    },
    {
      domTarget: props.elemToAttachTo,
      eventOptions: { passive: false },
      pinch: { enabled: !!props.enableZoom },
      wheel: { enabled: !!props.enableZoom },
      enabled: props.enable,
    }
  );

  useUserAbilityToSelectSwitcher(
    activeRef.current,
    props.elemToAttachTo.current?.ownerDocument?.body
  );

  return {
    transform: generateTransform(
      stateRef.current.position,
      props.enableZoom ? stateRef.current.scale : undefined
    ),
    scale: stateRef.current.scale,
    position: stateRef.current.position,
    active: activeRef.current,
  };
};

export interface IUseDragAndZoomProps {
  elemToAttachTo: React.RefObject<HTMLElement>;
  listenOnlyClass?: string;
  ignoreClass?: string;
  enableZoom?: boolean;
  scale: number;
  position: Point;
  enable?: boolean;
}

export interface IUseDragAndZoomResult {
  transform: string;
  scale: number;
  position: Point;
  active: boolean;
}

interface IPinchState {
  distance: number;
  origin: Vector2;
}
