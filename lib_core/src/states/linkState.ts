import { Point } from '../types/common';
import { atom, atomFamily } from 'recoil';
import { libraryPrefix } from './common';

export const linksIdsState = atom<string[]>({
  key: `${libraryPrefix}_LinksIds`,
  default: [],
});

export const linkWithIdState = atomFamily<LinkState, string>({
  key: `${libraryPrefix}_Link`,
  default: (id) => ({ id: id, type: defaultLinkType }),
});

export const defaultLinkType = 'simple';

export interface LinkSegment {
  position: Point;
}

export interface LinkNodeEndpoint {
  nodeId: string;
  portId?: string;
}

export interface LinkPointEndpoint {
  position: Point;
}

export type LinkEndpoint = LinkNodeEndpoint | LinkPointEndpoint;

export interface LinkState {
  id: string;
  type: string;
  source?: LinkEndpoint;
  target?: LinkEndpoint;
  segments?: LinkSegment[];
}

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface LinkInitState extends Optional<LinkState, 'id'|'type'> {}
