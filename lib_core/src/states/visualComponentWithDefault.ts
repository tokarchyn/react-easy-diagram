import { makeAutoObservable } from 'mobx';
import {
  IComponentDefinition,
  VisualComponent,
  VisualComponentState,
} from 'states/visualComponentState';

export class VisualComponentWithDefault<TComponentProps> {
  private _innerComponent: VisualComponentState<TComponentProps>;
  private _defaultComponent: VisualComponentState<TComponentProps>;

  constructor(defaultComponent: IComponentDefinition<TComponentProps>) {
    this._innerComponent = new VisualComponentState<TComponentProps>(
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
      | IComponentDefinition<TComponentProps>
      | VisualComponent<TComponentProps>
  ) => {
    this._innerComponent = newComponent
      ? new VisualComponentState<TComponentProps>(newComponent)
      : this._defaultComponent;
  };
}
