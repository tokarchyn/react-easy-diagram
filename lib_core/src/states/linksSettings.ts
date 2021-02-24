import { createLinkDefault, LinkDefault } from '../components/LinkDefault';
import {
  componentDefaultType,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { LinkState } from './linkState';
import { createCurvedLinkPathConstructor } from '../linkConstructors/curved';
import { Point } from '../types/common';
import { IVisualComponentProps } from '.';
import {
  linkCreationComponentType,
  LinkCreationState,
} from './linkCreationState';

export class LinksSettings {
  private _pathConstructor = defaultPathConstructor;
  private _visualComponents = new VisualComponents<
    LinkState | LinkCreationState,
    ILinkVisualComponentProps
  >({
    [componentDefaultType]: LinkDefault,
    [linkCreationComponentType]: createLinkDefault({
      color: '#49f860',
      strokeWidth: 3,
    }),
  });

  constructor() {
    makeAutoObservable(this);
  }

  import = (obj?: ILinksSettings) => {
    this._visualComponents.import(obj);
    this.setPathConstructor(obj?.pathConstructor);
  };

  get pathConstructor() {
    return this._pathConstructor;
  }

  setPathConstructor = (value: ILinkPathConstructor | null | undefined) => {
    this._pathConstructor = value ?? defaultPathConstructor;
  }

  get visualComponents() {
    return this._visualComponents;
  }
}

const defaultPathConstructor = createCurvedLinkPathConstructor();

export interface ILinkVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<LinkState | LinkCreationState, TSettings> {
  draggableRef: React.RefObject<any>;
}

export interface ILinksSettings
  extends IVisualComponentsObject<ILinkVisualComponentProps> {
  pathConstructor: ILinkPathConstructor;
}

export type ILinkPathConstructor = (
  source: Point,
  target: Point,
  sourcePortType: string | undefined,
  targetPortType: string | undefined
) => string;
