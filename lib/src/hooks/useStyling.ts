import { CSSProperties, useMemo } from 'react';
import { Dictionary, combineArrays } from 'utils/common';

export interface IUseStylingOptions {
  removeDefaultClasses?: boolean;
  baseState?: string;
  classes?: Dictionary<string[] | undefined>;
  defaultClasses?: Dictionary<string[] | undefined>;
  style?: Dictionary<CSSProperties | undefined>;
  defaultStyle?: Dictionary<CSSProperties | undefined>;
  spareStates?: Dictionary<string[]>;
}

export function useStyling(
  options: IUseStylingOptions,
  state: string
): { className: string; style: CSSProperties } {
  return useMemo(() => {
    return {
      className: generateClassName(options, state),
      style: generateStyle(options, state),
    };
  }, [options, state]);
}

function generateClassName(options: IUseStylingOptions, state: string) {
  const defaultStateDefaultClasses =
    !options.removeDefaultClasses && options.baseState !== state
      ? getValueForState(options.baseState, options.defaultClasses, options)
      : undefined;

  const defaultClasses = !options.removeDefaultClasses
    ? getValueForState(state, options.defaultClasses, options)
    : undefined;

  const defaultStateClasses =
    options.baseState !== state
      ? getValueForState(options.baseState, options.classes, options)
      : undefined;

  const classes = getValueForState(state, options.classes, options);

  return combineArrays(
    defaultStateDefaultClasses,
    defaultClasses,
    defaultStateClasses,
    classes
  ).join(' ');
}

function generateStyle(options: IUseStylingOptions, state: string) {
  const defaultStateDefaultStyles =
    options.baseState !== state
      ? getValueForState(options.baseState, options.defaultStyle, options)
      : undefined;

  const defaultStyles = getValueForState(state, options.defaultStyle, options);

  const defaultStateStyles =
    options.baseState !== state
      ? getValueForState(options.baseState, options.style, options)
      : undefined;

  const styles = getValueForState(state, options.style, options);

  return {
    ...defaultStateDefaultStyles,
    ...defaultStyles,
    ...defaultStateStyles,
    ...styles,
  };
}

function getValueForState<TValue>(
  state: string | undefined,
  dict: Dictionary<TValue> | undefined,
  options: IUseStylingOptions
) {
  if (dict && state) {
    let val = dict[state];
    if (!val && options.spareStates?.[state]) {
      const spareStates = options.spareStates[state];
      for (let i = 0; i < spareStates.length; i++) {
        const spareState = spareStates[i];
        val = dict[spareState];
        if (val) break;
      }
    }
    return val;
  } else return undefined;
}
