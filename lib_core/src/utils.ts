import { Point } from './types/common';

export const generateTransform = (translate: Point, scale?: number): string => {
  const translatePart = `translate(${translate.x}px, ${translate.y}px)`;
  if (scale) {
    const scalePart = `scale(${scale})`;
    return translatePart + ' ' + scalePart;
  } else {
    return translatePart;
  }
};

const MIN_SCALE = 0.1;
const MAX_SCALE = 2;

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
  const mouseXPos = midpoint.x - rect.left;
  const mouseYPos = midpoint.y - rect.top;

  // Now consider the point under the mouse cursor. Every pixel above and to the
  // left of the cursor has become *factor* larger. This displaces the point under the
  // cursor by *factor* downward and to the right. Meanwhile, the cursor is in the same position.
  // Note that the target might have been moved in the canvas before the zooming operation, so the
  // cursor's horizontal position in the target is mouseXPos - transformation.translation.x before zooming,
  // and likewise for the vertical position.
  const dx = (mouseXPos - translate.x) * (factor - 1);
  const dy = (mouseYPos - translate.y) * (factor - 1);

  return {
    scale: clampValue(scale * factor, MIN_SCALE, MAX_SCALE),
    position: {
      // Compensate for the displacement by moving the point back under the cursor
      x: translate.x - dx,
      y: translate.y - dy,
    },
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

export const roundPoint = (point: Point) => ({
  x: Math.round(point.x),
  y: Math.round(point.y),
});

export const addPoints = (a: Point, b: Point): Point => ({
  x: a.x + b.x,
  y: a.y + b.y,
});

export const subtractPoints = (a: Point, b: Point): Point => ({
  x: a.x - b.x,
  y: a.y - b.y,
});

export const multiplyPoint = (a: Point, m: number): Point => ({
  x: a.x * m,
  y: a.y * m,
});

export const arePointsEqual = (a: Point, b: Point): boolean =>
  a === b || (a && b && a.x === b.x && a.y === b.y);

export const areTranformationsEqual = (
  a: ITransformation,
  b: ITransformation
): boolean =>
  a === b ||
  (a && b && a.scale === b.scale && arePointsEqual(a.position, b.position));

export function clampValue(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
