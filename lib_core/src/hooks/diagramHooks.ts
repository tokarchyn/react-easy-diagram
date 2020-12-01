import { DiagramApi } from "..";
import { useNotifyRef } from "./useNotifyRef";
import { useRecoilState } from "recoil";
import { diagramSettingsState } from "../states/diagramState";

export const useDiagramRef = () => useNotifyRef<DiagramApi>();

export const useDiagramSettingsState = () => useRecoilState(diagramSettingsState);