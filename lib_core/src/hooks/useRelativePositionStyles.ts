import React, { useMemo } from 'react';
import { isNumber } from 'utils/common';
import { isPoint, Point } from 'utils/point';

export const useRelativePositionStyles = (
  position?: PortPosition,
  offsetFromParentCenter?: number,
  offsetFromOrigin?: Point,
  usePortCenterPivot: boolean = true
): RelativePositionStyles => {
  return useMemo(() => {
    if (!position) return {};
    
    const positionStyle: RelativePositionStyles = { position: 'absolute' };

    if (!isNumber(offsetFromParentCenter)) offsetFromParentCenter = 0;
    if (!isPoint(offsetFromOrigin)) offsetFromOrigin = [0, 0];

    if (position === 'left-top') {
      positionStyle.left = offsetFromOrigin[0] - offsetFromParentCenter;
      positionStyle.top = offsetFromOrigin[1];
      if (usePortCenterPivot) positionStyle.transform = `translateX(-50%)`;
    } else if (position === 'left-center') {
      positionStyle.left = offsetFromOrigin[0] - offsetFromParentCenter;
      positionStyle.top = '50%';
      positionStyle.transform = `translate(${
        usePortCenterPivot ? '-50%' : 0
      }, calc(-50% + ${offsetFromOrigin[1]}px))`;
    } else if (position === 'left-bottom') {
      positionStyle.left = offsetFromOrigin[0] - offsetFromParentCenter;
      positionStyle.bottom = -offsetFromOrigin[1];
      if (usePortCenterPivot) positionStyle.transform = `translateX(-50%)`;
    }

    if (position === 'top-left') {
      positionStyle.left = offsetFromOrigin[0];
      positionStyle.top = offsetFromOrigin[1] - offsetFromParentCenter;
      if (usePortCenterPivot) positionStyle.transform = `translateY(-50%)`;
    } else if (position === 'top-center') {
      positionStyle.left = '50%';
      positionStyle.transform = `translate(calc(-50% + ${
        offsetFromOrigin[0]
      }px), ${usePortCenterPivot ? '-50%' : 0})`;
      positionStyle.top = offsetFromOrigin[1] - offsetFromParentCenter;
    } else if (position === 'top-right') {
      positionStyle.right = -offsetFromOrigin[0];
      positionStyle.top = offsetFromOrigin[1] - offsetFromParentCenter;
      if (usePortCenterPivot) positionStyle.transform = `translateY(-50%)`;
    }

    if (position === 'right-top') {
      positionStyle.right = -offsetFromOrigin[0] - offsetFromParentCenter;
      positionStyle.top = offsetFromOrigin[1];
      if (usePortCenterPivot) positionStyle.transform = `translateX(50%)`;
    } else if (position === 'right-center') {
      positionStyle.right = -offsetFromOrigin[0] - offsetFromParentCenter;
      positionStyle.top = '50%';
      positionStyle.transform = `translate(${
        usePortCenterPivot ? '50%' : 0
      }, calc(-50% + ${offsetFromOrigin[1]}px))`;
    } else if (position === 'right-bottom') {
      positionStyle.right = -offsetFromOrigin[0] - offsetFromParentCenter;
      positionStyle.bottom = -offsetFromOrigin[1];
      if (usePortCenterPivot) positionStyle.transform = `translateX(50%)`;
    }

    if (position === 'bottom-left') {
      positionStyle.left = offsetFromOrigin[0];
      positionStyle.bottom = -offsetFromOrigin[1] - offsetFromParentCenter;
      if (usePortCenterPivot) positionStyle.transform = `translateY(50%)`;
    } else if (position === 'bottom-center') {
      positionStyle.left = '50%';
      positionStyle.transform = `translate(calc(-50% + ${
        offsetFromOrigin[0]
      }px), ${usePortCenterPivot ? '50%' : 0})`;
      positionStyle.bottom = -offsetFromOrigin[1] - offsetFromParentCenter;
    } else if (position === 'bottom-right') {
      positionStyle.right = -offsetFromOrigin[0];
      positionStyle.bottom = -offsetFromOrigin[1] - offsetFromParentCenter;
      if (usePortCenterPivot) positionStyle.transform = `translateY(50%)`;
    }

    if (position === 'diagonal-left-top') {
      positionStyle.left = offsetFromOrigin[0] - offsetFromParentCenter;
      positionStyle.top = offsetFromOrigin[1] - offsetFromParentCenter;
      if (usePortCenterPivot) positionStyle.transform = `translate(-50%, -50%)`;
    } else if (position === 'diagonal-right-top') {
      positionStyle.right = -offsetFromOrigin[0] - offsetFromParentCenter;
      positionStyle.top = offsetFromOrigin[1] - offsetFromParentCenter;
      if (usePortCenterPivot) positionStyle.transform = `translate(50%, -50%)`;
    } else if (position === 'diagonal-right-bottom') {
      positionStyle.right = -offsetFromOrigin[0] - offsetFromParentCenter;
      positionStyle.bottom = -offsetFromOrigin[1] - offsetFromParentCenter;
      if (usePortCenterPivot) positionStyle.transform = `translate(50%, 50%)`;
    } else if (position === 'diagonal-left-bottom') {
      positionStyle.left = offsetFromOrigin[0] - offsetFromParentCenter;
      positionStyle.bottom = -offsetFromOrigin[1] - offsetFromParentCenter;
      if (usePortCenterPivot) positionStyle.transform = `translate(-50%, 50%)`;
    }

    return positionStyle;
  }, [position, offsetFromParentCenter, offsetFromOrigin, usePortCenterPivot]);
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

export const portPositionValues = <const>[
  'left-top',
  'left-center',
  'left-bottom',

  'top-left',
  'top-center',
  'top-right',

  'right-top',
  'right-center',
  'right-bottom',

  'bottom-left',
  'bottom-center',
  'bottom-right',

  'diagonal-left-top',
  'diagonal-right-top',
  'diagonal-right-bottom',
  'diagonal-left-bottom',
];
export type PortPosition = typeof portPositionValues[number];
