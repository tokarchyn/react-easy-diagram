import { EventTypes, Handler } from '@use-gesture/react';
import { useNotifyRef } from 'hooks/useNotifyRef';
import { useRootStore } from 'hooks/useRootStore';
import { useMemo, useRef } from 'react';
import { Point, subtractPoints } from 'utils/point';
import { check } from './common';

export function useDiagramPinchHandlers(
  cancel: (event: { target: EventTarget | null }) => boolean
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
        if (!activeRef.current || !diagramState.ref.current) {
          return;
        }
        const originDiff = diagramSettings.userInteraction.diagramPan
          ? subtractPoints(origin, pinchState.current.origin)
          : ([0, 0] as Point);

        const originPositionOnElement = subtractPoints(
          origin,
          pinchState.current.elementLeftTop
        );

        diagramState.translateAndZoomInto(
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
          !diagramState.ref.current
        ) {
          return;
        }

        const rect = diagramState.ref.current.getBoundingClientRect();
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
      diagramState.ref.current,
      activeRef,
      diagramState,
      cancel,
      diagramSettings,
    ]
  );

  return handlers;
}

type PinchEventHandler = Handler<'pinch', check<EventTypes, 'pinch'>>;

interface IPinchHandlers {
  onPinch: PinchEventHandler;
  onPinchStart: PinchEventHandler;
  onPinchEnd: PinchEventHandler;
}

interface IPinchState {
  distance: number;
  origin: Point;
  elementLeftTop: Point;
}
