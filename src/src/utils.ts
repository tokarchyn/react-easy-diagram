import { Transformation } from "./DiagramState";

export const generateTransform = (diagramTransformation: Transformation): string => {
  const scalePart = `scale(${diagramTransformation.scale})`;
  const translatePart = `translate(${diagramTransformation.translation.x}px, ${diagramTransformation.translation.y}px)`;
  const transform = translatePart + " " + scalePart;
  return transform;
};

// See: https://stackoverflow.com/a/30039971/9142642
export const computeTransformationOnScale = (
  target: Element | null,
  e: React.WheelEvent<HTMLDivElement>,
  transformation: Transformation
): Transformation => {
  // The upper left corner of the target stays in the same place while the picture is enlarged
  const rect = target?.getBoundingClientRect();
  if (!rect) return transformation;

  // Get mouse position related to target
  let mouseXPos = e.pageX - rect.left;
  let mouseYPos = e.pageY - rect.top;

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
  let dx = (mouseXPos - transformation.translation.x) * (factor - 1);
  let dy = (mouseYPos - transformation.translation.y) * (factor - 1);

  return {
    ...transformation,
    scale: transformation.scale * factor,
    translation: {
      // Compensate for the displacement by moving the point back under the cursor
      x: transformation.translation.x - dx,
      y: transformation.translation.y - dy,
    },
  };
};