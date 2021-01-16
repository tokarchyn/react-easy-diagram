import { LinkDefault } from '../components/LinkDefault';
import {
  IVisualComponentProps,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { LinkState } from './linkState';
import { createCurvedLinkPathConstructor } from '../linkConstructors/curved';
import { componentDefaultType, Point } from '../types/common';
import { ILinkPath } from '.';

export class LinksSettings {
  pathConstructor: ILinkPathConstructor = createCurvedLinkPathConstructor();
  visualComponents: VisualComponents<
    LinkState,
    ILinkVisualComponentProps
  > = new VisualComponents<LinkState, ILinkVisualComponentProps>({
    [componentDefaultType]: LinkDefault,
  });

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
  path: ILinkPath;
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
