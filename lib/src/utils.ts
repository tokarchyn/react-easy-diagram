import { Point } from "./DiagramState";

export const generateTransform = (translate: Point, scale: number): string => {
  const scalePart = `scale(${scale})`;
  const translatePart = `translate(${translate.x}px, ${translate.y}px)`;
  const transform = translatePart + " " + scalePart;
  return transform;
};

// See: https://stackoverflow.com/a/30039971/9142642
export const computeTransformationOnScale = (
  target: Element | null,
  e: React.WheelEvent<HTMLDivElement>,
  translate: Point,
  scale: number
): { scale: number; translate: Point } | null => {
  // The upper left corner of the target stays in the same place while the picture is enlarged
  const rect = target?.getBoundingClientRect();
  if (!rect) return null;

  // Get mouse position related to target
  const mouseXPos = e.pageX - rect.left;
  const mouseYPos = e.pageY - rect.top;

  let factor = 0.9;
  if (e.deltaY < 0) {
    factor = 1 / factor;
  }

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
