import isEqual from 'lodash.isequal';
import { useEffect } from 'react';
import { Handler } from 'react-use-gesture/dist/types';
import { Point } from '../../types/common';
import { ITransformation } from '../../utils';

type dragEventHandler =
  | Handler<'drag', React.PointerEvent<Element> | PointerEvent>
  | undefined;

export function dragHandlers(
  activeRef: React.MutableRefObject<boolean>,
  stateRef: React.MutableRefObject<Point | ITransformation>,
  parentScaleGetter?: () => number,
  cancel?: (event: React.PointerEvent<Element> | PointerEvent) => boolean
): {
  onDrag: dragEventHandler;
  onDragStart: dragEventHandler;
  onDragEnd: dragEventHandler;
} {
  return {
    onDrag: ({ pinching, delta }) => {
      if (!activeRef.current || pinching) {
        return;
      }

      const parentScale = parentScaleGetter ? parentScaleGetter() : 1;
      if ('scale' in stateRef.current) {
        stateRef.current = {
          scale: stateRef.current.scale,
          position: {
            x: stateRef.current.position.x + delta[0] / parentScale,
            y: stateRef.current.position.y + delta[1] / parentScale,
          },
        };
      } else {
        stateRef.current = {
          x: stateRef.current.x + delta[0] / parentScale,
          y: stateRef.current.y + delta[1] / parentScale,
        };
      }
    },
    onDragStart: ({ event }) => {
      if (cancel && cancel(event)) {
        return;
      }
      activeRef.current = true;
    },
    onDragEnd: () => (activeRef.current = false),
  };
}

// Update internal position if element position was changed programmatically
export function useInternalPositionUpdating(
  active: boolean,
  positionStateRef: React.MutableRefObject<Point>,
  externalPosition: Point
) {
  useEffect(() => {
    if (!active) {
      if (!isEqual(positionStateRef.current, externalPosition)) {
        positionStateRef.current = externalPosition;
      }
    }
  }, [active, positionStateRef, externalPosition]);
}

export function useTransformationStateUpdating(
  active: boolean,
  transformationStateRef: React.MutableRefObject<ITransformation>,
  externalScale: number,
  externalPosition: Point
) {
  useEffect(() => {
    if (!active) {
      if (
        transformationStateRef.current.scale !== externalScale ||
        !isEqual(transformationStateRef.current.position, externalPosition)
      ) {
        console.log(transformationStateRef.current)
        console.log(externalScale)
        console.log(externalPosition)
        console.log('-----------------------');
        transformationStateRef.current = {
          scale: externalScale,
          position: externalPosition,
        };
      }
    }
  }, [active, transformationStateRef, externalScale, externalPosition]);
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
