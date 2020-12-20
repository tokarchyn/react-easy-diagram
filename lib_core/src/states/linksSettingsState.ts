import { atom, selector, selectorFamily } from 'recoil';
import { LinkDefault } from '../components/LinkDefault';
import { LinkStateExtended } from '../hooks/linkHooks';
import { simpleLinkPathConstructor } from '../linkConstructors/simple';
import { Dictionary } from '../types/common';
import { libraryPrefix } from './common';
import { defaultLinkType } from './linkState';

export const linksSettingsState = atom<ILinksSettingsInternal>({
  key: `${libraryPrefix}_LinksSettings`,
  default: {
    defaultLinkType: defaultLinkType,
    linkComponents: {
      default: LinkDefault,
    },
    pathConstructor: simpleLinkPathConstructor,
  },
});

export const linkComponentDefinitionState = selectorFamily<
  ILinkComponentDefinition,
  string | undefined
>({
  key: `${libraryPrefix}_LinkComponentDefinition`,
  get: (componentType) => ({ get }) => {
    const settings = get(linksSettingsState);
    componentType = componentType ?? defaultLinkType;
    
    const componentDefinition =
      componentType in settings.linkComponents
        ? settings.linkComponents[componentType]
        : settings.linkComponents[defaultLinkType];

    return 'component' in componentDefinition
      ? componentDefinition
      : {
          component: componentDefinition,
        };
  },
});

export const linkPathConstructorState = selector<ILinkPathConstructor>({
  key: `${libraryPrefix}_LinkPathContructor`,
  get: ({ get }) => {
    const settings = get(linksSettingsState);
    return settings.pathConstructor;
  },
});

export interface ILinksSettingsInternal {
  defaultLinkType: string;
  linkComponents: Dictionary<LinkComponent | ILinkComponentDefinition>;
  pathConstructor: ILinkPathConstructor;
}

export interface ILinksSettings extends Partial<ILinksSettingsInternal> {}

export type LinkComponent<TSettings = {}> = React.ForwardRefExoticComponent<
  ILinkComponentProps<TSettings> & React.RefAttributes<any>
>;

export interface ILinkComponentDefinition<TSettings = {}> {
  component: LinkComponent<TSettings>;
  settings?: TSettings;
}

export interface ILinkComponentProps<TSettings = {}> {
  path: string;
  settings?: TSettings;
}

export type ILinkPathConstructor = (state: LinkStateExtended) => string;
