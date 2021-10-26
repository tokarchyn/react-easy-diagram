import { makeAutoObservable } from 'mobx';
import {
  IUserInteractionTranslate,
  IUserInteractionTranslateAndZoom,
} from 'hooks/userInteractions/common';
import { HtmlElementRefState } from 'states/htmlElementRefState';
import { RootStore } from 'states/rootStore';
import { BoundingBox, clampValue, deepCopy } from 'utils/common';
import { addPoints, multiplyPoint, Point, subtractPoints } from 'utils/point';

export class DiagramState
  implements IUserInteractionTranslate, IUserInteractionTranslateAndZoom {
  private _offset: Point;
  private _zoom: number;
  private _renderedOffset: Point;
  private _renderedZoom: number;
  private _diagramInnerRef: HtmlElementRefState;
  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._diagramInnerRef = new HtmlElementRefState(null);
    this._rootStore = rootStore;
    this._renderedOffset = [0, 0];
    this._renderedZoom = 1;
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
      this._rootStore.diagramSettings.zoomInterval
    );
  };

  zoomIn = () => this.zoomIntoCenter(1 / 0.8);
  zoomOut = () => this.zoomIntoCenter(0.8);

  // See: https://stackoverflow.com/a/30039971/9142642
  zoomInto = (pointToZoomInto: Point, zoomMultiplicator: number) => {
    const newZoom = clampValue(
      this._zoom * zoomMultiplicator,
      this._rootStore.diagramSettings.zoomInterval
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

  setTransformation = (newOffset: Point, newZoom: number) => {
    this.setOffset(newOffset);
    this.setZoom(newZoom);
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

    this.zoomInto(multiplyPoint(diagramRealSize, 0.5), zoomMultiplicator);
  };

  get diagramInnerRef() {
    return this._diagramInnerRef;
  }

  get offset() {
    return this._offset;
  }

  get zoom() {
    return this._zoom;
  }

  get renderedOffset() {
    return this._renderedOffset;
  }

  get renderedZoom() {
    return this._renderedZoom;
  }

  /**
   * Get position on Diagram in its coordinates system (including zoom) by mouse/touch position.
   * @param pointerPosition position of mouse or finger on the screen
   */
  getPositionByPointer = (pointerPosition: Point): Point => {
    const diagRect = this.diagramInnerRef.current?.getBoundingClientRect();
    if (diagRect) {
      return multiplyPoint(
        subtractPoints(pointerPosition, [diagRect.left, diagRect.top], this.offset),
        1 / this.zoom
      );
    } else return [0, 0];
  };

  /**
   * Set offset and zoom values that were already rendered.
   */
  renderOffsetAndZoom = (offset: Point, zoom: number) => {
    this._renderedOffset = offset;
    this._renderedZoom = zoom;
  };

  zoomToFit = () => {
    const nodesBoundingBox = this._getNodesBoundingBoxWithPadding();

    const diagramSize = this._diagramInnerRef.realSize;
    if (!diagramSize) {
      console.warn('Cannot retrieve diagram size');
      return;
    }

    const newZoom = calculateNewZoomToFitBoundingBox(
      diagramSize,
      nodesBoundingBox
    );

    // Extend interval to be able to set required zoom
    this._rootStore.diagramSettings.setZoomInterval([
      Math.min(this._rootStore.diagramSettings.zoomInterval[0], newZoom),
      Math.max(this._rootStore.diagramSettings.zoomInterval[1], newZoom),
    ]);
    this.setZoom(newZoom);

    this.setOffset(
      calculateOffsetToCenterBoundingBox(diagramSize, newZoom, nodesBoundingBox)
    );
  };

  private _getNodesBoundingBoxWithPadding = (): BoundingBox => {
    const nodesBoundingBox = this._rootStore.nodesStore.getNodesBoundingBox();
    const padding = this._rootStore.diagramSettings.zoomToFitSettings.padding;
    nodesBoundingBox.topLeftCorner = subtractPoints(
      nodesBoundingBox.topLeftCorner,
      padding
    );
    nodesBoundingBox.bottomRightCorner = addPoints(
      nodesBoundingBox.bottomRightCorner,
      padding
    );
    nodesBoundingBox.size = subtractPoints(
      nodesBoundingBox.bottomRightCorner,
      nodesBoundingBox.topLeftCorner
    );

    return nodesBoundingBox;
  };
}

function calculateNewZoomToFitBoundingBox(
  diagramSize: Point,
  boundingBox: BoundingBox
) {
  // Zoom to fit the largest size, horizontal or vertical
  const newZoom = Math.min(
    diagramSize[0] / boundingBox.size[0],
    diagramSize[1] / boundingBox.size[1]
  );

  return newZoom;
}

function calculateOffsetToCenterBoundingBox(
  diagramSize: Point,
  zoom: number,
  boundingBox: BoundingBox
) {
  // Take zoom into account
  const contentSizeWithZoom = multiplyPoint(boundingBox.size, zoom);
  const topLeftCornerWithZoom = multiplyPoint(boundingBox.topLeftCorner, zoom);
  const diffBetweenDiagramAndContentSizes = subtractPoints(
    diagramSize,
    contentSizeWithZoom
  );
  return addPoints(
    multiplyPoint(topLeftCornerWithZoom, -1), // topLeft corner of content will be at topleft corner of diagram
    multiplyPoint(diffBetweenDiagramAndContentSizes, 1 / 2) // center content
  );
}

export interface IDiagramState {
  offset: Point;
  zoom: number;
}
