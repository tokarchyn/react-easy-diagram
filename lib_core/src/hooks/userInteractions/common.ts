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
