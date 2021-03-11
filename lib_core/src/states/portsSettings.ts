import {
  componentDefaultType,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { PortState } from './portState';
import { createPortsContainerDefault } from '../components/PortsContainerDefault';
import { IVisualComponentProps } from './visualComponentState';
import { createPortDefault } from '../components/PortDefault';

export class PortsSettings {
  private _portsContainerVisualComponents: VisualComponents<
    PortState[],
    IPortsContainerVisualComponentProps
  > = new VisualComponents<PortState[], IPortsContainerVisualComponentProps>({
    horizontal: createPortsContainerDefault({ direction: 'horizontal' }),
    vertical: createPortsContainerDefault({ direction: 'vertical' }),
  });

  private _portVisualComponents: VisualComponents<
    PortState,
    IPortVisualComponentProps
  > = new VisualComponents<PortState, IPortVisualComponentProps>({
    [componentDefaultType]: createPortDefault(),
  });

  constructor() {
    makeAutoObservable(this);
  }

  get portsContainerVisualComponents() {
    return this._portsContainerVisualComponents;
  }

  get portVisualComponents() {
    return this._portVisualComponents;
  }

  import = (obj?: IPortsSettings) => {
    this.portsContainerVisualComponents.import({
      components: obj?.portsContainerComponents,
    });
    this.portVisualComponents.import({
      components: obj?.portComponents,
      defaultType: obj?.portDefaultType,
    });
  };
}

export interface IPortsContainerVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<PortState[], TSettings> {}

export interface IPortVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<PortState, TSettings> {}

export interface IPortsSettings {
  portsContainerComponents: IVisualComponentsObject<IPortsContainerVisualComponentProps>['components'];
  portComponents: IVisualComponentsObject<IPortVisualComponentProps>['components'];
  portDefaultType: IVisualComponentsObject<IPortVisualComponentProps>['defaultType'];
}
