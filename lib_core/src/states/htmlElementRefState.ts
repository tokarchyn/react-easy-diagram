import { makeAutoObservable } from 'mobx';
import { Point } from '..';

export class HtmlElementRefState {
  private _currentInternal: HTMLDivElement | null;

  constructor(initValue: HTMLDivElement | null) {
    this._currentInternal = initValue;
    makeAutoObservable(this);
  }

  get current() {
    return this._currentInternal;
  }

  set current(value: HTMLDivElement | null) {
    this._currentInternal = value;
  }

  offsetRelativeToParent = (parent: HTMLElement): Point | null => {
    if (this.current) {
      let iterElement = this.current as HTMLElement | null;
      let acumLeft = 0;
      let acumTop = 0;

      while (parent !== iterElement && iterElement) {
        const translate = getTranslate(iterElement);
        acumLeft += iterElement.offsetLeft + translate[0];
        acumTop += iterElement.offsetTop + translate[1];
        iterElement = iterElement.parentElement;
      }

      return [acumLeft, acumTop];
    }

    return null;
  };

  /**
   * @returns Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
   * Value can be @type {null} in case reference to real DOM object is not set.
   */
  get realSize(): Point | null {
    if (this.current) {
      return [this.current.clientWidth, this.current.clientHeight];
    } else {
      return null;
    }
  }
}

// https://stackoverflow.com/questions/21912684/how-to-get-value-of-translatex-and-translatey
// https://gist.github.com/aderaaij/a6b666bf756b2db1596b366da921755d
function getTranslate(item: HTMLElement): Point {
  const transArr: Point = [0, 0];
  if (!window.getComputedStyle) {
    return transArr;
  }
  const style = window.getComputedStyle(item);
  const transform = style.transform || style.webkitTransform;
  // matrix(a, b, c, d, tx, ty)
  // consider also to add matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)
  let mat = transform.match(/^matrix\((.+)\)$/);
  if (mat) {
    transArr[0] = parseInt(mat[1].split(', ')[4], 10);
    transArr[1] = parseInt(mat[1].split(', ')[5], 10);
  }

  return transArr;
}

export interface IHtmlElementRect {
  left: number;
  top: number;
  width: number;
  height: number;
}
