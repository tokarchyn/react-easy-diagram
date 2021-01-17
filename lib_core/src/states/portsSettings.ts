import {
  IVisualComponentProps,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { PortState } from './portState';
import { createPortsContainerDefault } from '../components/PortsContainerDefault';

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

  fromJson = (obj: IPortsSettings) => {
    obj.portsContainerComponents &&
      this.portsContainerVisualComponents.fromJson(
        obj.portsContainerComponents
      );
  };
}

export interface IPortsContainerVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<PortState[], TSettings> {}

export interface IPortsSettings {
  portsContainerComponents: IVisualComponentsObject<IPortsContainerVisualComponentProps>;
}
