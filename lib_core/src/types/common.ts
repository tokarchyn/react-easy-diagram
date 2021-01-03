export type Point = [number,number];

export interface Dictionary<TValue> {
  [key: string]: TValue;
}

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export const componentDefaultType = 'default';