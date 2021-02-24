export type Point = [number, number];

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

export type SuccessOrErrorResult =
  | { success: true }
  | { success: false; error: string };

export const SuccessResult = () : SuccessOrErrorResult => ({success: true})
export const ErrorResult = (error: string) : SuccessOrErrorResult => ({success: false, error})