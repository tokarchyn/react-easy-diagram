import { Point } from '../types/common';
import {
  LinkEndpointExtended,
  LinkNodeEndpointExtended,
  LinkStateExtended,
} from '../hooks/linkHooks';

export function simpleLinkPathConstructor(state: LinkStateExtended): string {
  const fromPoint = getEndpointPoint(state.source);
  const toPoint = getEndpointPoint(state.target);
  const path = `M ${fromPoint.x} ${fromPoint.y}, ${toPoint.x} ${toPoint.y}`;

  return path;
}

export function getEndpointPoint(endpoint: LinkEndpointExtended): Point {
  if ('node' in endpoint) {
    return getEndpointPointForNode(endpoint);
  } else {
    return endpoint.position;
  }
}

export function getEndpointPointForNode(
  endpoint: LinkNodeEndpointExtended
): Point {
  const htmlElem = endpoint.node?.ref?.current;
  if (htmlElem) {
    return {
      x:
        endpoint.node.position.x +
        (htmlElem.clientWidth ? htmlElem.clientWidth / 2 : 0),
      y:
        endpoint.node.position.y +
        (htmlElem.clientHeight ? htmlElem.clientHeight / 2 : 0),
    };
  } else {
    return endpoint.node.position;
  }
}
