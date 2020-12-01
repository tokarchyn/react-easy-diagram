import { Dictionary, Point } from '../types/common';
import { MutableRefObject } from 'react';
import { atom, atomFamily } from 'recoil';
import { libraryPrefix } from './common';

export const nodesIdsState = atom<string[]>({
  key: `${libraryPrefix}_NodesIds`,
  default: [],
});

export const nodeWithIdState = atomFamily<NodeState, string>({
  key: `${libraryPrefix}_Node`,
  default: (id) => ({ id: id, position: { x: 0, y: 0 } }),
});

export interface Port {
  id: string;
}

export interface NodeState {
  id: string;
  position: Point;
  ports?: Dictionary<Port>;
  ref?: MutableRefObject<HTMLDivElement | null>;
}

export interface NodeInit extends Omit<NodeState, 'ref'> {}