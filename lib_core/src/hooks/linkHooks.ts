import { SetterOrUpdater, useRecoilState } from 'recoil';
import { linksSettingsState } from '../states/linksSettingsState';
import {
  LinkEndpoint,
  LinkPointEndpoint,
  LinkState,
  linkWithIdState,
} from '../states/linkState';
import { NodeState, Port } from '../states/nodeState';
import { useNodeState } from './nodeHooks';

export const useLinksSettings = () => useRecoilState(linksSettingsState);

export const useLinkState = (id: string) => useRecoilState(linkWithIdState(id));

// Use recoil selector instead
export const useLinkStateExtended = (
  id: string
): [LinkStateExtended, SetterOrUpdater<LinkState>] => {
  const [link, setLink] = useLinkState(id);

  const [sourceNode] = useNodeState(getNodeIdForLinkEndpoint(link.source));
  const [targetNode] = useNodeState(getNodeIdForLinkEndpoint(link.target));

  return [
    {
      link,
      source: {
        node: sourceNode,
      },
      target: {
        node: targetNode,
      },
    },
    setLink,
  ];
};

export interface LinkNodeEndpointExtended {
  node: NodeState;
  port?: Port;
}

export type LinkEndpointExtended = LinkNodeEndpointExtended | LinkPointEndpoint;

export interface LinkStateExtended {
  link: LinkState;
  source: LinkEndpointExtended;
  target: LinkEndpointExtended;
}

const getNodeIdForLinkEndpoint = (target?: LinkEndpoint): string => {
  if (!target) {
    return '';
  }
  if ('nodeId' in target) {
    return target.nodeId;
  } else {
    return '';
  }
};
