export type Direction = 'left' | 'right' | 'up' | 'down';
export type DirectionWithDiagonals = Direction | 'left-down' | 'left-up' | 'right-down' | 'right-up';

export const positionValues = <const>['left', 'top', 'right', 'bottom'];
export type Position = typeof positionValues[number];

export type RelativeXPosition = 'left' | 'center' | 'right';
export type RelativeYPosition = 'top' | 'center' | 'bottom';
export const relativeXYPositionValues = <const>[
  'center-center',
  'center-bottom',
  'center-top',
  'left-center',
  'left-bottom',
  'left-top',
  'right-center',
  'right-bottom',
  'right-top',
];
export type RelativeXYPosition = typeof relativeXYPositionValues[number];
export function splitRelativeXYPostionByAxis(
  position: RelativeXYPosition
): [RelativeXPosition, RelativeYPosition] {
  return position.split('-') as [RelativeXPosition, RelativeYPosition];
}

export type CornerPosition =
  | 'left-top'
  | 'right-top'
  | 'right-bottom'
  | 'left-bottom';