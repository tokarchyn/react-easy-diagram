import { DiagramState } from 'index';
import { computed, makeAutoObservable } from 'mobx';
import { multiplyPoint, Point } from 'utils/point';

export class HtmlElementRefState {
  private _diagramState: DiagramState;

  private _currentInternal: HTMLDivElement | null;
  private _triggerSizePositionRecalculation: number = 0;

  constructor(initValue: HTMLDivElement | null, diagramState: DiagramState) {
    this._currentInternal = initValue;
    makeAutoObservable(this, {
      sizeExcludingZoom: computed({ keepAlive: true }),
      positionExcludingZoom: computed({ keepAlive: true }),
      boundingRect: computed({ keepAlive: true }),
    });
    this._diagramState = diagramState;
  }

  get current() {
    return this._currentInternal;
  }

  set current(value: HTMLDivElement | null) {
    this._currentInternal = value;
  }

  /**
   * Size excluding diagram zoom.
   */
  get sizeExcludingZoom(): Point | null {
    if (this.boundingRect && this.boundingRect.diagramZoom) {
      return multiplyPoint(
        this.boundingRect.size,
        1 / this.boundingRect.diagramZoom
      );
    }
    return null;
  }

  /**
   * Position excluding diagram zoom.
   */
  get positionExcludingZoom(): Point | null {
    if (this.boundingRect && this.boundingRect.diagramZoom) {
      return multiplyPoint(
        this.boundingRect.position,
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
        position: [rect.x, rect.y] as Point,
        size: [rect.width, rect.height] as Point,
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
