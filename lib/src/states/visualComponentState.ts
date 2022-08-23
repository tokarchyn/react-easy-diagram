import {
  action,
  computed,
  makeObservable,
  observable,
} from 'mobx';

export class VisualComponentState<TComponentProps, TSettings> {
  private _component: VisualComponent<TComponentProps>;
  private _settings: TSettings | null = null;

  constructor(
    component:
      | IComponentDefinition<TComponentProps, TSettings>
      | VisualComponent<TComponentProps>
  ) {
    this.import(component);
    makeObservable<VisualComponentState<TComponentProps, TSettings>, '_component' | '_settings'>(this, {
      _component: observable.ref,
      _settings: observable.ref,
      component: computed,
      settings: computed,
      import: action,
    });
  }

  import = (
    newComponent:
      | IComponentDefinition<TComponentProps, TSettings>
      | VisualComponent<TComponentProps>
  ) => {
    if ('component' in newComponent) {
      this._component = newComponent.component;
      this._settings = newComponent.settings ?? null;
    } else {
      this._component = newComponent;
      this._settings = null;
    }
  };

  get component() {
    return this._component;
  }
  get settings() {
    return this._settings;
  }
}

export interface IVisualComponentProps<TEntity, TSettings> {
  entity: TEntity;
  settings: TSettings | null;
}

export type VisualComponent<
  TComponentProps
> = React.FunctionComponent<TComponentProps>;

export interface IComponentDefinition<TComponentProps, TSettings> {
  component: VisualComponent<TComponentProps>;
  settings?: TSettings;
}
