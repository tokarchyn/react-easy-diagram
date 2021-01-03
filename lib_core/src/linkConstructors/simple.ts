import { Point } from '../types/common';

export function simpleLinkPathConstructor(
  source: Point,
  target: Point
): string {
  const path = `M ${source[0]} ${source[1]}, ${target[0]} ${target[1]}`;

  return path;
}
