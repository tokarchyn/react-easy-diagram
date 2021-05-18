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
