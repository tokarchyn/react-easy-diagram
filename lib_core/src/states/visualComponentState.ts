import { IComponentDefinition, VisualComponent } from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

export class VisualComponentState<TComponentProps> {
  component: VisualComponent<TComponentProps>;
  settings: object = {};

  private _default: IComponentDefinition<TComponentProps>;

  constructor(defaultComponent: IComponentDefinition<TComponentProps>) {
    this._default = defaultComponent;
    this.resetToDefault();
    makeAutoObservable(this);
  }

  fromJson(
    newComponent?:
      | IComponentDefinition<TComponentProps>
      | VisualComponent<TComponentProps>
  ) {
    if (newComponent) {
      if ('component' in newComponent) {
        this.component = observer(newComponent.component);
        this.settings = newComponent.settings ?? {};
      }
      else {
        this.component = observer(newComponent);
        this.settings = {};
      }
    } else {
      this.resetToDefault();
    }
  }

  resetToDefault() {
    this.component = observer(this._default.component);
    this.settings = this._default.settings ?? {};
  }
}
