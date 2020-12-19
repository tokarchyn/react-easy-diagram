import {
  LinkStateExtended,
} from '../hooks/linkHooks';
import { getEndpointPoint } from './common';

function curvedLinkPathConstructorInner(
  state: LinkStateExtended,
  settings: ICurvedLinkPathConstructorSettings
): string {
  const fromPoint = getEndpointPoint(state.source);
  const toPoint = getEndpointPoint(state.target);
  const path = `M ${fromPoint.x} ${fromPoint.y}, ${toPoint.x} ${toPoint.y}`;

  return path;
}

export interface ICurvedLinkPathConstructorSettings {}

const defualtSettings: ICurvedLinkPathConstructorSettings = {};

export function curvedLinkPathConstructor(
  settings?: ICurvedLinkPathConstructorSettings
) {
  return (state: LinkStateExtended) =>
    curvedLinkPathConstructorInner(
      state,
      settings ? { ...defualtSettings, ...settings } : defualtSettings
    );
}
