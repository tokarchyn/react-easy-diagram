import { useContext } from "react";
import { RootStoreContext } from "../components/Diagram";
import { RootStore } from "../states/rootStore";

export const useRootStore = () => useContext(RootStoreContext) as RootStore;