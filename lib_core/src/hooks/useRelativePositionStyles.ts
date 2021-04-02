import React from 'react';
import {
  Point,
  RelativeXYPosition,
  splitRelativeXYPostionByAxis,
} from '../types';
import { addPoints } from '../utils';

export type PortPosition = Exclude<RelativeXYPosition, 'center-center'>;

export const useRelativePositionStyles = (
  position?: PortPosition,
  offsetFromParentCenter: number = 0,
  offsetFromOrigin: Point = [0, 0]
): RelativePositionStyles => {
  if (!position) return {};

  const [positionX, positionY] = splitRelativeXYPostionByAxis(
    position as RelativeXYPosition
  );
  const offset = addPoints(offsetFromOrigin, [
    positionX === 'center' ? 0 : -offsetFromParentCenter,
    positionY === 'center' ? 0 : -offsetFromParentCenter,
  ]);

  const positionStyle: RelativePositionStyles = { position: 'absolute' };

  if (position === 'left-top') {
    positionStyle.left = offset[0];
    positionStyle.top = offset[1];
  } else if (position === 'left-center') {
    positionStyle.left = offset[0];
    positionStyle.top = '50%';
    positionStyle.transform = `translateY(calc(-50% + ${offset[1]}px))`;
  } else if (position === 'left-bottom') {
    positionStyle.left =offset[0];
    positionStyle.bottom = offset[1];
  } else if (position === 'center-top') {
    positionStyle.left = '50%';
    positionStyle.transform = `translateX(calc(-50% + ${offset[0]}px))`;
    positionStyle.top = offset[1];
  } else if (position === 'center-bottom') {
    positionStyle.left = '50%';
    positionStyle.transform = `translateX(calc(-50% + ${offset[0]}px))`;
    positionStyle.bottom = offset[1];
  } else if (position === 'right-top') {
    positionStyle.right = offset[0];
    positionStyle.top = offset[1];
  } else if (position === 'right-center') {
    positionStyle.right = offset[0];
    positionStyle.top = '50%';
    positionStyle.transform = `translateY(calc(-50% + ${offset[1]}px))`;
  } else if (position === 'right-bottom') {
    positionStyle.right = offset[0];
    positionStyle.bottom = offset[1];
  }

  return positionStyle;
};

type RelativePositionStyles = Pick<
  Partial<React.CSSProperties>,
  | 'position'
  | 'left'
  | 'top'
  | 'right'
  | 'bottom'
  | 'width'
  | 'height'
  | 'transform'
>;
