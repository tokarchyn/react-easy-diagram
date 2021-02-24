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
  private _defaultType: string = componentDefaultType;
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
    this.setDefaultType(obj?.defaultNodeType);

    this._components = {
      ...this._defaultComponents,
      ...this._createComponentCollection(obj?.components),
    };
  };

  getComponent = (
    type: string | undefined | null
  ): VisualComponentState<TComponentProps> => {
    const finalComponentType = type ?? this.defaultType;
    return (
      this._components[finalComponentType] ?? this._components[this.defaultType]
    );
  };

  get defaultType() {
    return this._defaultType;
  }

  setDefaultType = (value: string | undefined | null) => {
    this._defaultType = value ?? componentDefaultType;
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

export const componentDefaultType = 'default';

export interface IVisualComponentsObject<TComponentProps> {
  defaultNodeType?: string;
  components: Dictionary<
    IComponentDefinition<TComponentProps> | VisualComponent<TComponentProps>
  >;
}
