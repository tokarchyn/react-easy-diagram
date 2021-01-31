import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { createDefaultBackground } from '../components/BackgroundDefault';
import { DiagramApi, IComponentDefinition, VisualComponent } from '.';
import { createDefaultMiniControl } from '..';
import { VisualComponentWithDefault } from './visualComponentWithDefault';

export class DiagramSettings {
  backgroundComponentState: VisualComponentWithDefault<IBackgroundComponentProps>;
  miniControlComponentState: VisualComponentWithDefault<IMiniControlComponentProps>;
  scaleInterval: Point = defaultScaleInterval;

  constructor() {
    this.backgroundComponentState = new VisualComponentWithDefault<IBackgroundComponentProps>(
      createDefaultBackground()
    );
    this.miniControlComponentState = new VisualComponentWithDefault<IMiniControlComponentProps>(
      createDefaultMiniControl()
    );
    makeAutoObservable(this);
  }

  fromJson(obj?: IDiagramSettings) {
    this.backgroundComponentState.fromJson(obj?.backgroundComponent);
    this.miniControlComponentState.fromJson(obj?.miniControlComponent);
    this.scaleInterval = obj?.scaleInterval ?? defaultScaleInterval;
  }
}

const defaultScaleInterval: Point = [0.1, 3];

export interface IDiagramSettings {
  backgroundComponent?:
    | IComponentDefinition<IBackgroundComponentProps>
    | VisualComponent<IBackgroundComponentProps>;
  miniControlComponent?:
    | IComponentDefinition<IMiniControlComponentProps>
    | VisualComponent<IMiniControlComponentProps>;
  scaleInterval?: Point;
}

export interface IBackgroundComponentProps<TSettings = {}> {
  diagramOffset: Point;
  diagramZoom: number;
  settings?: TSettings;
}

export interface IMiniControlComponentProps<TSettings = {}> {
  diagramApi: DiagramApi;
  settings?: TSettings;
}
