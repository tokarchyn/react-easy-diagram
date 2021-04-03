import React from 'react';
import {
  Point,
  RelativeXYPosition,
  splitRelativeXYPostionByAxis,
} from '../types';

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
  const offsetFromCenter = [
    positionX === 'center' ? 0 : -offsetFromParentCenter,
    positionY === 'center' ? 0 : -offsetFromParentCenter,
  ];

  const positionStyle: RelativePositionStyles = { position: 'absolute' };

  if (position === 'left-top') {
    positionStyle.left = offsetFromCenter[0] + offsetFromOrigin[0];
    positionStyle.top = offsetFromCenter[1] + offsetFromOrigin[1];
  } else if (position === 'left-center') {
    positionStyle.left = offsetFromCenter[0] + offsetFromOrigin[0];
    positionStyle.top = '50%';
    positionStyle.transform = `translateY(calc(-50% + ${offsetFromOrigin[1]}px))`;
  } else if (position === 'left-bottom') {
    positionStyle.left = offsetFromCenter[0] + offsetFromOrigin[0];
    positionStyle.bottom = offsetFromCenter[1] + offsetFromOrigin[1];
  } else if (position === 'center-top') {
    positionStyle.left = '50%';
    positionStyle.transform = `translateX(calc(-50% + ${offsetFromOrigin[0]}px))`;
    positionStyle.top = offsetFromCenter[1] + offsetFromOrigin[1];
  } else if (position === 'center-bottom') {
    positionStyle.left = '50%';
    positionStyle.transform = `translateX(calc(-50% + ${offsetFromOrigin[0]}px))`;
    positionStyle.bottom = offsetFromCenter[1] - offsetFromOrigin[1];
  } else if (position === 'right-top') {
    positionStyle.right = offsetFromCenter[0] - offsetFromOrigin[0];
    positionStyle.top = offsetFromCenter[1] + offsetFromOrigin[1];
  } else if (position === 'right-center') {
    positionStyle.right = offsetFromCenter[0] - offsetFromOrigin[0];
    positionStyle.top = '50%';
    positionStyle.transform = `translateY(calc(-50% + ${offsetFromOrigin[1]}px))`;
  } else if (position === 'right-bottom') {
    positionStyle.right = offsetFromCenter[0] - offsetFromOrigin[0];
    positionStyle.bottom = offsetFromCenter[1] - offsetFromOrigin[1];
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
