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

export type TrueOrFalseWithError =
  | { result: true }
  | { result: false; error: string };
