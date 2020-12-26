import { useMemo } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { computeTransformationOnScale, ITransformation } from '../../utils';

export function useWheelHandler(
  elemToAttachToRef: React.RefObject<HTMLElement>,
  activeRef: React.MutableRefObject<boolean>,
  stateRef: React.MutableRefObject<ITransformation>,
  setTransformation: (transformation: ITransformation) => any
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
            stateRef.current.position,
            stateRef.current.scale,
            factor
          );
          setTransformation(newTransformation);
        }
      },
    }),
    [elemToAttachToRef, activeRef, stateRef, setTransformation]
  );

  return handlers;
}

type WheelEventHandler =
  | Handler<'wheel', React.WheelEvent<Element> | WheelEvent>
  | undefined;

interface IWheelHandler {
  onWheel: WheelEventHandler;
}
