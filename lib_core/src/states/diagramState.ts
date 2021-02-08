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
} from '../utils';
import { HtmlElementRefState } from './htmlElementRefState';

export class DiagramState
  implements IUserInteractionTranslate, IUserInteractionTranslateAndZoom {
  offset: Point;
  zoom: number;
  diagramInnerRef: HtmlElementRefState;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.diagramInnerRef = new HtmlElementRefState(null);
    this.import();
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  import = (state?: IDiagramState) => {
    this.offset = state?.offset ?? [0,0];
    this.zoom = state?.zoom ?? 1;
  }

  setOffset = (newOffset: Point) => {
    this.offset = newOffset;
  };

  setZoom = (newZoom: number) => {
    this.zoom = clampValue(
      newZoom,
      this.rootStore.diagramSettings.scaleInterval
    );
  };

  zoomIn = () => this.rootStore.diagramState.zoomIntoCenter(1 / 0.8);
  zoomOut = () => this.rootStore.diagramState.zoomIntoCenter(0.8);

  setTransformation = (newOffset: Point, newZoom: number) => {
    this.setOffset(newOffset);
    this.setZoom(newZoom);
  };

  // See: https://stackoverflow.com/a/30039971/9142642
  zoomInto = (pointToZoomInto: Point, zoomMultiplicator: number) => {
    const newZoom = clampValue(
      this.zoom * zoomMultiplicator,
      this.rootStore.diagramSettings.scaleInterval
    );

    const pointDisplacementAfterZoom = multiplyPoint(
      subtractPoints(pointToZoomInto, this.offset),
      newZoom / this.zoom
    );

    this.setTransformation(
      // Compensate for the displacement by moving the point back under the cursor
      subtractPoints(pointToZoomInto, pointDisplacementAfterZoom),
      newZoom
    );
  };

  translate = (translateBy: Point) => {
    this.setOffset(addPoints(this.offset, translateBy));
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
    const diagramRealSize = this.diagramInnerRef.realSize;
    if (!diagramRealSize) return;

    this.rootStore.diagramState.zoomInto(
      multiplyPoint(diagramRealSize, 0.5),
      zoomMultiplicator
    );
  };

  get transformString() {
    return generateTransform(this.offset, this.zoom);
  }
}

export interface IDiagramState {
  offset: Point,
  zoom: number
}