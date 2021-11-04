import { DiagramState } from 'index';
import { makeAutoObservable } from 'mobx';
import { multiplyPoint, Point } from 'utils/point';

export class HtmlElementRefState {
  private _diagramState: DiagramState;

  private _currentInternal: HTMLDivElement | null;
  private _triggerSizePositionRecalculation: number = 0;

  constructor(initValue: HTMLDivElement | null, diagramState: DiagramState) {
    this._currentInternal = initValue;
    makeAutoObservable(this);
    this._diagramState = diagramState;
  }

  get current() {
    return this._currentInternal;
  }

  set current(value: HTMLDivElement | null) {
    this._currentInternal = value;
  }

  /**
   * Size excluding zoom. 
   */
  get size(): Point | null {
    if (this.boundingRect && this.boundingRect.diagramZoom) {
      return multiplyPoint(
        [this.boundingRect.rect.width, this.boundingRect.rect.height],
        1 / this.boundingRect.diagramZoom
      );
    }
    return null;
  }

  /**
   * Position excluding zoom. 
   */
  get position(): Point | null {
    if (this.boundingRect && this.boundingRect.diagramZoom) {
      return multiplyPoint(
        [this.boundingRect.rect.x, this.boundingRect.rect.y],
        1 / this.boundingRect.diagramZoom
      );
    }
    return null;
  }

  get boundingRect() {
    this._triggerSizePositionRecalculation | 1;
    if (this.current) {
      const rect = this.current.getBoundingClientRect();
      const zoom = this._diagramState.getRenderedZoom();

      return {
        rect: rect,
        diagramZoom: zoom,
      };
    }

    return null;
  }

  getDataAttribute = (name: string): string | null => {
    if (this.current) {
      return this.current.getAttribute(name);
    }

    return null;
  };

  recalculateSizeAndPosition = () => {
    this._triggerSizePositionRecalculation += 1;
  };
}

export interface IHtmlElementRect {
  left: number;
  top: number;
  width: number;
  height: number;
}
