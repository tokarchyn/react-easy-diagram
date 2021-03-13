import { EventTypes, NativeHandlers, UserHandlers, Vector2 } from 'react-use-gesture/dist/types';
import { Point } from '../../types/common';

export const eventPathContainsClass = (
  event: PointerEvent | React.PointerEvent<Element>,
  className: string
) => {
  const typedEvent = event as Event;
  if ('composedPath' in typedEvent) {
    const targets = typedEvent.composedPath();
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      if ('classList' in target) {
        if ((target as Element).classList.contains(className)) {
          return true;
        }
      }
    }
  }

  return false;
};

export function allTouchTargetsContainsClass(
  event: TouchEvent | React.TouchEvent<Element>,
  listenOnlyClass: string | undefined,
  ignoreClass: string | undefined
): boolean {
  for (let i = 0; i < event.touches.length; i++) {
    if (
      !eventTargetContainsClass(
        event.touches[i].target,
        listenOnlyClass,
        ignoreClass
      )
    ) {
      return false;
    }
  }

  return true;
}

export function eventTargetContainsClass(
  eventTarget: EventTarget | null,
  listenOnlyClass: string | undefined,
  ignoreClass: string | undefined
): boolean {
  if (eventTarget && 'classList' in eventTarget) {
    const targetElement = eventTarget as Element;
    return (
      (!listenOnlyClass || targetElement.classList.contains(listenOnlyClass)) &&
      (!ignoreClass || !targetElement.classList.contains(ignoreClass))
    );
  } else return false;
}

/**
 * Does gesture can be potentially a tap/click event?
 * Drag gesture will be tap/click gesture on mouse or touch release only when the drag displacement is inferior to 3 pixels.
 * See useGestures documetation for more information.
 * @param movement - state value of gesture, represent gesture offset
 */
export function canDragGestureBeTapInstead(movement: Vector2): boolean {
  return Math.max(Math.abs(movement[0]), Math.abs(movement[1])) < 3;
}

export interface IUserInteractionTranslate {
  offset: Point;
  setOffset: (newOffset: Point) => any;
}

export interface IUserInteractionTranslateAndZoom {
  offset: Point;
  zoom: number;
  tranlsateAndZoomInto: (
    translateBy: Point,
    pointToZoomInto: Point,
    changeZoomBy: number
  ) => any;
}

export type GestureHandlers = Partial<UserHandlers<EventTypes> & NativeHandlers<EventTypes>>