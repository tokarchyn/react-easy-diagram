import { useEffect } from 'react';
import { Point } from '../../types/common';
import {
  arePointsEqual,
  areTranformationsEqual,
  ITransformation,
} from '../../utils';

// Update internal position if element position was changed programmatically
export function usePositionSync(
  active: boolean,
  positionStateRef: React.MutableRefObject<Point>,
  externalPosition: Point,
  setExternalPosition: (
    setter: (currentPosition: Point) => Point
  ) => void
) {
  useEffect(() => {
    if (!active) {
      if (!arePointsEqual(positionStateRef.current, externalPosition)) {
        positionStateRef.current = externalPosition;
      }
    }
    else {
      setExternalPosition(currentPosition => {
        if (!arePointsEqual(positionStateRef.current, currentPosition)) {
          return positionStateRef.current;
        }
        else {
          return currentPosition;
        }
      })
    }
  }, [active, positionStateRef, positionStateRef.current, externalPosition, setExternalPosition]);
}

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

export const DISABLED_USER_SELECT_CSS_CLASS =
  'react_fast_diagram_disabled_user_select';

export function useUserAbilityToSelectSwitcher(
  active: boolean,
  elementToSwitchUserSelectOn: HTMLElement | undefined
) {
  useEffect(() => {
    if (!active || !elementToSwitchUserSelectOn) {
      return;
    }

    if (
      elementToSwitchUserSelectOn.classList.contains(
        DISABLED_USER_SELECT_CSS_CLASS
      )
    ) {
      return;
    }

    elementToSwitchUserSelectOn.classList.add(DISABLED_USER_SELECT_CSS_CLASS);

    return () => {
      elementToSwitchUserSelectOn.classList.remove(
        DISABLED_USER_SELECT_CSS_CLASS
      );
    };
  }, [active, elementToSwitchUserSelectOn]);
}
