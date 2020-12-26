import { LinkStateExtended } from '../hooks/linkHooks';
import { getEndpointPoint } from './common';

export function simpleLinkPathConstructor(state: LinkStateExtended): string {
  const fromPoint = getEndpointPoint(state.source);
  const toPoint = getEndpointPoint(state.target);
  const path = `M ${fromPoint[0]} ${fromPoint[1]}, ${toPoint[0]} ${toPoint[1]}`;

  return path;
}