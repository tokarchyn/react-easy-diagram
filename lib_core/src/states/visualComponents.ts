import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { componentDefaultType, Dictionary } from '../types/common';

export class VisualComponents<
  TEntity,
  TComponentProps extends IVisualComponentProps<TEntity>
> {
  defaultType: string = componentDefaultType;
  defaultComponent: VisualComponent<TComponentProps>;
  components: Dictionary<IComponentDefinition<TComponentProps>>;

  constructor(defaultComponent: VisualComponent<TComponentProps>) {
    this.defaultComponent = defaultComponent;
    this.initDefaultComponents();
    makeAutoObservable(this);
  }

  fromJson = (obj: IVisualComponentsObject<TComponentProps>) => {
    this.defaultType = obj.defaultNodeType ?? componentDefaultType;
    this.initDefaultComponents();
    Object.entries(obj.components).forEach(([key, value]) => {
      if ('component' in value) {
        this.components[key] = {
          component: value.component,
          // component: observer(value.component),
          settings: value.settings,
        };
      } else {
        this.components[key] = {
          component: value,
          // component: observer(value),
        };
      }
    });
  }

  getComponent = (
    type: string | undefined | null
  ): IComponentDefinition<TComponentProps> => {
    const finalComponentType = type ?? this.defaultType;
    return this.components[finalComponentType] ?? this.components[this.defaultType];
  }

  private initDefaultComponents() {
    this.components = {
      [componentDefaultType]: { component: observer(this.defaultComponent) },
    };
  }
}

export interface IVisualComponentsObject<TComponentProps> {
  defaultNodeType?: string;
  components: Dictionary<
    IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
  >;
}

export interface IComponentDefinition<
  TComponentProps,
  TSettings extends {} = {}
> {
  component: VisualComponent<TComponentProps>;
  settings?: TSettings;
}

export interface IVisualComponentProps<TEntity, TSettings extends {} = {}> {
  entity: TEntity;
  settings?: TSettings;
}

export type VisualComponent<
  TComponentProps
> = React.FunctionComponent<TComponentProps>;
