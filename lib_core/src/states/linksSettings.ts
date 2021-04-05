import { ReactEventHandlers } from 'react-use-gesture/dist/types';
import { makeAutoObservable } from 'mobx';
import { LinkDefault } from 'components/LinkDefault';
import { createCurvedLinkPathConstructor } from 'linkConstructors/curved';
import { Point } from 'utils/point';
import { DirectionWithDiagonals } from 'utils/position';
import { LinkCreationState, linkCreationComponentType } from 'states/linkCreationState';
import { LinkState } from 'states/linkState';
import { VisualComponents, componentDefaultType, IVisualComponentsObject } from 'states/visualComponents';
import { IVisualComponentProps } from 'states/visualComponentState';

export class LinksSettings {
  private _pathConstructor: ILinkPathConstructor;
  private _visualComponents = new VisualComponents<
    LinkState | LinkCreationState,
    ILinkVisualComponentProps
  >({
    [componentDefaultType]: LinkDefault,
    [linkCreationComponentType]: LinkDefault,
  });
  private _preferLinksDirection: 'horizontal' | 'vertical' | 'both';

  constructor() {
    this.import();
    makeAutoObservable(this);
  }

  import = (obj?: ILinksSettings) => {
    this._visualComponents.import(obj);
    this.setPathConstructor(obj?.pathConstructor);
    this._preferLinksDirection = obj?.preferLinksDirection ?? 'horizontal';
  };

  get pathConstructor() {
    return this._pathConstructor;
  }

  setPathConstructor = (value: ILinkPathConstructor | null | undefined) => {
    this._pathConstructor = value ?? defaultPathConstructor;
  };

  get visualComponents() {
    return this._visualComponents;
  }

  get preferLinksDirection() {
    return this._preferLinksDirection;
  }
}

const defaultPathConstructor = createCurvedLinkPathConstructor();

export interface ILinkVisualComponentProps<TSettings = any>
  extends IVisualComponentProps<LinkState | LinkCreationState, TSettings> {
  bind: (...args: any[]) => ReactEventHandlers;
}

export interface ILinksSettings
  extends IVisualComponentsObject<ILinkVisualComponentProps> {
  pathConstructor?: ILinkPathConstructor;
  preferLinksDirection: LinksSettings['preferLinksDirection'];
}

export interface ILinkPathConstructorEndpointInfo {
  point: Point;
  portType?: string;
  direction?: DirectionWithDiagonals;
}

export type ILinkPathConstructor = (
  source: ILinkPathConstructorEndpointInfo,
  target: ILinkPathConstructorEndpointInfo
) => string;
