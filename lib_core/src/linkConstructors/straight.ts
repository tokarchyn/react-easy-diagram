import { ILinkPathConstructor } from '..';
import { Point } from '../types/common';

function straightLinkPathConstructor(
  source: Point,
  target: Point,
  sourcePortType: string | undefined,
  targetPortType: string | undefined
): string {
  const path = `M ${source[0]} ${source[1]}, ${target[0]} ${target[1]}`;

  return path;
}

export function createStraightLinkPathConstructor(): ILinkPathConstructor {
  return straightLinkPathConstructor;
}
