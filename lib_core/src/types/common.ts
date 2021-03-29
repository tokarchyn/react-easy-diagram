export type Point = [number, number];
export type BoundingBox = {
  topLeftCorner: Point;
  bottomRightCorner: Point;
  size: Point;
};

export interface Dictionary<TValue> {
  [key: string]: TValue;
}

export enum RelativePosition {
  left = 'left',
  top = 'top',
  right = 'right',
  bottom = 'bottom',
}
export type CornerPosition =
  | 'left-top'
  | 'right-top'
  | 'right-bottom'
  | 'left-bottom';

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type ErrorResult = { success: false; error?: string };
export type SuccessOrErrorResult<TValue = undefined> =
  | ErrorResult
  | SuccessResult<TValue>;

export type SuccessResult<TValue = undefined> = TValue extends undefined
  ? { success: true }
  : {
      success: true;
      value: TValue;
    };

export function successResult(): SuccessResult {
  return { success: true };
}

export function successValueResult<TValue>(
  value: TValue
): SuccessResult<TValue> {
  return { success: true, value: value } as SuccessResult<TValue>;
}

export function errorResult(error?: string): ErrorResult {
  return {
    success: false,
    error,
  };
}
