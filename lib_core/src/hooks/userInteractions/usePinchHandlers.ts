import { useMemo, useRef } from 'react';
import {
  Handler,
  Vector2,
  WebKitGestureEvent,
} from 'react-use-gesture/dist/types';
import {
  addPoints,
  computeTransformationOnScale,
  ITransformation,
  subtractPoints,
} from '../../utils';

type PinchEvent =
  | React.TouchEvent
  | TouchEvent
  | React.WheelEvent
  | WheelEvent
  | WebKitGestureEvent;

type PinchEventHandler = Handler<'pinch', PinchEvent> | undefined;

interface IPinchHandlers {
  onPinch: PinchEventHandler;
  onPinchStart: PinchEventHandler;
  onPinchEnd: PinchEventHandler;
}

export function usePinchHandlers(
  elemToAttachToRef: React.RefObject<HTMLElement>,
  activeRef: React.MutableRefObject<boolean>,
  stateRef: React.MutableRefObject<ITransformation>,
  cancel?: (event: PinchEvent) => boolean
): IPinchHandlers {
  const pinchState = useRef<IPinchState>({
    distance: 0,
    origin: [0, 0],
  });

  const handlers = useMemo<IPinchHandlers>(
    () => ({
      onPinch: ({ da: [distance], origin }) => {
        if (!activeRef.current) {
          return;
        }

        const originDiff = subtractPoints(origin, pinchState.current.origin);

        const diff = distance - pinchState.current.distance;
        if (Math.abs(diff) > 1 && elemToAttachToRef.current) {
          const elWidth =
            elemToAttachToRef.current.clientWidth * stateRef.current.scale;
          const targetElWidth = elWidth + diff;
          const factor = targetElWidth / elWidth;

          const scaleTransformation = computeTransformationOnScale(
            elemToAttachToRef.current,
            origin,
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
        if (cancel && cancel(event)) {
          return;
        }

        pinchState.current = {
          distance,
          origin,
        };
        activeRef.current = true;
      },
      onPinchEnd: () => (activeRef.current = false),
    }),
    [elemToAttachToRef, activeRef, stateRef, cancel]
  );

  return handlers;
}

interface IPinchState {
  distance: number;
  origin: Vector2;
}
