import { useRecoilState } from "recoil";
import { nodeWithIdState } from "../states/nodeState";

export const useNodeState = (id: string) => useRecoilState(nodeWithIdState(id));