import { Point } from 'utils/point';
import { DirectionWithDiagonals } from 'utils/position';

export function getDegree(dir: DirectionWithDiagonals | undefined): number | undefined {
  switch (dir) {
    case 'left':
      return 180;
    case 'up':
      return 90;
    case 'right':
      return 0;
    case 'down':
      return 270;
    case 'left-up':
      return 135;
    case 'right-up':
      return 45;
    case 'right-down':
      return 315;
    case 'left-down':
      return 225;
    default:
      return undefined;
  }
}

export function getRadian(dir: DirectionWithDiagonals | undefined) : number|undefined {
  const degree = getDegree(dir);
  return degree !== undefined ? degree* Math.PI/180 : undefined;
}

export function createVector(
  point1: Point,
  length: number,
  angleInRadian: number | undefined
): Point {
  return [
    point1[0] +
      length * (angleInRadian !== undefined ? Math.cos(angleInRadian) : 0),
    point1[1] + length * (angleInRadian !== undefined ? Math.sin(angleInRadian) : 0),
  ];
}

export function commandM(point: Point): string {
  return 'M ' + coordinateFromPoint(point);
}

export function commandC(startPoint: Point, control1: Point, control2: Point, endPoint: Point): string {
  return (
    commandM(startPoint) + 
    ' C ' +
    coordinateFromPoint(control1) +
    ' ' +
    coordinateFromPoint(control2) +
    ' ' +
    coordinateFromPoint(endPoint)
  );
}

export function coordinateFromPoint(point: Point) {
  return `${point[0]} ${point[1]}`;
}
