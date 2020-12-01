import { atom } from 'recoil';
import { ILinkDefaultSettings, LinkDefault } from '../components/LinkDefault';
import { LinkStateExtended } from '../hooks/linkHooks';
import { simpleLinkPathConstructor } from '../linkConstructors/simple';
import { Dictionary } from '../types/common';
import { libraryPrefix } from './common';
import { defaultLinkType } from './linkState';

export const linksSettingsState = atom<LinksSettings>({
  key: `${libraryPrefix}_LinksSettings`,
  default: {
    defaultLinkType: defaultLinkType,
    linkTypeToComponent: {
      default: LinkDefault,
    },
    linkTypeToPathConstructor: {
      simple: simpleLinkPathConstructor,
    },
    pathConstructorsSettings: {},
    linkComponentsSettings: {},
  },
});

export type LinkPathConstructor = (state: LinkStateExtended) => string;

export interface ILinkComponentProps<TSettings = object> {
  path: string;
  settings?: TSettings;
}

export interface IPathConstructorsSettings {
  simple?: object;
  curved?: object;
  [key: string]: object | undefined;
}

export interface ILinkComponentsSettings {
  default?: ILinkDefaultSettings;
  [key: string]: object | undefined;
}

export interface LinksSettings {
  defaultLinkType: string;
  linkTypeToComponent: Dictionary<
    React.ForwardRefExoticComponent<
      ILinkComponentProps & React.RefAttributes<any>
    >
  >;
  linkTypeToPathConstructor: Dictionary<LinkPathConstructor>;
  pathConstructorsSettings: IPathConstructorsSettings;
  linkComponentsSettings: ILinkComponentsSettings;
}
