export type ErrorResult<TValue = undefined> = TValue extends undefined
  ? { success: false; error?: string }
  : { success: false; error?: string; value: TValue };

export type SuccessResult<TValue = undefined> = TValue extends undefined
  ? { success: true }
  : { success: true; value: TValue };

export type SuccessOrErrorResult<TValue = undefined, TErrorValue = undefined> =
  | SuccessResult<TValue>
  | ErrorResult<TErrorValue>;

export function isSuccess<TValue, TErrorValue>(
  result: SuccessOrErrorResult<TValue, TErrorValue>
): result is SuccessResult<TValue> {
  return result.success;
}

export function isError<TValue, TErrorValue>(
  result: SuccessOrErrorResult<TValue, TErrorValue>
): result is ErrorResult<TErrorValue> {
  return !result.success;
}

export function successResult(): SuccessResult {
  return { success: true };
}

export function successValueResult<TValue>(
  value: TValue
): SuccessResult<TValue> {
  return { success: true, value } as SuccessResult<TValue>;
}

export function errorResult(error?: string): ErrorResult {
  return { success: false, error };
}

export function errorValueResult<TErrorValue>(
  value: TErrorValue,
  error?: string
): ErrorResult<TErrorValue> {
  return { success: false, error, value } as ErrorResult<TErrorValue>;
}
