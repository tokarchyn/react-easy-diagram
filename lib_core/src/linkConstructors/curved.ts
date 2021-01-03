import { ILinkPathConstructor } from '../states/linksSettingsState';
import { Point } from '../types/common';
import { roundPoint } from '../utils';

function curvedLinkPathConstructorInner(
  source: Point,
  target: Point,
  settings: ICurvedLinkPathConstructorSettings
): string {
  const path = generateCurvePath(source, target);

  return path;
}

export interface ICurvedLinkPathConstructorSettings {}

const defualtSettings: ICurvedLinkPathConstructorSettings = {};

export function createCurvedLinkPathConstructor(
  settings?: ICurvedLinkPathConstructorSettings
): ILinkPathConstructor {
  return (source: Point, target: Point) =>
    curvedLinkPathConstructorInner(
      source,
      target,
      settings ? { ...defualtSettings, ...settings } : defualtSettings
    );
}

const CURVE_FACTOR = 60;

/**
 * Calculates the offset accordingly to the alignment
 */
// const getXOffset = (alignment) => {
//   if (!alignment || (alignment !== 'left' && alignment !== 'right')) return 0;
//   return alignment === 'left' ? -CURVE_FACTOR : CURVE_FACTOR;
// };
// const getYOffset = (alignment) => {
//   if (!alignment || (alignment !== 'top' && alignment !== 'bottom')) return 0;
//   return alignment === 'top' ? CURVE_FACTOR : -CURVE_FACTOR;
// };

/**
 * Given a source point and an output point produces the SVG path between them
 */
const generateCurvePath = (startPoint: Point, endPoint: Point) => {
  if (!startPoint || !endPoint) return '';
  const roundedStart = roundPoint(startPoint);
  const roundedEnd = roundPoint(endPoint);

  const start = `${roundedStart[0]}, ${roundedStart[1]}`;
  const end = `${roundedEnd[0]}, ${roundedEnd[1]}`;

  // if (options.type === 'bezier' && (options.inputAlignment || options.outputAlignment)) {
  //   let startControl = end;
  //   let endControl = start;

  //   if (options.inputAlignment) {
  //     const offsetX = roundedStart.x + getXOffset(options.inputAlignment);
  //     const offsetY = roundedStart.y + getYOffset(options.inputAlignment);
  //     endControl = `${offsetX}, ${offsetY}`;
  //   }

  //   if (options.outputAlignment) {
  //     const offsetX = roundedEnd.x + getXOffset(options.outputAlignment);
  //     const offsetY = roundedEnd.y + getYOffset(options.outputAlignment);
  //     startControl = `${offsetX}, ${offsetY}`;
  //   }

  //   return `M ${start} C ${endControl} ${startControl}, ${end}`;
  // }

  // connecting with a standard curve without any alignment
  const ctrl = `${roundedEnd[0]}, ${roundedStart[1]}`;

  return `M ${start} Q ${ctrl}, ${end}`;
};
