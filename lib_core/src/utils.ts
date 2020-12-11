import { Point } from "./types/common";

export const generateTransform = (translate: Point, scale?: number): string => {
  const translatePart = `translate(${translate.x}px, ${translate.y}px)`;
  if (scale) {
    const scalePart = `scale(${scale})`;
    return translatePart + ' ' + scalePart;
  }
  else {
    return translatePart;
  }
};

export interface ITransformation { 
  scale: number; 
  translate: Point 
}

// See: https://stackoverflow.com/a/30039971/9142642
export const computeTransformationOnScale = (
  target: Element,
  midpoint: Point,
  translate: Point,
  scale: number,
  factor: number
): ITransformation => {
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
    scale: scale * factor,
    translate: {
      // Compensate for the displacement by moving the point back under the cursor
      x: translate.x - dx,
      y: translate.y - dy,
    },
  };
};

export const roundPoint = (point: Point) => ({
  x: Math.round(point.x),
  y: Math.round(point.y),
})

export const addPoints = (a: Point, b: Point) : Point => ({
  x: a.x + b.x,
  y: a.y + b.y
})

export const subtractPoints = (a: Point, b: Point) : Point => ({
  x: a.x - b.x,
  y: a.y - b.y
})

export const multiplyPoint = (a: Point, m: number) : Point => ({
  x: a.x * m,
  y: a.y * m
})