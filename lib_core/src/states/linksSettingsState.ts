import { atom } from 'recoil';
import { LinkDefault } from '../components/LinkDefault';
import { LinkStateExtended } from '../hooks/linkHooks';
import { simpleLinkPathConstructor } from '../linkConstructors/simple';
import { Dictionary } from '../types/common';
import { libraryPrefix } from './common';
import { defaultLinkType } from './linkState';

export const linksSettingsState = atom<ILinksSettings>({
  key: `${libraryPrefix}_LinksSettings`,
  default: {
    defaultLinkType: defaultLinkType,
    linkComponents: {
      default: LinkDefault,
    },
    pathConstructor: simpleLinkPathConstructor,
  },
});

export interface ILinksSettings {
  defaultLinkType: string;
  linkComponents: Dictionary<LinkComponent | ILinkComponentWithSettings>;
  pathConstructor: ILinkPathConstructor;
}

export type LinkComponent<TSettings = {}> = React.ForwardRefExoticComponent<
  ILinkComponentProps<TSettings> & React.RefAttributes<any>
>;

export interface ILinkComponentWithSettings<TSettings = {}> {
  component: LinkComponent<TSettings>;
  settings: TSettings;
}

export interface ILinkComponentProps<TSettings = {}> {
  path: string;
  settings?: TSettings;
}

export type ILinkPathConstructor = (state: LinkStateExtended) => string;
