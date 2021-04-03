import { useMemo } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { subtractPoints } from 'utils/point';
import type { IUserInteractionTranslateAndZoom } from 'hooks/userInteractions/common';

export function useDiagramWheelHandler(
  elemToAttachToRef: React.RefObject<HTMLElement>,
  activeRef: React.MutableRefObject<boolean>,
  state: IUserInteractionTranslateAndZoom
): IWheelHandler {
  const handlers = useMemo<IWheelHandler>(
    () => ({
      onWheel: ({
        direction: [_, yDirection],
        event: { clientX, clientY },
      }) => {
        if (!elemToAttachToRef.current) return;
        event?.preventDefault();
        const rect = elemToAttachToRef.current.getBoundingClientRect();

        const mousePositionOnElement = subtractPoints(
          [clientX, clientY],
          [rect.left, rect.top]
        );

        let factor = 0.9;
        if (yDirection < 0) {
          factor = 1 / factor;
        }

        state.tranlsateAndZoomInto([0, 0], mousePositionOnElement, factor);
      },
    }),
    [elemToAttachToRef, activeRef, state]
  );

  return handlers;
}

type WheelEventHandler =
  | Handler<'wheel', React.WheelEvent<Element> | WheelEvent>
  | undefined;

interface IWheelHandler {
  onWheel: WheelEventHandler;
}
