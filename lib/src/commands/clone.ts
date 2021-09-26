import { INodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { addPoints } from 'utils/point';

export const cloneSelectedNodesCommand = {
  execute(rootStore: RootStore) {
    rootStore.selectionState.selectedNodes.forEach((node) => {
      const nodeObj = node.export() as INodeState;
      nodeObj.id = undefined;
      nodeObj.label = nodeObj.label;
      nodeObj.position = addPoints(nodeObj.position, [50, 50]);
      rootStore.nodesStore.addNode(nodeObj, false);
    });
  },
};
