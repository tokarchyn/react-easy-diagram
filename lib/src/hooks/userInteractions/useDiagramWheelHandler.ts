import { EventTypes, Handler } from '@use-gesture/react';
import type {
  check,
  IUserInteractionTranslateAndZoom,
} from 'hooks/userInteractions/common';
import { useRootStore } from 'hooks/useRootStore';
import { useMemo } from 'react';
import { subtractPoints } from 'utils/point';

export function useDiagramWheelHandler(
  state: IUserInteractionTranslateAndZoom
): IWheelHandler {
  const { diagramState, diagramSettings } = useRootStore();

  const handlers = useMemo<IWheelHandler>(
    () => ({
      onWheel: ({ direction: [_, yDirection], event }) => {
        if (
          !diagramState.ref.current ||
          !diagramSettings.userInteraction.diagramZoom
        )
          return;
        event?.preventDefault();
        const rect = diagramState.ref.current.getBoundingClientRect();

        const mousePositionOnElement = subtractPoints(
          [event.clientX, event.clientY],
          [rect.left, rect.top]
        );

        let factor = 0.9;
        if (yDirection < 0) {
          factor = 1 / factor;
        }

        state.translateAndZoomInto([0, 0], mousePositionOnElement, factor);
      },
    }),
    [diagramState.ref, state, diagramSettings]
  );

  return handlers;
}

type WheelEventHandler = Handler<'wheel', check<EventTypes, 'wheel'>>;

interface IWheelHandler {
  onWheel: WheelEventHandler;
}
