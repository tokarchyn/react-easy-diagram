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
  offset: Point = [0, 0];
  zoom: number = 1;
  diagramInnerRef: HtmlElementRefState;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.diagramInnerRef = new HtmlElementRefState(null);
    makeAutoObservable(this);
    this.rootStore = rootStore;
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

export interface ICommonSettings {
  readonly: boolean; // TODO: allow to make readonly specific components, such as nodes, links.
}
