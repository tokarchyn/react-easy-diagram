import {
  LinkEndpointExtended,
  LinkNodeEndpointExtended,
} from '../hooks/linkHooks';
import { Point } from '../types/common';

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
    return [
      endpoint.node.position[0] +
        (htmlElem.clientWidth ? htmlElem.clientWidth / 2 : 0),
      endpoint.node.position[1] +
        (htmlElem.clientHeight ? htmlElem.clientHeight / 2 : 0),
    ];
  } else {
    return endpoint.node.position;
  }
}
