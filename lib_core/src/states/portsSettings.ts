import {
  componentDefaultType,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { PortState } from './portState';
import { IVisualComponentProps } from './visualComponentState';
import { createPortDefault } from '../components/PortDefault';

export class PortsSettings {

  private _portVisualComponents: VisualComponents<
    PortState,
    IPortVisualComponentProps
  > = new VisualComponents<PortState, IPortVisualComponentProps>({
    [componentDefaultType]: createPortDefault(),
  });

  constructor() {
    makeAutoObservable(this);
  }

  get portVisualComponents() {
    return this._portVisualComponents;
  }

  import = (obj?: IPortsSettings) => {
    this.portVisualComponents.import({
      components: obj?.portComponents,
      defaultType: obj?.portDefaultType,
    });
  };
}

export interface IPortVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<PortState, TSettings> {}

export interface IPortsSettings {
  portComponents: IVisualComponentsObject<IPortVisualComponentProps>['components'];
  portDefaultType: IVisualComponentsObject<IPortVisualComponentProps>['defaultType'];
}
