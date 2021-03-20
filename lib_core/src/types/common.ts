export type Point = [number, number];
export type BoundingBox = {
  topLeftCorner: Point;
  bottomRightCorner: Point;
  size: Point;
};

export interface Dictionary<TValue> {
  [key: string]: TValue;
}

export type RelativePosition = 'left' | 'top' | 'right' | 'bottom';

export type CornerPosition =
  | 'left-top'
  | 'right-top'
  | 'right-bottom'
  | 'left-bottom';

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type SuccessOrErrorResult<TValue = undefined> =
  | ({ success: true } & (TValue extends undefined
      ? {}
      : {
          value: TValue;
        }))
  | { success: false; error: string };

export function successResult<TValue = undefined>(
  value?: TValue
): SuccessOrErrorResult<TValue> {
  if (value === undefined) {
    return { success: true } as SuccessOrErrorResult;
  }
  return { success: true, value } as SuccessOrErrorResult<TValue>;
}

export function errorResult(error: string): SuccessOrErrorResult {
  return {
    success: false,
    error,
  };
}
