import { Point } from '../types/common';
import { atom, DefaultValue, selector } from 'recoil';
import { libraryPrefix } from './common';
import { ITransformation } from '../utils';

export const diagramTranslateState = atom<Point>({
  key: `${libraryPrefix}_DiagramTranslate`,
  default: [0,0]
});

export const diagramScaleState = atom<number>({
  key: `${libraryPrefix}_DiagramScale`,
  default: 1,
});

export const diagramTransformationState = selector<ITransformation>({
  key: `${libraryPrefix}_DiagramTransformation`,
  get: ({ get }) => {
    const scale = get(diagramScaleState);
    const translate = get(diagramTranslateState);
    return { scale, position: translate };
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
    } else {
      set(diagramScaleState, newValue.scale);
      set(diagramTranslateState, newValue.position);
    }
  },
});

export const commonSettingsState = atom<ICommonSettings>({
  key: `${libraryPrefix}_CommonSettings`,
  default: {
    readonly: false,
  },
});

export interface ICommonSettings {
  readonly: boolean; // TODO: allow to make readonly specific components, such as nodes, links.
}
