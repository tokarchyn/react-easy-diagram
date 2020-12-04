import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { MutableSnapshot, useRecoilCallback, useRecoilState } from 'recoil';
import {
  diagramScaleState,
  diagramTranslateState,
  draggableState,
  Point,
} from '../DiagramState';
import { DraggableCore, DraggableData, DraggableEvent } from 'react-draggable';
import { computeTransformationOnScale, generateTransform } from '../utils';
import '../Diagram.css';


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

const getDistanceBetweenPoints = (pointA: Point, pointB: Point) => (
  Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2))
);

const between = (min: number, max: number, value: number) => Math.min(max, Math.max(min, value));

export interface IUseDragProps {
  elemToAttachTo: React.RefObject<HTMLElement>;
}

export const useDrag = (props: IUseDragProps) => {
  const [translate, setTranslate] = useState<Point>({x: 0, y: 0});
  const [scale, setScale] = useState(1);
  const [draggable, setDraggable] = useRecoilState(draggableState);

  const onMouseDown = () => {

  };

  const onWheel = (e: WheelEvent) => {
    const transformation = computeTransformationOnScale(
      props.elemToAttachTo.current,
      e,
      translate,
      scale
    );
    if (transformation) {
      setTranslate(transformation.translate);
      setScale(transformation.scale);
    }
  };

  useEffect(() => {
    const elem = props.elemToAttachTo.current
    if (!elem) { return; }

    elem.addEventListener('wheel', onWheel)

    return () => {
      elem.removeEventListener('wheel', onWheel)
    }
  }, [props.elemToAttachTo.current])

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
  }

  const onDrag = (e: DraggableEvent, d: DraggableData) => {
    // console.log(e);
    if ('touches' in e) {
      const touchEvent = e as  TouchEvent;
      if (touchEvent.touches.length === 2) {

      }
    }
    setTranslate((current) => ({
      x: current.x + d.deltaX,
      y: current.y + d.deltaY,
    }));
  };

  

  return true;
}
