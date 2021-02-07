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
  pathConstructor = defaultPathConstructor;
  visualComponents = new VisualComponents<
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

  fromJson = (obj?: ILinksSettings) => {
    this.visualComponents.fromJson(obj);
    this.pathConstructor = obj?.pathConstructor ?? defaultPathConstructor;
  };
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
