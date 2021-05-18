import { Point } from 'utils/point';

export function clampValue(value: number, interval: Point) {
  return Math.min(Math.max(value, interval[0]), interval[1]);
}

export function deepCopy<TValue>(value: TValue): TValue {
  return JSON.parse(JSON.stringify(value));
}
