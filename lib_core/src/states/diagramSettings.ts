import { IComponentDefinition, VisualComponent } from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { createDefaultBackground } from '../components/BackgroundDefault';
import { VisualComponentState } from './visualComponentState';
import { DiagramApi } from '.';
import { createDefaultMiniControl } from '..';

export class DiagramSettings {
  backgroundComponentState: VisualComponentState<IBackgroundComponentProps>;
  miniControlComponentState: VisualComponentState<IMiniControlComponentProps>;
  scaleInterval: Point = defaultScaleInterval;

  constructor() {
    this.backgroundComponentState = new VisualComponentState<IBackgroundComponentProps>(
      createDefaultBackground()
    );
    this.miniControlComponentState = new VisualComponentState<IMiniControlComponentProps>(
      createDefaultMiniControl()
    );
    makeAutoObservable(this);
  }

  fromJson(obj: IDiagramSettings) {
    this.backgroundComponentState.fromJson(obj.backgroundComponent);
    this.miniControlComponentState.fromJson(obj.miniControlComponent);
    this.scaleInterval = obj.scaleInterval ?? defaultScaleInterval;
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
