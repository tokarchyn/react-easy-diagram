import { INodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { isSuccess } from 'utils/result';

export const addNodeCommand = (node: INodeState) => ({
  execute(rootStore: RootStore) {
    const result = rootStore.nodesStore.addNode(node, false);
    if (isSuccess(result)) {
      rootStore.selectionState.select(result.value, true);
    }
  },
});
