import { LinkState } from 'states/linkState';
import { RootStore } from 'states/rootStore';

export const removeSelectedCommand = {
  execute(rootStore: RootStore) {
    removeSelectedNodesCommand.execute(rootStore);
    removeSelectedLinksCommand.execute(rootStore);
  },
};

export const removeSelectedNodesCommand = {
  execute(rootStore: RootStore) {
    rootStore.selectionState.selectedNodes.forEach((node) => {
      rootStore.nodesStore.removeNode(node.id);
    });
  },
};

export const removeSelectedLinksCommand = {
  execute(rootStore: RootStore) {
    rootStore.selectionState.selectedItems
      .filter((i) => i instanceof LinkState)
      .forEach((link: LinkState) => {
        rootStore.linksStore.removeLink(link.id);
      });
  },
};
