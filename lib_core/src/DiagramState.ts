import { MutableRefObject } from 'react';
import { atom, atomFamily } from 'recoil';

const libraryPrefix = 'reactEasyDiagram';

export const nodesIdsState = atom<string[]>({
  key: `${libraryPrefix}_NodesIds`,
  default: [],
});

export const nodeWithIdState = atomFamily<NodeState, string>({
  key: `${libraryPrefix}_Node`,
  default: (id) => ({ id: id, position: { x: 0, y: 0 } }),
});

export const linksIdsState = atom<string[]>({
  key: `${libraryPrefix}_LinksIds`,
  default: [],
});

export const linkWithIdState = atomFamily<LinkState, string>({
  key: `${libraryPrefix}_Link`,
  default: (id) => ({ id: id }),
});

export const diagramTranslateState = atom<Point>({
  key: `${libraryPrefix}_DiagramTranslate`,
  default: {
    x: 0,
    y: 0,
  },
  // effects_UNSTABLE: [
  //   ({onSet}) => {
  //     onSet(newState => {
  //       console.debug("Current diagram transformation:");
  //       console.debug(newState);
  //     });
  //   },
  // ],
});

export const diagramScaleState = atom<number>({
  key: `${libraryPrefix}_DiagramScale`,
  default: 1,
});

export interface Dictionary<TValue> {
  [key: string]: TValue;
}

export interface Point {
  x: number;
  y: number;
}

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

export interface LinkSegment {
  position: Point;
}

export interface LinkNodeTarget {
  nodeId: string;
  portId?: string;
}

export interface LinkPointTarget {
  position: Point;
}

export type LinkTarget = LinkNodeTarget | LinkPointTarget;

export interface LinkState {
  id: string;
  from?: LinkTarget;
  to?: LinkTarget;
  segments?: LinkSegment[];
}

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface LinkInit extends Optional<LinkState, 'id'> { }
