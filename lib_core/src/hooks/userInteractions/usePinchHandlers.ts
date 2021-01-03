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
import { IUserInteractionTransformation } from './common';

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
  state: IUserInteractionTransformation,
  cancel?: (event: PinchEvent) => boolean
): IPinchHandlers {
  const pinchState = useRef<IPinchState>({
    distance: 0,
    origin: [0, 0],
  });

  const handlers = useMemo<IPinchHandlers>(
    () => ({
      onPinch: ({ da: [distance], origin }) => {
        if (!activeRef.current || !elemToAttachToRef.current) {
          return;
        }

        const originDiff = subtractPoints(origin, pinchState.current.origin);

        const diff = distance - pinchState.current.distance;
        const elWidth =
          elemToAttachToRef.current.clientWidth * state.zoom;
        const targetElWidth = elWidth + diff;
        const factor = targetElWidth / elWidth;

        const scaleTransformation = computeTransformationOnScale(
          elemToAttachToRef.current,
          origin,
          addPoints(state.offset, originDiff),
          state.zoom,
          factor
        );

        pinchState.current = {
          distance,
          origin,
        };

        state.setTransformation(scaleTransformation.position, scaleTransformation.scale);
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
    [elemToAttachToRef, activeRef, state, cancel]
  );

  return handlers;
}

interface IPinchState {
  distance: number;
  origin: Vector2;
}
