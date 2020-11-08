import { atom, atomFamily, selector } from "recoil";

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

export interface Transformation {
  scale: number;
  translation: {
    x: number;
    y: number;
  };
}

export const diagramTransformationState = atom<Transformation>({
  key: "diagram",
  default: {
    scale: 1,
    translation: {
      x: 0,
      y: 0,
    },
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

export const diagramScaleState = selector({
  key: "diagramScale",
  get: ({ get }) => {
    const diagramTransformation = get(diagramTransformationState);
    return diagramTransformation.scale;
  },
});
