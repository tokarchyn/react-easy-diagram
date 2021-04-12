import { useMemo } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { subtractPoints } from 'utils/point';
import type { IUserInteractionTranslateAndZoom } from 'hooks/userInteractions/common';
import { useRootStore } from 'hooks/useRootStore';

export function useDiagramWheelHandler(
  elemToAttachToRef: React.RefObject<HTMLElement>,
  activeRef: React.MutableRefObject<boolean>,
  state: IUserInteractionTranslateAndZoom
): IWheelHandler {
  const { diagramSettings } = useRootStore();

  const handlers = useMemo<IWheelHandler>(
    () => ({
      onWheel: ({ direction: [_, yDirection], event }) => {
        if (
          !elemToAttachToRef.current ||
          !diagramSettings.userInteraction.diagramZoom
        )
          return;
        event?.preventDefault();
        const rect = elemToAttachToRef.current.getBoundingClientRect();

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
    [elemToAttachToRef, activeRef, state, diagramSettings]
  );

  return handlers;
}

type WheelEventHandler =
  | Handler<'wheel', React.WheelEvent<Element> | WheelEvent>
  | undefined;

interface IWheelHandler {
  onWheel: WheelEventHandler;
}
