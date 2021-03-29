import React from 'react';
import { Point, RelativePosition } from '../types';

export const useRelativePositionStyles = (
  position: RelativePosition,
  offsetFromOrigin?: number | Point,
  stretchToParent?: boolean
): RelativePositionStyles => {
  const positionStyle: RelativePositionStyles = {
    position: 'absolute',
    left: position === 'left' ? 0 : undefined,
    top:
      position === 'left' || position === 'right' || position === 'top'
        ? 0
        : undefined,
    right: position === 'right' ? 0 : undefined,
    bottom: position === 'bottom' ? 0 : undefined,
  };

  if (stretchToParent) {
    positionStyle.height = position === 'left' || position === 'right' ? '100%' : undefined;
    positionStyle.width = position === 'top' || position === 'bottom' ? '100%' : undefined;
  }

  if (offsetFromOrigin) {
    if (
      typeof offsetFromOrigin === 'number' &&
      Object.values(RelativePosition).includes(position)
    ) {
      positionStyle[position] = -offsetFromOrigin;
    } else if (Array.isArray(offsetFromOrigin)) {
      throw 'Not implemented';
    }
  }

  return positionStyle;
};

type RelativePositionStyles = Pick<
  Partial<React.CSSProperties>,
  'position' | 'left' | 'top' | 'right' | 'bottom' | 'width' | 'height'
>;
