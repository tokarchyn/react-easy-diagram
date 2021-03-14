import { useMemo, useRef } from 'react';
import {
  Handler,
  Vector2,
  WebKitGestureEvent,
} from 'react-use-gesture/dist/types';
import { subtractPoints } from '../../utils';
import { useRootStore } from '../useRootStore';
import { IUserInteractionTranslateAndZoom } from './common';

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

export function useDiagramPinchHandlers(
  elemToAttachToRef: React.RefObject<HTMLElement>,
  activeRef: React.MutableRefObject<boolean>,
  state: IUserInteractionTranslateAndZoom,
  cancel: (event: PinchEvent) => boolean
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

        const rect = elemToAttachToRef.current.getBoundingClientRect();
        const originPositionOnElement = subtractPoints(origin, [
          rect.left,
          rect.top,
        ]);

        state.tranlsateAndZoomInto(
          originDiff,
          originPositionOnElement,
          distance / pinchState.current.distance
        );

        pinchState.current = {
          distance,
          origin,
        };
      },
      onPinchStart: ({ da: [distance], origin, event }) => {
        if (cancel(event)) {
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
