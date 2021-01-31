import { LinkDefault } from '../components/LinkDefault';
import {
  componentDefaultType,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { LinkState } from './linkState';
import { createCurvedLinkPathConstructor } from '../linkConstructors/curved';
import { Point } from '../types/common';
import { ILinkPath, IVisualComponentProps } from '.';

export class LinksSettings {
  pathConstructor: ILinkPathConstructor = defaultPathConstructor;
  visualComponents: VisualComponents<
    LinkState,
    ILinkVisualComponentProps
  > = new VisualComponents<LinkState, ILinkVisualComponentProps>({
    [componentDefaultType]: LinkDefault,
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
