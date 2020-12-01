import { Dictionary, Point } from '../types/common';
import { atom } from 'recoil';
import { libraryPrefix } from './common';
import { defaultLinkType, LinkState } from './linkState';
import { LinkStateExtended } from '../hooks/linkHooks';
import { simpleLinkPathConstructor } from '../linkConstructors/simple';
import { ILinkDefaultSettings, LinkDefault } from '../components/LinkDefault';

export const diagramTranslateState = atom<Point>({
  key: `${libraryPrefix}_DiagramTranslate`,
  default: {
    x: 0,
    y: 0,
  },
  // effects_UNSTABLE: [
  //   ({onSet}) => {
  //     onSet(newState => {
  //       console.debug("Current diagram transformation:");
  //       console.debug(newState);
  //     });
  //   },
  // ],
});

export const diagramScaleState = atom<number>({
  key: `${libraryPrefix}_DiagramScale`,
  default: 1,
});

export const diagramSettingsState = atom<DiagramSettings>({
  key: `${libraryPrefix}_DiagramSettings`,
  default: {
    readonly: false
  },
});

export interface DiagramSettings {
  readonly: boolean; // TODO: allow to make readonly specific components, such as nodes, links.
}