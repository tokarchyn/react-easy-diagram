import {
  AnyHandlerEventTypes,
  EventTypes,
  GestureKey,
  NativeHandlers,
  UserHandlers,
  Vector2,
} from '@use-gesture/react';
import { Point } from 'utils/point';

/**
 * Check each element starting from the first one in composedPath() (see https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath),
 * if exceptClassName is the first class found -> return false,
 * if className is the first class found -> return true,
 * if neither exceptClassName nor className were found -> return false
 */
export const eventPathContainsClass = (
  event: PointerEvent | TouchEvent | MouseEvent | KeyboardEvent,
  className: string,
  exceptClassName?: string
) => {
  const typedEvent = event as Event;
  if ('composedPath' in typedEvent) {
    const targets = typedEvent.composedPath();
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      if ('classList' in target) {
        const classList = (target as Element).classList;
        if (exceptClassName && classList.contains(exceptClassName)) {
          return false;
        } else if (classList.contains(className)) {
          return true;
        }
      }
    }
  }

  return false;
};

/**
 * Does gesture can be potentially a tap/click event?
 * Drag gesture will be tap/click gesture on mouse or touch release only when the drag displacement is inferior to 3 pixels.
 * See useGestures documentation for more information.
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
  translateAndZoomInto: (
    translateBy: Point,
    pointToZoomInto: Point,
    changeZoomBy: number
  ) => any;
}

export type GestureHandlers = Partial<
  UserHandlers<EventTypes> & NativeHandlers<EventTypes>
>;

export declare type check<T extends AnyHandlerEventTypes, Key extends GestureKey> = undefined extends T[Key] ? EventTypes[Key] : T[Key];