import { combineArrays, Dictionary } from 'utils/common';
import { makeAutoObservable, observable } from 'mobx';
import { CSSProperties } from 'react';

export class StatefullStyling {
  private _classes?: Dictionary<string[] | undefined>;
  private _defaultClasses?: Dictionary<string[] | undefined>;
  private _styles?: Dictionary<CSSProperties | undefined>;
  private _defaultStyles?: Dictionary<CSSProperties | undefined>;

  private _currentState: string;
  private _baseState: string;
  private _removeDefaultClasses: boolean;
  private _spareStates?: Dictionary<string[]>;

  constructor(
    removeDefaultClasses?: boolean,
    baseState?: string,
    classes?: Dictionary<string[] | undefined>,
    defaultClasses?: Dictionary<string[] | undefined>,
    styles?: Dictionary<CSSProperties | undefined>,
    defaultStyles?: Dictionary<CSSProperties | undefined>,
    spareStates?: Dictionary<string[]>
  ) {
    this._classes = classes;
    this._defaultClasses = defaultClasses;
    this._styles = styles;
    this._defaultStyles = defaultStyles;

    this._currentState = baseState ?? '';

    makeAutoObservable(this, {
      // @ts-ignore
      _classes: observable.ref,
      _defaultClasses: observable.ref,
      _styles: observable.ref,
      _defaultStyles: observable.ref,
    });

    this._removeDefaultClasses = removeDefaultClasses ?? false;
    this._baseState = baseState ?? '';
    this._spareStates = spareStates;
  }

  setState = (state: string) => {
    this._currentState = state;
  };

  get className(): string {
    this._currentState || 1;

    const defaultStateDefaultClasses =
      !this._removeDefaultClasses && this._baseState !== this._currentState
        ? this._getValueForState(this._baseState, this._defaultClasses)
        : undefined;

    const defaultClasses = !this._removeDefaultClasses
      ? this._getValueForState(this._currentState, this._defaultClasses)
      : undefined;

    const defaultStateClasses =
      this._baseState !== this._currentState
        ? this._getValueForState(this._baseState, this._classes)
        : undefined;

    const classes = this._getValueForState(this._currentState, this._classes);

    return combineArrays(
      defaultStateDefaultClasses,
      defaultClasses,
      defaultStateClasses,
      classes
    ).join(' ');
  }

  get style(): CSSProperties {
    this._currentState || 1;

    const defaultStateDefaultStyles =
      this._baseState !== this._currentState
        ? this._getValueForState(this._baseState, this._defaultStyles)
        : undefined;

    const defaultStyles = this._getValueForState(
      this._currentState,
      this._defaultStyles
    );

    const defaultStateStyles =
      this._baseState !== this._currentState
        ? this._getValueForState(this._baseState, this._styles)
        : undefined;

    const styles = this._getValueForState(this._currentState, this._styles);

    return {
      ...defaultStateDefaultStyles,
      ...defaultStyles,
      ...defaultStateStyles,
      ...styles,
    };
  }

  private _getValueForState<TValue>(state: string, dict?: Dictionary<TValue>) {
    if (dict) {
      let val = dict[state];
      if (!val && this._spareStates?.[state]) {
        const spareStates = this._spareStates[state];
        for (let i = 0; i < spareStates.length; i++) {
          const spareState = spareStates[i];
          val = dict[spareState];
          if (val) break;
        }
      }
      return val;
    } else return undefined;
  }
}
