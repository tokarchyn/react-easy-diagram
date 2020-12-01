import { Point } from '../types/common';
import {
  LinkEndpointExtended,
  LinkNodeEndpointExtended,
  LinkStateExtended,
} from '../hooks/linkHooks';
import { getEndpointPoint } from './simple';

export function curvedLinkPathConstructor(state: LinkStateExtended): string {
  const fromPoint = getEndpointPoint(state.source);
  const toPoint = getEndpointPoint(state.target);
  const path = `M ${fromPoint.x} ${fromPoint.y}, ${toPoint.x} ${toPoint.y}`;

  return path;
}
