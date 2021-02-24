import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

export class VisualComponentState<TComponentProps> {
  private _component: VisualComponent<TComponentProps>;
  private _settings: object = {};

  constructor(
    component:
      | IComponentDefinition<TComponentProps>
      | VisualComponent<TComponentProps>
  ) {
    this.import(component);
    makeAutoObservable(this);
  }

  import = (
    newComponent:
      | IComponentDefinition<TComponentProps>
      | VisualComponent<TComponentProps>
  ) => {
    if ('component' in newComponent) {
      this._component = observer(newComponent.component);
      this._settings = newComponent.settings ?? {};
    } else {
      this._component = observer(newComponent);
      this._settings = {};
    }
  };

  get component() {
    return this._component;
  }
  get settings() {
    return this._settings;
  }
}

export interface IVisualComponentProps<TEntity, TSettings extends {} = {}> {
  entity: TEntity;
  settings?: TSettings;
}

export type VisualComponent<
  TComponentProps
> = React.FunctionComponent<TComponentProps>;

export interface IComponentDefinition<
  TComponentProps,
  TSettings extends {} = {}
> {
  component: VisualComponent<TComponentProps>;
  settings?: TSettings;
}
