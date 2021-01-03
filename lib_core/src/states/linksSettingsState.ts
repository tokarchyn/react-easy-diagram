import { LinkDefault } from '../components/LinkDefault';
import {
  IVisualComponentProps,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { LinkState } from './linkState';
import { createCurvedLinkPathConstructor } from '../linkConstructors/curved';
import { Point } from '../types/common';

export class LinksSettings {
  pathConstructor: ILinkPathConstructor = createCurvedLinkPathConstructor();
  visualComponents: VisualComponents<
    LinkState,
    ILinkVisualComponentProps
  > = new VisualComponents<LinkState, ILinkVisualComponentProps>(LinkDefault);

  constructor() {
    makeAutoObservable(this);
  }

  fromJson = (obj: ILinksSettings) => {
    this.visualComponents.fromJson(obj);
    this.pathConstructor = obj.pathConstructor;
  };
}

export interface ILinkVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<LinkState, TSettings> {
  draggableRef: React.RefObject<any>;
  path: string;
}

export interface ILinksSettings
  extends IVisualComponentsObject<ILinkVisualComponentProps> {
  pathConstructor: ILinkPathConstructor;
}

export type ILinkPathConstructor = (source: Point, target: Point) => string;
