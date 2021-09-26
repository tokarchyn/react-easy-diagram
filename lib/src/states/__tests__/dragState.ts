import { ICallbacks } from 'states/callbacks';
import { INodeState, NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { Point } from 'utils/point';
import { SuccessOrErrorResult, SuccessResult } from 'utils/result';

describe('Drag state', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
  });

  test('Import new nodes', () => {
    

  });

  test('Import new nodes', () => {
    const nodes: INodeState[] = [
      { id: 'first', position: [0, 10] },
      { id: 'first', position: [10, 20] },
      { position: [100, 110] },
    ];

    store.nodesStore.import(nodes);

    expect(store.nodesStore.nodes.size).toBe(2);

    const callbackCalls = mockNodesAddedCallback.mock.calls;
    expect(callbackCalls.length).toBe(1);
    expect(callbackCalls[0][2]).toBe(true);
    expect(callbackCalls[0][3]).toBe(store);

    const addedNodes = callbackCalls[0][0];
    expect(addedNodes.length).toBe(2);
    expect(addedNodes[0].position).toEqual([0, 10]);
    expect(addedNodes[1].position).toEqual([100, 110]);

    const failedToAdd = callbackCalls[0][1];
    expect(failedToAdd.length).toBe(1);
    expect(failedToAdd[0].success).toBe(false);
    expect(failedToAdd[0].value).toBe(nodes[1]);
  });
});
