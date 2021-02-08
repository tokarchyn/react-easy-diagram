import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { createDefaultBackground } from '../components/BackgroundDefault';
import { IComponentDefinition, VisualComponent } from '.';
import { createDefaultMiniControl } from '..';
import { VisualComponentWithDefault } from './visualComponentWithDefault';
import { RootStore } from './rootStore';

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

  import(obj?: IDiagramSettings) {
    this.backgroundComponentState.import(obj?.backgroundComponent);
    this.miniControlComponentState.import(obj?.miniControlComponent);
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
  rootStore: RootStore;
  settings?: TSettings;
}
