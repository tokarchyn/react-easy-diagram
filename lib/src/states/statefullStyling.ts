import { combineArrays, Dictionary } from 'utils/common';
import { makeAutoObservable, observable } from 'mobx';
import { CSSProperties } from 'react';

export class StatefullStyling {
  private _classes?: Dictionary<string[] | undefined>;
  private _defaultClasses?: Dictionary<string[] | undefined>;
  private _styles?: Dictionary<CSSProperties | undefined>;
  private _defaultStyles?: Dictionary<CSSProperties | undefined>;

  private _currentState: string;
  private _defaultState: string;
  private _removeDefaultClasses: boolean;

  constructor(
    removeDefaultClasses?: boolean,
    defaultState?: string,
    classes?: Dictionary<string[] | undefined>,
    defaultClasses?: Dictionary<string[] | undefined>,
    styles?: Dictionary<CSSProperties | undefined>,
    defaultStyles?: Dictionary<CSSProperties | undefined>
  ) {
    this._removeDefaultClasses = removeDefaultClasses ?? false;
    this._defaultState = defaultState ?? '';
    this._currentState = this._defaultState;

    this._classes = classes;
    this._defaultClasses = defaultClasses;
    this._styles = styles;
    this._defaultStyles = defaultStyles;

    makeAutoObservable(this, {
      // @ts-ignore
      _classes: observable.ref,
      _defaultClasses: observable.ref,
      _styles: observable.ref,
      _defaultStyles: observable.ref,
    });
  }

  setState = (state: string) => {
    this._currentState = state;
  };

  get className(): string {
    this._currentState || 1;

    const defaultStateDefaultClasses =
      !this._removeDefaultClasses && this._defaultState !== this._currentState
        ? this._defaultClasses?.[this._defaultState]
        : undefined;

    const defaultClasses = !this._removeDefaultClasses
      ? this._defaultClasses?.[this._currentState]
      : undefined;

    const defaultStateClasses =
      this._defaultState !== this._currentState
        ? this._classes?.[this._defaultState]
        : undefined;

    const classes = this._classes?.[this._currentState];

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
      this._defaultState !== this._currentState
        ? this._defaultStyles?.[this._defaultState]
        : undefined;

    const defaultStyles = this._defaultStyles?.[this._currentState];

    const defaultStateStyles =
      this._defaultState !== this._currentState
        ? this._styles?.[this._defaultState]
        : undefined;

    const styles = this._styles?.[this._currentState];

    return {
      ...defaultStateDefaultStyles,
      ...defaultStyles,
      ...defaultStateStyles,
      ...styles,
    };
  }
}
