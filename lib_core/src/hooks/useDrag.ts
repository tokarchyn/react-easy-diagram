import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useGesture } from 'react-use-gesture';
import { Point } from '../types/common';
import {
  addPoints,
  computeTransformationOnScale,
  generateTransform,
  ITransformation,
} from '../utils';
import { useNotifyRef } from './useNotifyRef';

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

export const useDragAndZoom = (props: IUseDragProps) => {
  // useState instead of reference cause the situation, when multiple gesture callback invocations go before state actually updates,
  // so those invocations will rely on old state data.
  const state = useNotifyRef<ITransformation>({
    scale: 1,
    translate: { x: 0, y: 0 },
  });

  const pinchState = useRef({
    distance: 0,
    origin: [0, 0],
  });

  const bind = useGesture(
    {
      onDrag: ({ delta, pinching }) => {
        if (pinching) return;
        state.current = {
          scale: state.current.scale,
          translate: {
            x: state.current.translate.x + delta[0],
            y: state.current.translate.y + delta[1],
          },
        };
      },
      onPinch: ({ da: [distance], origin }) => {
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
      },
      onWheel: ({ offset: [, y], vxvy: [, vy], event }) => {
        if (props.elemToAttachTo.current) {
          let factor = 0.9;
          if (event.deltaY < 0) {
            factor = 1 / factor;
          }
          const newTransformation = computeTransformationOnScale(
            props.elemToAttachTo.current,
            { x: event.clientX, y: event.clientY },
            state.current.translate,
            state.current.scale,
            factor
          );
          state.current = newTransformation;
        }
      },
    },
    { domTarget: props.elemToAttachTo, eventOptions: {passive: false} }
  );

  return generateTransform(state.current.translate, state.current.scale);
};
