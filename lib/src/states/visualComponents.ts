import { makeAutoObservable } from 'mobx';
import { Dictionary } from 'utils/common';
import {
  IVisualComponentProps,
  VisualComponentState,
  IComponentDefinition,
  VisualComponent,
} from 'states/visualComponentState';

export class VisualComponents<
  TEntity,
  TComponentProps extends IVisualComponentProps<TEntity>
> {
  private _defaultComponents: Dictionary<VisualComponentState<TComponentProps>>;
  private _components: Dictionary<VisualComponentState<TComponentProps>>;

  constructor(
    defaultComponents: Dictionary<
      IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
    >
  ) {
    this._defaultComponents = this._createComponentCollection(
      defaultComponents
    );
    this._components = { ...this._defaultComponents };
    makeAutoObservable(this);
  }

  import = (obj?: IVisualComponentsObject<TComponentProps>) => {
    this._components = {
      ...this._defaultComponents,
      ...this._createComponentCollection(obj?.components),
    };
  };

  getComponent = (
    type: string | undefined | null
  ): VisualComponentState<TComponentProps> => {
    const finalComponentType = type ?? COMPONENT_DEFAULT_TYPE;
    return (
      this._components[finalComponentType] ?? this._components[COMPONENT_DEFAULT_TYPE]
    );
  };

  private _createComponentCollection = (
    componentsObjects?: Dictionary<
      IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
    >
  ): Dictionary<VisualComponentState<TComponentProps>> => {
    const collection: Dictionary<VisualComponentState<TComponentProps>> = {};

    componentsObjects &&
      Object.entries(componentsObjects).forEach(([key, value]) => {
        collection[key] = new VisualComponentState<TComponentProps>(value);
      });

    return collection;
  };
}

export const COMPONENT_DEFAULT_TYPE = 'default';

export interface IVisualComponentsObject<TComponentProps> {
  components?: Dictionary<
    IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
  >;
}
