import { useMemo } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { computeTransformationOnScale, ITransformation } from '../../utils';
import { IUserInteractionTransformation } from './common';

export function useWheelHandler(
  elemToAttachToRef: React.RefObject<HTMLElement>,
  activeRef: React.MutableRefObject<boolean>,
  state: IUserInteractionTransformation
): IWheelHandler {
  const handlers = useMemo<IWheelHandler>(
    () => ({
      onWheel: ({
        direction: [_, yDirection],
        event: { clientX, clientY },
      }) => {
        if (elemToAttachToRef.current) {
          let factor = 0.9;
          if (yDirection < 0) {
            factor = 1 / factor;
          }
          const newTransformation = computeTransformationOnScale(
            elemToAttachToRef.current,
            [clientX, clientY],
            state.offset,
            state.zoom,
            factor
          );
          state.setTransformation(newTransformation.position, newTransformation.scale);
        }
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
