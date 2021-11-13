import { useContext } from "react";
import { RootStoreContext } from "components/DiagramContext";
import { RootStore } from "states/rootStore";

export const useRootStore = () => useContext(RootStoreContext) as RootStore;