import { LinkStateExtended } from '../hooks/linkHooks';
import { getEndpointPoint } from './common';

export function simpleLinkPathConstructor(state: LinkStateExtended): string {
  const fromPoint = getEndpointPoint(state.source);
  const toPoint = getEndpointPoint(state.target);
  const path = `M ${fromPoint.x} ${fromPoint.y}, ${toPoint.x} ${toPoint.y}`;

  return path;
}