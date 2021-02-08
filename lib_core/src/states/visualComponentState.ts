import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

export class VisualComponentState<TComponentProps> {
  component: VisualComponent<TComponentProps>;
  settings: object = {};

  constructor(
    newComponent:
      | IComponentDefinition<TComponentProps>
      | VisualComponent<TComponentProps>
  ) {
    this.import(newComponent);
    makeAutoObservable(this);
  }

  import(
    newComponent:
      | IComponentDefinition<TComponentProps>
      | VisualComponent<TComponentProps>
  ) {
    if ('component' in newComponent) {
      this.component = observer(newComponent.component);
      this.settings = newComponent.settings ?? {};
    } else {
      this.component = observer(newComponent);
      this.settings = {};
    }
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
