import { useMemo } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { subtractPoints } from 'utils/point';
import type { IUserInteractionTranslateAndZoom } from 'hooks/userInteractions/common';
import { useRootStore } from 'hooks/useRootStore';

export function useDiagramWheelHandler(
  state: IUserInteractionTranslateAndZoom
): IWheelHandler {
  const { diagramState, diagramSettings } = useRootStore();

  const handlers = useMemo<IWheelHandler>(
    () => ({
      onWheel: ({ direction: [_, yDirection], event }) => {
        if (
          !diagramState.diagramInnerRef.current ||
          !diagramSettings.userInteraction.diagramZoom
        )
          return;
        event?.preventDefault();
        const rect = diagramState.diagramInnerRef.current.getBoundingClientRect();

        const mousePositionOnElement = subtractPoints(
          [event.clientX, event.clientY],
          [rect.left, rect.top]
        );

        let factor = 0.9;
        if (yDirection < 0) {
          factor = 1 / factor;
        }

        state.tranlsateAndZoomInto([0, 0], mousePositionOnElement, factor);
      },
    }),
    [diagramState.diagramInnerRef, state, diagramSettings]
  );

  return handlers;
}

type WheelEventHandler =
  | Handler<'wheel', React.WheelEvent<Element> | WheelEvent>
  | undefined;

interface IWheelHandler {
  onWheel: WheelEventHandler;
}
