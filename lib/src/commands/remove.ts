import { RootStore } from 'states/rootStore';

export const removeSelectedCommand = {
  execute(rootStore: RootStore) {
    removeSelectedLinksCommand.execute(rootStore);
    removeSelectedNodesCommand.execute(rootStore);
  },
};

export const removeSelectedNodesCommand = {
  execute(rootStore: RootStore) {
    rootStore.nodesStore.removeNodes(
      rootStore.selectionState.selectedNodes.map((n) => n.id)
    );
  },
};

export const removeSelectedLinksCommand = {
  execute(rootStore: RootStore) {
    rootStore.linksStore.removeLinks(
      rootStore.selectionState.selectedLinks.map((n) => n.id)
    );
  },
};
