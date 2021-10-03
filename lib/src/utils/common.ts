import { Point } from 'utils/point';

export type BoundingBox = {
  topLeftCorner: Point;
  bottomRightCorner: Point;
  size: Point;
};

export interface Dictionary<TValue> {
  [key: string]: TValue;
}

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export function isNumber(value: any): value is number {
  return Number.isFinite(value);
}

export function isObject(value: any): value is object {
  return value != null && typeof value == 'object' && !Array.isArray(value);
}

export function isBoolean(value: any): value is boolean {
  return value != null && typeof value == 'boolean';
}

export function clampValue(value: number, interval: Point) {
  return Math.min(Math.max(value, interval[0]), interval[1]);
}

export function deepCopy<TValue>(value: TValue): TValue {
  return JSON.parse(JSON.stringify(value));
}

export function combineArrays<TValue>(
  ...arrays: (TValue[] | undefined)[]
): TValue[] {
  const combined: TValue[] = [];
  arrays.forEach((a) => a?.forEach((v) => v && combined.push(v)));
  return combined;
}
