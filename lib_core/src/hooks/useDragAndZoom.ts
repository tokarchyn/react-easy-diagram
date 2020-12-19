import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useGesture } from 'react-use-gesture';
import { Vector2 } from 'react-use-gesture/dist/types';
import { Point } from '../types/common';
import {
  addPoints,
  computeTransformationOnScale,
  generateTransform,
  ITransformation,
} from '../utils';
import { useNotifyRef } from './useNotifyRef';

export const useDragAndZoom = (
  props: IUseDragAndZoomProps
): IUseDragAndZoomResult => {
  // useState instead of reference cause the situation, when multiple gesture callback invocations go before state actually updates,
  // so those invocations will rely on old state data.
  const state = useNotifyRef<ITransformation>({
    scale: props.initScale ?? 1,
    translate: props.initTranslate ?? { x: 0, y: 0 },
  });

  const pinchState = useRef<IPinchState>({
    distance: 0,
    origin: [0, 0],
  });

  // Should trigger rendering on change, otherwise useEffect will not be invoked
  const active = useNotifyRef(false);

  useGesture(
    {
      onDrag: ({ delta, pinching }) => {
        if (!active.current || pinching) {
          return;
        }
        const parentScale = props.parentScale ?? 1;

        state.current = {
          scale: state.current.scale,
          translate: {
            x: state.current.translate.x + delta[0] / parentScale,
            y: state.current.translate.y + delta[1] / parentScale,
          },
        };
      },
      onDragStart: ({ event }) => {
        const gestureStartInAppropriateElem =
          !props.listenOnlyClass ||
          eventTargetContainsClass(event.target, props.listenOnlyClass);

        if (gestureStartInAppropriateElem) {
          active.current = true;
        }
      },
      onDragEnd: () => (active.current = false),
      onPinch: ({ da: [distance], origin }) => {
        if (!active.current) {
          return;
        }

        const originDiff = {
          x: origin[0] - pinchState.current.origin[0],
          y: origin[1] - pinchState.current.origin[1],
        };

        const diff = distance - pinchState.current.distance;
        if (Math.abs(diff) > 1 && props.elemToAttachTo.current) {
          const elWidth =
            props.elemToAttachTo.current.clientWidth * state.current.scale;
          const targetElWidth = elWidth + diff;
          const factor = targetElWidth / elWidth;

          const scaleTransformation = computeTransformationOnScale(
            props.elemToAttachTo.current,
            { x: origin[0], y: origin[1] },
            state.current.translate,
            state.current.scale,
            factor
          );

          scaleTransformation.translate = addPoints(
            scaleTransformation.translate,
            originDiff
          );

          pinchState.current = {
            distance,
            origin,
          };

          state.current = scaleTransformation;
        } else {
          pinchState.current = {
            distance: pinchState.current.distance,
            origin,
          };
          state.current = {
            scale: state.current.scale,
            translate: addPoints(state.current.translate, originDiff),
          };
        }
      },
      onPinchStart: ({ da: [distance], origin }) => {
        pinchState.current = {
          distance,
          origin,
        };
        active.current = true;
      },
      onPinchEnd: () => (active.current = false),
      onWheel: ({
        direction: [_, yDirection],
        event: { clientX, clientY },
      }) => {
        if (props.elemToAttachTo.current) {
          let factor = 0.9;
          if (yDirection < 0) {
            factor = 1 / factor;
          }
          const newTransformation = computeTransformationOnScale(
            props.elemToAttachTo.current,
            { x: clientX, y: clientY },
            state.current.translate,
            state.current.scale,
            factor
          );
          state.current = newTransformation;
        }
      },
    },
    {
      domTarget: props.elemToAttachTo,
      eventOptions: { passive: false },
      pinch: { enabled: !!props.enableZoom },
      wheel: { enabled: !!props.enableZoom },
    }
  );

  useUserSelectSwitcher(
    active.current,
    props.elemToAttachTo.current?.ownerDocument?.body
  );

  return {
    transform: generateTransform(
      state.current.translate,
      props.enableZoom ? state.current.scale : undefined
    ),
    scale: state.current.scale,
    translate: state.current.translate,
  };
};

export interface IUseDragAndZoomProps {
  elemToAttachTo: React.RefObject<HTMLElement>;
  listenOnlyClass?: string;
  enableZoom?: boolean;
  parentScale?: number;
  initScale?: number;
  initTranslate?: Point;
}

export interface IUseDragAndZoomResult {
  transform: string;
  scale: number;
  translate: Point;
}

interface IPinchState {
  distance: number;
  origin: Vector2;
}

function eventTargetContainsClass(
  eventTarget: any,
  className: string
): boolean {
  if (eventTarget && 'classList' in eventTarget) {
    return eventTarget.classList.contains(className);
  } else return false;
}

function useUserSelectSwitcher(
  active: boolean,
  elementToSwitchUserSelectOn: HTMLElement | undefined
) {
  useEffect(() => {
    if (!active || !elementToSwitchUserSelectOn) {
      return;
    }

    elementToSwitchUserSelectOn.classList.add(
      'react_fast_diagram_disabled_user_select'
    );

    return () => {
      elementToSwitchUserSelectOn.classList.remove(
        'react_fast_diagram_disabled_user_select'
      );
    };
  }, [active, elementToSwitchUserSelectOn]);
}
