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

export interface ITransformation {
  zoom: number;
  offset: Point;
}

export const distanceBetweenPoints = (a: Point, b: Point): number =>
  Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));

export const roundPoint = (point: Point) =>
  [Math.round(point[0]), Math.round(point[1])] as Point;

export const addPoints = (a: Point, b: Point): Point => [
  a[0] + b[0],
  a[1] + b[1],
];

export const subtractPoints = (a: Point, b: Point): Point => [
  a[0] - b[0],
  a[1] - b[1],
];

export const multiplyPoint = (a: Point, m: number): Point => [
  a[0] * m,
  a[1] * m,
];

export const arePointsEqual = (a: Point, b: Point): boolean =>
  a === b || (a && b && a[0] === b[0] && a[1] === b[1]);

export const areTranformationsEqual = (
  a: ITransformation,
  b: ITransformation
): boolean =>
  a === b ||
  (a && b && a.zoom === b.zoom && arePointsEqual(a.offset, b.offset));

export function clampValue(value: number, interval: Point) {
  return Math.min(Math.max(value, interval[0]), interval[1]);
}

function guidS4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export function guid() {
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return (
    guidS4() +
    guidS4() +
    '-' +
    guidS4() +
    '-' +
    guidS4() +
    '-' +
    guidS4() +
    '-' +
    guidS4() +
    guidS4() +
    guidS4()
  );
}

export function guidForcedUniqueness(alreadyExistedItemsWithIdAsKey: object) {
  let id = guid();
  while (id in alreadyExistedItemsWithIdAsKey) {
    id = guid();
  }

  return id;
}

export function deepCopy<TValue>(value: TValue) : TValue {
  return JSON.parse(JSON.stringify(value));
}