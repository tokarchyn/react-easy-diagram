import { makeAutoObservable } from 'mobx';
import { Dictionary } from 'utils/common';
import {
  IVisualComponentProps,
  VisualComponentState,
  IComponentDefinition,
  VisualComponent,
} from 'states/visualComponentState';

export class VisualComponents<
  TSettings,
  TComponentProps
> {
  private _defaultComponents: Dictionary<VisualComponentState<TComponentProps, TSettings>>;
  private _components: Dictionary<VisualComponentState<TComponentProps, TSettings>>;

  constructor(
    defaultComponents: Dictionary<
      IComponentDefinition<TComponentProps, TSettings> | VisualComponent<TComponentProps>
    >
  ) {
    this._defaultComponents = this._createComponentCollection(
      defaultComponents
    );
    this._components = { ...this._defaultComponents };
    makeAutoObservable(this);
  }

  import = (obj?: IVisualComponentsObject<TSettings, TComponentProps>) => {
    this._components = {
      ...this._defaultComponents,
      ...this._createComponentCollection(obj?.components),
    };
  };

  getComponent = (
    type: string | undefined | null
  ): VisualComponentState<TComponentProps, TSettings> => {
    const finalComponentType = type ?? COMPONENT_DEFAULT_TYPE;
    return (
      this._components[finalComponentType] ?? this._components[COMPONENT_DEFAULT_TYPE]
    );
  };

  private _createComponentCollection = (
    componentsObjects?: Dictionary<
      IComponentDefinition<TComponentProps, TSettings> | VisualComponent<TComponentProps>
    >
  ): Dictionary<VisualComponentState<TComponentProps, TSettings>> => {
    const collection: Dictionary<VisualComponentState<TComponentProps, TSettings>> = {};

    componentsObjects &&
      Object.entries(componentsObjects).forEach(([key, value]) => {
        collection[key] = new VisualComponentState<TComponentProps, TSettings>(value);
      });

    return collection;
  };
}

export const COMPONENT_DEFAULT_TYPE = 'default';

export interface IVisualComponentsObject<TSettings, TComponentProps> {
  components?: Dictionary<
    IComponentDefinition<TComponentProps, TSettings> | VisualComponent<TComponentProps>
  >;
}
