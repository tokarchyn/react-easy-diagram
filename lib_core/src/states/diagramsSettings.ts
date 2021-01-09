import { LinkDefault } from '../components/LinkDefault';
import {
  IComponentDefinition,
  IVisualComponentProps,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { LinkState } from './linkState';
import { createCurvedLinkPathConstructor } from '../linkConstructors/curved';
import { componentDefaultType, Point } from '../types/common';
import { createDefaultBackground } from '../components/BackgroundDefault';

export class DiagramsSettings {
  backgroundComponent: IComponentDefinition<IBackgroundComponentProps> = createDefaultBackground();

  constructor() {
    makeAutoObservable(this);
  }
}

export interface IBackgroundComponentProps<TSettings = {}> {
  diagramOffset: Point,
  digramZoom: number,
  settings?: TSettings
}