export type Direction = 'left' | 'right' | 'up' | 'down';
export type DirectionWithDiagonals =
  | Direction
  | 'left-down'
  | 'left-up'
  | 'right-down'
  | 'right-up';

export const positionValues = <const>['left', 'top', 'right', 'bottom'];
export type Position = typeof positionValues[number];

export type CornerPosition =
  | 'left-top'
  | 'right-top'
  | 'right-bottom'
  | 'left-bottom';
