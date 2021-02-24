import { IVisualComponentsObject, VisualComponents } from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { PortState } from './portState';
import { createPortsContainerDefault } from '../components/PortsContainerDefault';
import { IVisualComponentProps } from './visualComponentState';

export class PortsSettings {
  private _portsContainerVisualComponents: VisualComponents<
    PortState[],
    IPortsContainerVisualComponentProps
  > = new VisualComponents<PortState[], IPortsContainerVisualComponentProps>({
    horizontal: createPortsContainerDefault({ direction: 'horizontal' }),
    vertical: createPortsContainerDefault({ direction: 'vertical' }),
  });

  constructor() {
    makeAutoObservable(this);
  }

  get portsContainerVisualComponents() {
    return this._portsContainerVisualComponents;
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
