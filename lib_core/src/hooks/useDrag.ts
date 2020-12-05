import React, { useCallback, useEffect, useState } from 'react';
import { Point } from '../types/common';
import {
  computeTransformationOnScale,
  generateTransform,
  ITransformation,
} from '../utils';

export interface IUseDragProps {
  elemToAttachTo: React.RefObject<HTMLElement>;
}

export enum DragType {
  mouse = 'mouse',
  touch = 'touch',
}

interface IActiveState {
  type: DragType;
  points: Point[];
}

interface IDragState {
  active?: IActiveState;
  transformation: ITransformation;
}

export const useDrag = (props: IUseDragProps) => {
  const [state, setState] = useState<IDragState>({
    transformation: {
      translate: { x: 0, y: 0 },
      scale: 1,
    },
  });

  const onWheel = useCallback(
    (e: WheelEvent) => {
      setState((state) => {
        if (props.elemToAttachTo.current) {
          const newTransformation = computeTransformationOnScale(
            props.elemToAttachTo.current,
            e,
            state.transformation.translate,
            state.transformation.scale
          );
          if (newTransformation) {
            return {
              ...state,
              transformation: newTransformation,
            };
          }
        }

        return state;
      });
    },
    [setState]
  );

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      setState((state) => createStateForStartDrag(e, state));
    },
    [setState]
  );

  const onTouchDown = useCallback(
    (e: TouchEvent) => {
      setState((state) => createStateForStartDrag(e, state));
    },
    [setState]
  );

  const onBodyMouseMove = useCallback(
    (e: MouseEvent) => {
      setState((state) => {
        if (state.active) {
          return createStateForDrag(e, state);
        } else return state;
      });
    },
    [setState]
  );

  const onBodyMouseUp = useCallback(
    (e: MouseEvent) => {
      setState((state) => setActiveFalse(state));
    },
    [setState]
  );

  const onBodyTouchMove = useCallback(
    (e: TouchEvent) => {
      setState((state) => {
        if (state.active) {
          return createStateForDrag(e, state);
        } else return state;
      });
    },
    [setState]
  );

  const onBodyTouchUp = useCallback(
    (e: TouchEvent) => {
      setState((state) => setActiveFalse(state));
    },
    [setState]
  );

  useEffect(() => {
    const elem = props.elemToAttachTo.current;
    if (!elem) {
      return;
    }

    elem.addEventListener('wheel', onWheel, { passive: false, capture: true });
    elem.addEventListener('mousedown', onMouseDown, { capture: true });
    elem.addEventListener('touchstart', onTouchDown, {
      passive: false,
      capture: true,
    });

    return () => {
      elem.removeEventListener('wheel', onWheel, { capture: true });
      elem.removeEventListener('mousedown', onMouseDown, { capture: true });
      elem.removeEventListener('touchstart', onTouchDown, { capture: true });
    };
  }, [props.elemToAttachTo.current]);

  useEffect(() => {
    if (!state.active) {
      return;
    }
    const body = props.elemToAttachTo.current?.ownerDocument?.body;
    if (!body) {
      return;
    }

    if (state.active.type === DragType.mouse) {
      body.addEventListener('mousemove', onBodyMouseMove);
      body.addEventListener('mouseup', onBodyMouseUp);

      return () => {
        body.removeEventListener('mousemove', onBodyMouseMove);
        body.removeEventListener('mouseup', onBodyMouseUp);
      };
    } else if (state.active.type === DragType.touch) {
      body.addEventListener('touchmove', onBodyTouchMove);
      body.addEventListener('touchend', onBodyTouchUp);

      return () => {
        body.removeEventListener('touchmove', onBodyTouchMove);
        body.removeEventListener('touchend', onBodyTouchUp);
      };
    }
  }, [state.active]);

  useEffect(() => {
    if (!state.active) {
      return;
    }
    const body = props.elemToAttachTo.current?.ownerDocument?.body;
    if (!body) {
      return;
    }

    body.classList.add('react_fast_diagram_disabled_user_select');

    return () => {
      body.classList.remove('react_fast_diagram_disabled_user_select');
    };
  }, [state.active]);

  const handlePinchMove = (e: TouchEvent) => {
    // e.preventDefault();
    // if (!props.elemToAttachTo.current){
    //   return;
    // }
    // const pointA = getPointFromTouch(e.touches[0], props.elemToAttachTo?.current);
    // const pointB = getPointFromTouch(e.touches[1], props.elemToAttachTo?.current);
    // const distance = getDistanceBetweenPoints(pointA, pointB);
    // const midpoint = getMidpoint(pointA, pointB);
    // const scale = between(MIN_SCALE - ADDITIONAL_LIMIT, MAX_SCALE + ADDITIONAL_LIMIT, this.state.scale * (distance / this.lastDistance));
    // this.zoom(scale, midpoint);
    // this.lastMidpoint = midpoint;
    // this.lastDistance = distance;
  };

  return generateTransform(
    state.transformation.translate,
    state.transformation.scale
  );
};

function setActiveFalse(state: IDragState) {
  return {
    ...state,
    active: undefined,
  };
}

function getEventPoints(e: TouchEvent | MouseEvent): Point[] {
  const touchPoints: Point[] = [];

  if ('touches' in e) {
    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i];
      touchPoints.push({
        x: touch.clientX,
        y: touch.clientY,
      });
    }
  } else {
    touchPoints.push({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return touchPoints;
}

function createActiveState(
  type: DragType,
  e: TouchEvent | MouseEvent
): IActiveState {
  const newPoints = getEventPoints(e);
  return {
    type,
    points: newPoints,
  };
}

function getDeltaForSinglePoint(
  newPoints: Point[],
  lastPoints?: Point[]
): Point {
  return lastPoints
    ? {
        x: newPoints[0].x - lastPoints[0].x,
        y: newPoints[0].y - lastPoints[0].y,
      }
    : { x: 0, y: 0 };
}

function createTranslateState(state: IDragState, delta: Point): Point {
  return {
    x: state.transformation.translate.x + delta.x,
    y: state.transformation.translate.y + delta.y,
  };
}

function createStateForDrag(
  event: TouchEvent | MouseEvent,
  lastState: IDragState,
  getDelta: (
    points: Point[],
    lastPoints?: Point[]
  ) => Point = getDeltaForSinglePoint
) {
  const type = getEventType(event);
  const newActive = createActiveState(type, event);
  const delta = getDelta(newActive.points, lastState.active?.points);
  const newTranslate = createTranslateState(lastState, delta);

  return {
    transformation: {
      scale: lastState.transformation.scale,
      translate: newTranslate,
    },
    active: newActive,
  };
}

function getEventType(event: TouchEvent | MouseEvent) {
  return 'touches' in event ? DragType.touch : DragType.mouse;
}

function createStateForStartDrag(
  event: TouchEvent | MouseEvent,
  lastState: IDragState
) {
  const type = getEventType(event);
  const newActive = createActiveState(type, event);

  return {
    ...lastState,
    active: newActive,
  };
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const SETTLE_RANGE = 0.001;
const ADDITIONAL_LIMIT = 0.2;
const DOUBLE_TAP_THRESHOLD = 300;
const ANIMATION_SPEED = 0.04;
const RESET_ANIMATION_SPEED = 0.08;
const INITIAL_X = 0;
const INITIAL_Y = 0;
const INITIAL_SCALE = 1;

const settle = (val: number, target: number, range: number) => {
  const lowerRange = val > target - range && val < target;
  const upperRange = val < target + range && val > target;
  return lowerRange || upperRange ? target : val;
};

const inverse = (x: number) => x * -1;

const getPointFromTouch = (touch: Touch, element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return {
    x: touch.clientX - rect.left,
    y: touch.clientY - rect.top,
  };
};

const getMidpoint = (pointA: Point, pointB: Point) => ({
  x: (pointA.x + pointB.x) / 2,
  y: (pointA.y + pointB.y) / 2,
});

const getDistanceBetweenPoints = (pointA: Point, pointB: Point) =>
  Math.sqrt(
    Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2)
  );

const between = (min: number, max: number, value: number) =>
  Math.min(max, Math.max(min, value));
