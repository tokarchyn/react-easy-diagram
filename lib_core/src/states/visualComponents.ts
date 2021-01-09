import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { componentDefaultType, Dictionary } from '../types/common';

export class VisualComponents<
  TEntity,
  TComponentProps extends IVisualComponentProps<TEntity>
> {
  defaultType: string = componentDefaultType;
  defaultComponents: Dictionary<
    IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
  >;
  components: Dictionary<IComponentDefinition<TComponentProps>>;

  constructor(
    defaultComponents: Dictionary<
      IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
    >
  ) {
    this.defaultComponents = defaultComponents;
    this.initDefaultComponents();
    makeAutoObservable(this);
  }

  fromJson = (
    obj: IVisualComponentsObject<TComponentProps>,
    initDefaultComponents: boolean = true
  ) => {
    this.defaultType = obj.defaultNodeType ?? componentDefaultType;

    if (initDefaultComponents) {
      this.initDefaultComponents();
    } else {
      this.components = {};
    }

    this.addComponentsFromJson(obj.components);
  };

  getComponent = (
    type: string | undefined | null
  ): IComponentDefinition<TComponentProps> => {
    const finalComponentType = type ?? this.defaultType;
    return (
      this.components[finalComponentType] ?? this.components[this.defaultType]
    );
  };

  private initDefaultComponents() {
    this.components = {};
    this.addComponentsFromJson(this.defaultComponents);
  }

  private addComponentsFromJson(components: Dictionary<
    IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
  >) {
    Object.entries(components).forEach(([key, value]) => {
      if ('component' in value) {
        this.components[key] = {
          component: observer(value.component),
          settings: value.settings,
        };
      } else {
        this.components[key] = {
          component: observer(value),
        };
      }
    });
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
