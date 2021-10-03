import { makeAutoObservable } from 'mobx';
import { createPortInnerDefault } from 'components/port/PortInnerDefault';
import { PortState } from 'states/portState';
import {
  VisualComponents,
  componentDefaultType,
  IVisualComponentsObject,
} from 'states/visualComponents';
import { IVisualComponentProps } from 'states/visualComponentState';

export class PortsSettings {
  private _portVisualComponents: VisualComponents<
    PortState,
    IPortVisualComponentProps
  > = new VisualComponents<PortState, IPortVisualComponentProps>({
    [componentDefaultType]: createPortInnerDefault(),
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

export interface IPortVisualComponentProps<TSettings = any>
  extends IVisualComponentProps<PortState, TSettings> {}

export interface IPortsSettings {
  portComponents?: IVisualComponentsObject<IPortVisualComponentProps>['components'];
  portDefaultType?: IVisualComponentsObject<IPortVisualComponentProps>['defaultType'];
}
