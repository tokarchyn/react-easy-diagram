import { Point } from './types/common';

export const generateTransform = (translate: Point, scale?: number): string => {
  const translatePart = `translate(${translate[0]}px, ${translate[1]}px)`;
  if (scale) {
    const scalePart = `scale(${scale})`;
    return translatePart + ' ' + scalePart;
  } else {
    return translatePart;
  }
};

const MIN_SCALE = 0.1;
const MAX_SCALE = 3;

// See: https://stackoverflow.com/a/30039971/9142642
export const computeTransformationOnScale = (
  target: Element,
  midpoint: Point,
  translate: Point,
  scale: number,
  factor: number
): ITransformation => {
  factor = clampFactorForTransformation(factor, scale);

  // The upper left corner of the target stays in the same place while the picture is enlarged
  const rect = target.getBoundingClientRect();

  // Get mouse position related to target
  const mouseXPos = midpoint[0] - rect.left;
  const mouseYPos = midpoint[1] - rect.top;

  // Now consider the point under the mouse cursor. Every pixel above and to the
  // left of the cursor has become *factor* larger. This displaces the point under the
  // cursor by *factor* downward and to the right. Meanwhile, the cursor is in the same position.
  // Note that the target might have been moved in the canvas before the zooming operation, so the
  // cursor's horizontal position in the target is mouseXPos - transformation.translation.x before zooming,
  // and likewise for the vertical position.
  const dx = (mouseXPos - translate[0]) * (factor - 1);
  const dy = (mouseYPos - translate[1]) * (factor - 1);

  return {
    scale: clampValue(scale * factor, MIN_SCALE, MAX_SCALE),
    position: [
      // Compensate for the displacement by moving the point back under the cursor
      translate[0] - dx,
      translate[1] - dy,
    ],
  };
};

export interface ITransformation {
  scale: number;
  position: Point;
}

function clampFactorForTransformation(factor: number, currentScale: number) {
  if (currentScale * factor < MIN_SCALE) {
    return MIN_SCALE / currentScale;
  } else if (currentScale * factor > MAX_SCALE) {
    return MAX_SCALE / currentScale;
  } else return factor;
}

export const distanceBetweenPoints = (a: Point, b: Point) : number => (
  Math.sqrt(Math.pow((a[0] - b[0]), 2) + Math.pow((a[1] - b[1]), 2))
)

export const roundPoint = (point: Point) =>  ([
  Math.round(point[0]),
  Math.round(point[1]),
] as Point);

export const addPoints = (a: Point, b: Point): Point => ([
  a[0] + b[0],
  a[1] + b[1],
]);

export const subtractPoints = (a: Point, b: Point): Point => ([
  a[0] - b[0],
  a[1] - b[1],
]);

export const multiplyPoint = (a: Point, m: number): Point => ([
  a[0] * m,
  a[1] * m,
]);

export const arePointsEqual = (a: Point, b: Point): boolean =>
  a === b || (a && b && a[0] === b[0] && a[1] === b[1]);

export const areTranformationsEqual = (
  a: ITransformation,
  b: ITransformation
): boolean =>
  a === b ||
  (a && b && a.scale === b.scale && arePointsEqual(a.position, b.position));

export function clampValue(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
