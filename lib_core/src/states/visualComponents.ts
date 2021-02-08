import { makeAutoObservable } from 'mobx';
import {
  IComponentDefinition,
  IVisualComponentProps,
  VisualComponent,
  VisualComponentState,
} from '.';
import { Dictionary } from '../types/common';

export class VisualComponents<
  TEntity,
  TComponentProps extends IVisualComponentProps<TEntity>
> {
  defaultType: string = componentDefaultType;
  defaultComponents: Dictionary<VisualComponentState<TComponentProps>>;
  components: Dictionary<VisualComponentState<TComponentProps>>;

  constructor(
    defaultComponents: Dictionary<
      IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
    >
  ) {
    this.defaultComponents = this.createComponentCollection(defaultComponents);
    this.components = { ...this.defaultComponents };
    makeAutoObservable(this);
  }

  import = (obj?: IVisualComponentsObject<TComponentProps>) => {
    this.defaultType = obj?.defaultNodeType ?? componentDefaultType;

    this.components = {
      ...this.defaultComponents,
      ...this.createComponentCollection(obj?.components),
    };
  };

  getComponent = (
    type: string | undefined | null
  ): VisualComponentState<TComponentProps> => {
    const finalComponentType = type ?? this.defaultType;
    return (
      this.components[finalComponentType] ?? this.components[this.defaultType]
    );
  };

  private createComponentCollection(
    componentsObjects?: Dictionary<
      IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
    >
  ): Dictionary<VisualComponentState<TComponentProps>> {
    const collection: Dictionary<VisualComponentState<TComponentProps>> = {};

    componentsObjects &&
      Object.entries(componentsObjects).forEach(([key, value]) => {
        collection[key] = new VisualComponentState<TComponentProps>(value);
      });

    return collection;
  }
}

export const componentDefaultType = 'default';

export interface IVisualComponentsObject<TComponentProps> {
  defaultNodeType?: string;
  components: Dictionary<
    IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
  >;
}
