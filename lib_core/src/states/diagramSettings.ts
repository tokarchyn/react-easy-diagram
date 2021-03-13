import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { createDefaultBackground } from '../components/BackgroundDefault';
import { IComponentDefinition, VisualComponent } from '.';
import { createDefaultMiniControl } from '..';
import { VisualComponentWithDefault } from './visualComponentWithDefault';
import { RootStore } from './rootStore';

export class DiagramSettings {
  private _backgroundComponentState: VisualComponentWithDefault<IBackgroundComponentProps>;
  private _miniControlComponentState: VisualComponentWithDefault<IMiniControlComponentProps>;
  private _scaleInterval: Point = defaultScaleInterval;
  private _zoomToFitSettings: IZoomToFitSettings = defaultZoomToFitSettings;

  constructor() {
    this._backgroundComponentState = new VisualComponentWithDefault<IBackgroundComponentProps>(
      createDefaultBackground()
    );
    this._miniControlComponentState = new VisualComponentWithDefault<IMiniControlComponentProps>(
      createDefaultMiniControl()
    );
    makeAutoObservable(this);
  }

  import = (obj?: IDiagramSettings) => {
    this._backgroundComponentState.import(obj?.backgroundComponent);
    this._miniControlComponentState.import(obj?.miniControlComponent);
    this.setScaleInterval(obj?.scaleInterval);
    this._zoomToFitSettings = {
      ...defaultZoomToFitSettings,
      ...obj?.zoomToFitSettings
    }
  }

  get backgroundComponentState() {
    return this._backgroundComponentState;
  }

  get miniControlComponentState() {
    return this._miniControlComponentState;
  }

  get scaleInterval() {
    return this._scaleInterval;
  }

  get zoomToFitSettings() {
    return this._zoomToFitSettings;
  }

  setScaleInterval = (value: Point | null | undefined) => {
    this._scaleInterval = value ?? defaultScaleInterval;
  }
}

const defaultScaleInterval: Point = [0.1, 3];
const defaultZoomToFitSettings: IZoomToFitSettings = {
  padding: [30,30]
};

export interface IDiagramSettings {
  backgroundComponent?:
    | IComponentDefinition<IBackgroundComponentProps>
    | VisualComponent<IBackgroundComponentProps>;
  miniControlComponent?:
    | IComponentDefinition<IMiniControlComponentProps>
    | VisualComponent<IMiniControlComponentProps>;
  scaleInterval?: Point;
  zoomToFitSettings: IZoomToFitSettings;
}

export interface IBackgroundComponentProps<TSettings = {}> {
  diagramOffset: Point;
  diagramZoom: number;
  settings?: TSettings;
}

export interface IMiniControlComponentProps<TSettings = {}> {
  rootStore: RootStore;
  settings?: TSettings;
}

export interface IZoomToFitSettings {
  padding: Point;
}