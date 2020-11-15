import { atom, atomFamily } from "recoil";

export interface Point {
  x: number;
  y: number;
}

export interface NodeState {
  id: string;
  position: Point;
}

export const nodesIdsState = atom<string[]>({
  key: "nodesIds",
  default: [],
});

export const nodeWithIdState = atomFamily<NodeState, string>({
  key: `node`,
  default: (id) => ({ id: id, position: { x: 0, y: 0 } }),
});

export const diagramTranslateState = atom<Point>({
  key: "diagramTranslate",
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
  key: "diagramScale",
  default: 1,
});
