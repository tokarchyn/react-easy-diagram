import { LinkDefault } from '../components/LinkDefault';
import {
  componentDefaultType,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { LinkState } from './linkState';
import { createCurvedLinkPathConstructor } from '../linkConstructors/curved';
import { DirectionWithDiagonals, Point } from '../types/index';
import { IVisualComponentProps } from '.';
import {
  linkCreationComponentType,
  LinkCreationState,
} from './linkCreationState';
import { ReactEventHandlers } from 'react-use-gesture/dist/types';

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

export interface ILinkVisualComponentProps<TSettings extends {} = {}>
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
