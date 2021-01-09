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

export class DiagramsSettings {
  constructor() {
    makeAutoObservable(this);
  }
}