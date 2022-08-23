import { makeAutoObservable } from 'mobx';
import {
  IComponentDefinition,
  VisualComponent,
  VisualComponentState,
} from 'states/visualComponentState';

export class VisualComponentWithDefault<TComponentProps> {
  private _innerComponent: VisualComponentState<TComponentProps, any>;
  private _defaultComponent: VisualComponentState<TComponentProps, any>;

  constructor(defaultComponent: IComponentDefinition<TComponentProps, any>) {
    this._innerComponent = new VisualComponentState<TComponentProps, any>(
      defaultComponent
    );
    this._defaultComponent = this._innerComponent;
    makeAutoObservable(this);
  }

  get component() {
    return this._innerComponent.component;
  }

  get settings() {
    return this._innerComponent.settings;
  }

  import = (
    newComponent?:
      | IComponentDefinition<TComponentProps, any>
      | VisualComponent<TComponentProps>
  ) => {
    this._innerComponent = newComponent
      ? new VisualComponentState<TComponentProps, any>(newComponent)
      : this._defaultComponent;
  };
}
