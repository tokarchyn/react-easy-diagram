import {
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { PortState } from './portState';
import { createPortsContainerDefault } from '../components/PortsContainerDefault';
import { IVisualComponentProps } from './visualComponentState';

export class PortsSettings {
  portsContainerVisualComponents: VisualComponents<
    PortState[],
    IPortsContainerVisualComponentProps
  > = new VisualComponents<PortState[], IPortsContainerVisualComponentProps>({
    horizontal: createPortsContainerDefault({ direction: 'horizontal' }),
    vertical: createPortsContainerDefault({ direction: 'vertical' }),
  });

  constructor() {
    makeAutoObservable(this);
  }

  import = (obj?: IPortsSettings) => {
    this.portsContainerVisualComponents.import(obj?.portsContainerComponents);
  };
}

export interface IPortsContainerVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<PortState[], TSettings> {}

export interface IPortsSettings {
  portsContainerComponents: IVisualComponentsObject<IPortsContainerVisualComponentProps>;
}
