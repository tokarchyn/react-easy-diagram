import { ICallbacks } from 'states/callbacks';
import { INodeState, NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { Point } from 'utils/point';
import { SuccessOrErrorResult, SuccessResult } from 'utils/result';

describe('Nodes store', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
  });

  describe('Nodes added callback', () => {
    let mockNodesAddedCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['nodesAdded']>>,
      Parameters<NonNullable<ICallbacks['nodesAdded']>>
    >;

    beforeEach(() => {
      mockNodesAddedCallback = jest.fn((a, b, c, d) => {});
      store.callbacks.import({
        nodesAdded: mockNodesAddedCallback,
      });
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

    test('Import should not call callback if there are not any nodes', () => {
      store.nodesStore.import([]);
      expect(mockNodesAddedCallback.mock.calls.length).toBe(0);
    });

    test('Import should not call callback if nodes are not provided', () => {
      store.nodesStore.import();
      expect(mockNodesAddedCallback.mock.calls.length).toBe(0);
    });

    test('Add nodes should call callback', () => {
      store.nodesStore.addNodes([{ position: [0, 10] }], false);

      const callbackCalls = mockNodesAddedCallback.mock.calls;
      expect(callbackCalls.length).toBe(1);
      expect(callbackCalls[0][2]).toBe(false);
      expect(callbackCalls[0][3]).toBe(store);

      const addedNodes = callbackCalls[0][0];
      expect(addedNodes.length).toBe(1);
      expect(addedNodes[0].position).toEqual([0, 10]);

      const failedToAdd = callbackCalls[0][1];
      expect(failedToAdd.length).toBe(0);
    });

    test('Add nodes should not call callback if nodes parameter is empty', () => {
      store.nodesStore.addNodes([], false);
      expect(mockNodesAddedCallback.mock.calls.length).toBe(0);
    });

    test('Add node should call callback', () => {
      store.nodesStore.addNode({ position: [0, 10] }, false);

      const callbackCalls = mockNodesAddedCallback.mock.calls;
      expect(callbackCalls.length).toBe(1);
      expect(callbackCalls[0][2]).toBe(false);
      expect(callbackCalls[0][3]).toBe(store);

      const addedNodes = callbackCalls[0][0];
      expect(addedNodes.length).toBe(1);
      expect(addedNodes[0].position).toEqual([0, 10]);

      const failedToAdd = callbackCalls[0][1];
      expect(failedToAdd.length).toBe(0);
    });

    test('Add existed node should failed', () => {
      store.nodesStore.addNode({ id: 'mynode', position: [0, 10] }, false);

      const nodeToAdd: INodeState = { id: 'mynode', position: [0, 100] };
      const result = store.nodesStore.addNode(nodeToAdd, false);
      
      expect(result.success).toBeFalsy();
      
      const callbackCalls = mockNodesAddedCallback.mock.calls;
      expect(callbackCalls.length).toBe(2);
      expect(callbackCalls[1][2]).toBe(false);
      expect(callbackCalls[1][3]).toBe(store);

      const addedNodes = callbackCalls[1][0];
      expect(addedNodes.length).toBe(0);

      const failedToAdd = callbackCalls[1][1];
      expect(failedToAdd.length).toBe(1);
      expect(failedToAdd[0].value).toBe(nodeToAdd);
    });
  });

  test('Import new nodes should remove previous nodes', () => {
    store.nodesStore.import([{ position: [0, 10] }]);
    store.nodesStore.import([]);
    expect(store.nodesStore.nodes.size).toBe(0);
  });

  test('Add undefined node should failed', () => {
    const result = store.nodesStore.addNode(undefined as any, false);
    expect(store.nodesStore.nodes.size).toBe(0);
    expect(result.success).toBeFalsy();
  });

  test('Remove node', () => {
    store.nodesStore.import([{ position: [0, 10] }]);

    const result = store.nodesStore.removeNode(
      store.nodesStore.nodes.keys().next().value
    );

    expect(result).toBeTruthy();
    expect(store.nodesStore.nodes.size).toBe(0);
  });

  test('Get node', () => {
    store.nodesStore.import([{ id: 'mynode', position: [0, 10] }]);
    const result = store.nodesStore.getNode('mynode');
    expect(result?.id).toBe('mynode');
  });

  test('Get node with undefined id', () => {
    store.nodesStore.import([{ id: 'mynode', position: [0, 10] }]);
    const result = store.nodesStore.getNode(undefined as any);
    expect(result).toBeUndefined();
  });

  test('Remove unexisted node', () => {
    const result = store.nodesStore.removeNode('1');
    expect(result).toBeFalsy();
  });

  test('Export nodes', () => {
    store.nodesStore.import([{ id: 'mynode', position: [0, 10] }]);
    const exported = store.nodesStore.export();
    expect(exported.length).toBe(1);
    expect(exported[0].id).toBe('mynode');
  });

  test('Export nodes when there is not any', () => {
    const exported = store.nodesStore.export();
    expect(exported.length).toBe(0);
  });

  describe('Get nodes bounding box', () => {
    test('Two nodes with sizes', () => {
      store.nodesStore.import([
        { position: [-10, -15] },
        { position: [10, 15] },
      ]);
      const nodes = Array.from(store.nodesStore.nodes.values());
      nodes[0].ref.current = { clientWidth: 100, clientHeight: 100 } as any;
      nodes[1].ref.current = { clientWidth: 100, clientHeight: 100 } as any;

      const box = store.nodesStore.getNodesBoundingBox();

      expect(box.topLeftCorner).toEqual([-10, -15]);
      expect(box.bottomRightCorner).toEqual([110, 115]);
      expect(box.size).toEqual([120, 130]);
    });

    test('Node without html reference', () => {
      store.nodesStore.import([{ position: [-10, -15] }]);

      const box = store.nodesStore.getNodesBoundingBox();

      expect(box.topLeftCorner).toEqual([-10, -15]);
      expect(box.bottomRightCorner).toEqual([-10, -15]);
      expect(box.size).toEqual([0, 0]);
    });

    test('Without nodes', () => {
      const box = store.nodesStore.getNodesBoundingBox();

      expect(box.topLeftCorner).toEqual([0, 0]);
      expect(box.bottomRightCorner).toEqual([100, 100]);
      expect(box.size).toEqual([100, 100]);
    });
  });

  test('Existed node is not rewritten on adding by default', () => {
    store.nodesStore.import([{ id: 'mynode', position: [0, 10] }]);

    const nodeToAdd: INodeState = { id: 'mynode', position: [0, 11] };
    const result = store.nodesStore.addNode(nodeToAdd);

    expect(result.success).toBe(false);
    expect(result.value).toBe(nodeToAdd);
    expect(store.nodesStore.getNode('mynode')?.position).toEqual([0, 10]);
  });

  test('Existed node is not rewritten on adding many nodes by default', () => {
    store.nodesStore.import([{ id: 'mynode', position: [0, 10] }]);

    const nodeToAdd1: INodeState = { id: 'mynode', position: [0, 11] };
    const nodeToAdd2: INodeState = { id: 'mynode2', position: [0, 12] };
    const result = store.nodesStore.addNodes([nodeToAdd1,nodeToAdd2]);

    expect(result.length).toBe(2);

    expect(result[0].success).toBe(false);
    expect(result[0].value).toBe(nodeToAdd1);
    expect(store.nodesStore.getNode('mynode')?.position).toEqual([0, 10]);

    expect(result[1].success).toBe(true);
    const addedNode = store.nodesStore.getNode('mynode2');
    expect(result[1].value).toBe(addedNode);
    expect(addedNode?.position).toEqual([0, 12]);
  });
});
