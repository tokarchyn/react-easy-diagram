import { Dictionary, Point } from '../types/common';
import { MutableRefObject } from 'react';
import { atom, atomFamily } from 'recoil';
import { libraryPrefix } from './common';

export const nodesIdsState = atom<string[]>({
  key: `${libraryPrefix}_NodesIds`,
  default: [],
});

export const defaultNodeType = 'default';
export const defaultPortType = 'default';

export const nodeWithIdState = atomFamily<NodeState, string>({
  key: `${libraryPrefix}_Node`,
  default: (id) => ({
    id: id,
    position: [0,0],
    type: defaultNodeType,
  }),
});

export interface NodeState {
  id: string;
  position: Point;
  ports?: Dictionary<Port>;
  ref?: MutableRefObject<HTMLDivElement | null>;
  type?: string;
  extra?: any;
}

export interface Port {
  id: string;
  label?: string;
  type?: string;
}

export interface NodeInitState
  extends Omit<NodeState, 'ref'> {}
