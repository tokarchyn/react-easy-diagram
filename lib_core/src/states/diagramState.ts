import { Point } from '../types/common';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './rootStore';
import {
  IUserInteractionTranslateAndZoom,
  IUserInteractionTranslate,
} from '../hooks/userInteractions/common';
import {
  clampValue,
  generateTransform,
  subtractPoints,
  multiplyPoint,
  addPoints,
  deepCopy,
} from '../utils';
import { HtmlElementRefState } from './htmlElementRefState';

export class DiagramState
  implements IUserInteractionTranslate, IUserInteractionTranslateAndZoom {
  private _offset: Point;
  private _zoom: number;
  private _diagramInnerRef: HtmlElementRefState;
  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._diagramInnerRef = new HtmlElementRefState(null);
    this._rootStore = rootStore;
    this.import();
    
    makeAutoObservable(this, {
      // @ts-ignore
      _rootStore: false,
    });
  }

  import = (state?: IDiagramState) => {
    this.setOffset(state?.offset);
    this.setZoom(state?.zoom);
  };

  export = (): IDiagramState =>
    deepCopy({
      offset: this._offset,
      zoom: this._zoom,
    });

  setOffset = (newOffset: Point | null | undefined) => {
    this._offset = newOffset ?? [0, 0];
  };

  setZoom = (newZoom: number | null | undefined) => {
    this._zoom = clampValue(
      newZoom ?? 1,
      this._rootStore.diagramSettings.scaleInterval
    );
  };

  zoomIn = () => this._rootStore.diagramState.zoomIntoCenter(1 / 0.8);
  zoomOut = () => this._rootStore.diagramState.zoomIntoCenter(0.8);

  setTransformation = (newOffset: Point, newZoom: number) => {
    this.setOffset(newOffset);
    this.setZoom(newZoom);
  };

  // See: https://stackoverflow.com/a/30039971/9142642
  zoomInto = (pointToZoomInto: Point, zoomMultiplicator: number) => {
    const newZoom = clampValue(
      this._zoom * zoomMultiplicator,
      this._rootStore.diagramSettings.scaleInterval
    );

    const pointDisplacementAfterZoom = multiplyPoint(
      subtractPoints(pointToZoomInto, this._offset),
      newZoom / this._zoom
    );

    this.setTransformation(
      // Compensate for the displacement by moving the point back under the cursor
      subtractPoints(pointToZoomInto, pointDisplacementAfterZoom),
      newZoom
    );
  };

  translate = (translateBy: Point) => {
    this.setOffset(addPoints(this._offset, translateBy));
  };

  tranlsateAndZoomInto = (
    translateBy: Point,
    pointToZoomInto: Point,
    zoomMultiplicator: number
  ) => {
    this.translate(translateBy);
    this.zoomInto(pointToZoomInto, zoomMultiplicator);
  };

  zoomIntoCenter = (zoomMultiplicator: number) => {
    const diagramRealSize = this._diagramInnerRef.realSize;
    if (!diagramRealSize) return;

    this._rootStore.diagramState.zoomInto(
      multiplyPoint(diagramRealSize, 0.5),
      zoomMultiplicator
    );
  };

  get transformString() {
    return generateTransform(this._offset, this._zoom);
  }

  get diagramInnerRef() {
    return this._diagramInnerRef;
  }

  get offset() {
    return this._offset;
  }

  get zoom() {
    return this._zoom;
  }
}

export interface IDiagramState {
  offset: Point;
  zoom: number;
}
