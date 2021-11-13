import { makeAutoObservable } from 'mobx';
import { Point } from 'utils/point';
import { createSvgBackground } from 'components/background/SvgBackground';
import { VisualComponentWithDefault } from 'states/visualComponentWithDefault';
import { RootStore } from 'states/rootStore';
import { createDefaultMiniControl } from 'components/miniControl/MiniControlDefault';
import {
  IComponentDefinition,
  VisualComponent,
} from 'states/visualComponentState';
import { IUserInteraction, UserInteractionSettings } from 'states/userInteractionSettings';

export class DiagramSettings {
  private _backgroundComponentState: VisualComponentWithDefault<IBackgroundComponentProps>;
  private _miniControlComponentState: VisualComponentWithDefault<IMiniControlComponentProps>;
  private _zoomInterval: Point = defaultZoomInterval;
  private _zoomToFitSettings: IZoomToFitSettings = defaultZoomToFitSettings;
  private _userInteraction: UserInteractionSettings;

  constructor() {
    this._backgroundComponentState = new VisualComponentWithDefault<IBackgroundComponentProps>(
      createSvgBackground()
    );
    this._miniControlComponentState = new VisualComponentWithDefault<IMiniControlComponentProps>(
      createDefaultMiniControl()
    );
    this._userInteraction = new UserInteractionSettings();
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
    this._userInteraction.import(obj?.userInteraction);
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
}

const defaultZoomInterval: Point = [0.1, 3];
const defaultZoomToFitSettings: IZoomToFitSettings = {
  padding: [30, 30],
  zoomInterval: [0.1, 1.5],
  callOnLoad: true
};

export interface IDiagramSettings {
  backgroundComponent?:
    | IComponentDefinition<IBackgroundComponentProps>
    | VisualComponent<IBackgroundComponentProps>;
  miniControlComponent?:
    | IComponentDefinition<IMiniControlComponentProps>
    | VisualComponent<IMiniControlComponentProps>;
  zoomInterval?: Point;
  zoomToFitSettings?: Partial<IZoomToFitSettings>;
  userInteraction?: Partial<IUserInteraction>;
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
  zoomInterval: Point;
  callOnLoad: boolean;
}
