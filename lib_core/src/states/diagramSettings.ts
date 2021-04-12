import { makeAutoObservable } from 'mobx';
import { Point } from 'utils/point';
import { createDefaultBackground } from 'components/BackgroundDefault';
import { VisualComponentWithDefault } from 'states/visualComponentWithDefault';
import { RootStore } from 'states/rootStore';
import { createDefaultMiniControl } from 'components/MiniControlDefault';
import {
  IComponentDefinition,
  VisualComponent,
} from 'states/visualComponentState';
import { isObject } from 'utils/common';

export class DiagramSettings {
  private _backgroundComponentState: VisualComponentWithDefault<IBackgroundComponentProps>;
  private _miniControlComponentState: VisualComponentWithDefault<IMiniControlComponentProps>;
  private _zoomInterval: Point = defaultZoomInterval;
  private _zoomToFitSettings: IZoomToFitSettings = defaultZoomToFitSettings;
  private _userInteraction: IUserInteraction = enableAllUserInteraction;

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
    this.setZoomInterval(obj?.zoomInterval);
    this._zoomToFitSettings = {
      ...defaultZoomToFitSettings,
      ...obj?.zoomToFitSettings,
    };
    this.setUserInteraction(obj?.userInteraction);
  };

  get backgroundComponentState() {
    return this._backgroundComponentState;
  }

  get miniControlComponentState() {
    return this._miniControlComponentState;
  }

  get zoomInterval() {
    return this._zoomInterval;
  }

  get zoomToFitSettings() {
    return this._zoomToFitSettings;
  }

  setZoomInterval = (value: Point | null | undefined) => {
    this._zoomInterval = value ?? defaultZoomInterval;
  };

  get userInteraction() {
    return this._userInteraction;
  }

  setUserInteraction = (
    value: Partial<IUserInteraction> | boolean | undefined | null
  ) => {
    if (value === true || value === undefined || value === null)
      this._userInteraction = enableAllUserInteraction;
    else if (value === false) this._userInteraction = disableAllUserInteraction;
    else if (isObject(value))
      this._userInteraction = {
        ...enableAllUserInteraction,
        ...value,
      };
  };
}

const defaultZoomInterval: Point = [0.1, 3];
const defaultZoomToFitSettings: IZoomToFitSettings = {
  padding: [30, 30],
};
const enableAllUserInteraction: IUserInteraction = {
  diagramZoom: true,
  diagramPan: true,
  nodeDrag: true,
  portConnection: true,
  nodeSelection: true,
  linkSelection: true,
};
const disableAllUserInteraction: IUserInteraction = {
  diagramZoom: false,
  diagramPan: false,
  nodeDrag: false,
  portConnection: false,
  nodeSelection: false,
  linkSelection: false,
};

export interface IDiagramSettings {
  backgroundComponent?:
    | IComponentDefinition<IBackgroundComponentProps>
    | VisualComponent<IBackgroundComponentProps>;
  miniControlComponent?:
    | IComponentDefinition<IMiniControlComponentProps>
    | VisualComponent<IMiniControlComponentProps>;
  zoomInterval?: Point;
  zoomToFitSettings?: IZoomToFitSettings;
  userInteraction?: Partial<IUserInteraction> | boolean;
}

export interface IBackgroundComponentProps<TSettings = any> {
  diagramOffset: Point;
  diagramZoom: number;
  settings?: TSettings;
}

export interface IMiniControlComponentProps<TSettings = any> {
  rootStore: RootStore;
  settings?: TSettings;
}

export interface IZoomToFitSettings {
  padding: Point;
}

export interface IUserInteraction {
  diagramZoom: boolean;
  diagramPan: boolean;
  nodeDrag: boolean;
  portConnection: boolean;
  nodeSelection: boolean;
  linkSelection: boolean;
}
