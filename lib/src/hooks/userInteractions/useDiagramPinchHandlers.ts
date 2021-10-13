import { useMemo, useRef } from 'react';
import { Handler, WebKitGestureEvent } from 'react-use-gesture/dist/types';
import { Point, subtractPoints } from 'utils/point';
import { useRootStore } from 'hooks/useRootStore';
import { useNotifyRef } from 'hooks/useNotifyRef';

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
  cancel: (event: PinchEvent) => boolean
): IPinchHandlers {
  const { diagramState, diagramSettings } = useRootStore();

  const activeRef = useNotifyRef(false);
  const pinchState = useRef<IPinchState>({
    distance: 0,
    origin: [0, 0],
    elementLeftTop: [0, 0],
  });

  const handlers = useMemo<IPinchHandlers>(
    () => ({
      onPinch: ({ da: [distance], origin }) => {
        if (!activeRef.current || !diagramState.diagramInnerRef.current) {
          return;
        }
        const originDiff = diagramSettings.userInteraction.diagramPan
          ? subtractPoints(origin, pinchState.current.origin)
          : ([0, 0] as Point);

        const originPositionOnElement = subtractPoints(
          origin,
          pinchState.current.elementLeftTop
        );

        diagramState.tranlsateAndZoomInto(
          originDiff,
          originPositionOnElement,
          distance / pinchState.current.distance
        );

        pinchState.current = {
          distance,
          origin,
          elementLeftTop: pinchState.current.elementLeftTop,
        };
      },
      onPinchStart: ({ da: [distance], origin, event }) => {
        if (
          !diagramSettings.userInteraction.diagramZoom ||
          cancel(event) ||
          !diagramState.diagramInnerRef.current
        ) {
          return;
        }

        const rect = diagramState.diagramInnerRef.current.getBoundingClientRect();
        pinchState.current = {
          distance,
          origin,
          elementLeftTop: [rect.left, rect.top],
        };
        activeRef.current = true;
      },
      onPinchEnd: () => (activeRef.current = false),
    }),
    [
      diagramState.diagramInnerRef.current,
      activeRef,
      diagramState,
      cancel,
      diagramSettings,
    ]
  );

  return handlers;
}

interface IPinchState {
  distance: number;
  origin: Point;
  elementLeftTop: Point;
}
