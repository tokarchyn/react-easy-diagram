import {
  ICallbacks,
  OnNodesAddResult,
  OnNodesRemoveResult,
} from 'states/callbacks';
import { INodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { createDummyHTMLElement } from 'utils/__tests__/testUtils';
import React from 'react';
import { isError, isSuccess } from 'utils/result';

describe('Nodes store', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
  });

  describe('Add/remove', () => {
    let mockOnNodesAddResultCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onNodesAddResult']>>,
      Parameters<NonNullable<ICallbacks['onNodesAddResult']>>
    >;

    let mockOnNodesRemoveResultCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onNodesRemoveResult']>>,
      Parameters<NonNullable<ICallbacks['onNodesRemoveResult']>>
    >;

    beforeEach(() => {
      mockOnNodesAddResultCallback = jest.fn((a, b) => {});
      mockOnNodesRemoveResultCallback = jest.fn((a, b) => {});
      store.callbacks.import({
        onNodesAddResult: mockOnNodesAddResultCallback,
        onNodesRemoveResult: mockOnNodesRemoveResultCallback,
      });
    });

    const validateOnNodesAddResult = (
      invocation: number,
      info: OnNodesAddResult
    ) => {
      const callbackCall = mockOnNodesAddResultCallback.mock.calls[invocation];

      expect(callbackCall[0].addedNodes.length).toBe(info.addedNodes.length);
      info.addedNodes.forEach((v) =>
        expect(callbackCall[0].addedNodes).toContain(v)
      );

      expect(callbackCall[0].failedToAddNodes.length).toBe(
        info.failedToAddNodes.length
      );
      info.failedToAddNodes.forEach((v) =>
        expect(callbackCall[0].failedToAddNodes).toContain(v)
      );

      expect(callbackCall[0].importing).toBe(info.importing);
      expect(callbackCall[1]).toBe(store);
    };

    const validateOnNodesRemoveResult = (
      invocation: number,
      info: OnNodesRemoveResult
    ) => {
      const callbackCall =
        mockOnNodesRemoveResultCallback.mock.calls[invocation];

      expect(callbackCall[0].removedNodes.length).toBe(
        info.removedNodes.length
      );
      info.removedNodes.forEach((v) =>
        expect(callbackCall[0].removedNodes).toContain(v)
      );

      expect(callbackCall[0].failedToRemoveNodeIds).toEqual(
        info.failedToRemoveNodeIds
      );
      expect(callbackCall[1]).toBe(store);
    };

    test('Import nodes', () => {
      const nodes: INodeState[] = [
        { id: 'first', position: [0, 10] },
        { position: [100, 110] },
      ];

      store.nodesStore.import(nodes);

      expect(store.nodesStore.nodes.size).toBe(2);
      const nodesImported = Array.from(store.nodesStore.nodes.values());
      expect(mockOnNodesAddResultCallback.mock.calls.length).toBe(1);
      validateOnNodesAddResult(0, {
        addedNodes: nodesImported,
        failedToAddNodes: [],
        importing: true,
      });

      expect(nodesImported[0].id).toEqual(nodes[0].id);
      expect(nodesImported[0].position).toEqual([0, 10]);
      expect(nodesImported[1].position).toEqual([100, 110]);
    });

    test('Import should not call callback if nodes are not provided', () => {
      store.nodesStore.import();
      expect(mockOnNodesAddResultCallback.mock.calls.length).toBe(0);
    });

    test('Import new nodes should remove previous nodes', () => {
      store.nodesStore.import([{ position: [0, 10] }]);
      store.nodesStore.import([]);
      expect(store.nodesStore.nodes.size).toBe(0);
      expect(mockOnNodesAddResultCallback.mock.calls.length).toBe(1);
      expect(mockOnNodesRemoveResultCallback.mock.calls.length).toBe(0);
    });

    test('Add undefined node should failed', () => {
      const result = store.nodesStore.addNode(undefined as any, false);

      expect(store.nodesStore.nodes.size).toBe(0);
      expect(result.success).toBeFalsy();
      expect(result.value).toBeUndefined();
      expect(mockOnNodesAddResultCallback.mock.calls.length).toBe(1);
      validateOnNodesAddResult(0, {
        addedNodes: [],
        failedToAddNodes: [isError(result) ? result : undefined!],
        importing: false,
      });
    });

    test('Add nodes', () => {
      const nodes: INodeState[] = [
        { id: 'first', position: [0, 10] },
        { position: [100, 110] },
      ];

      const result = store.nodesStore.addNodes(nodes);

      const nodesImported = Array.from(store.nodesStore.nodes.values());

      expect(store.nodesStore.nodes.size).toBe(2);

      expect(result.length).toBe(2);
      expect(result[0].success).toBeTruthy();
      expect(result[0].value).toBe(nodesImported[0]);
      expect(result[1].success).toBeTruthy();
      expect(result[1].value).toBe(nodesImported[1]);

      expect(mockOnNodesAddResultCallback.mock.calls.length).toBe(1);
      validateOnNodesAddResult(0, {
        addedNodes: nodesImported,
        failedToAddNodes: [],
        importing: false,
      });

      expect(nodesImported[0].id).toEqual(nodes[0].id);
      expect(nodesImported[0].position).toEqual([0, 10]);
      expect(nodesImported[1].position).toEqual([100, 110]);
    });

    test('Add node', () => {
      const node: INodeState = { id: 'first', position: [0, 10] };

      const result = store.nodesStore.addNode(node);

      const nodesImported = Array.from(store.nodesStore.nodes.values());

      expect(result.success).toBeTruthy();
      expect(result.value).toBe(nodesImported[0]);
      expect(store.nodesStore.nodes.size).toBe(1);

      expect(mockOnNodesAddResultCallback.mock.calls.length).toBe(1);
      validateOnNodesAddResult(0, {
        addedNodes: nodesImported,
        failedToAddNodes: [],
        importing: false,
      });

      expect(nodesImported[0].id).toEqual(node.id);
      expect(nodesImported[0].position).toEqual([0, 10]);
    });

    test('Add nodes should not call callback if nodes parameter is empty', () => {
      store.nodesStore.addNodes([], false);
      expect(mockOnNodesAddResultCallback.mock.calls.length).toBe(0);
    });

    test('Add existed node should failed', () => {
      store.nodesStore.addNode({ id: 'mynode', position: [0, 10] }, false);

      const nodeToAdd: INodeState = { id: 'mynode', position: [0, 100] };
      const result = store.nodesStore.addNode(nodeToAdd, false);

      const nodesAdded = Array.from(store.nodesStore.nodes.values());

      expect(result.success).toBeFalsy();
      expect(result.value).toBe(nodeToAdd);
      expect(store.nodesStore.nodes.size).toBe(1);

      expect(mockOnNodesAddResultCallback.mock.calls.length).toBe(2);
      validateOnNodesAddResult(1, {
        addedNodes: [],
        failedToAddNodes: [isError(result) ? result : undefined!],
        importing: false,
      });

      expect(nodesAdded[0].id).toEqual(nodeToAdd.id);
      expect(nodesAdded[0].position).toEqual([0, 10]);
    });

    test('Existed node is not rewritten on adding by default', () => {
      store.nodesStore.import([{ id: 'mynode', position: [0, 10] }]);

      const nodeToAdd: INodeState = { id: 'mynode', position: [0, 11] };
      const result = store.nodesStore.addNode(nodeToAdd);

      expect(result.success).toBe(false);
      expect(result.value).toBe(nodeToAdd);
      expect(store.nodesStore.getNode('mynode')?.position).toEqual([0, 10]);

      expect(mockOnNodesAddResultCallback.mock.calls.length).toBe(2);
      validateOnNodesAddResult(1, {
        addedNodes: [],
        failedToAddNodes: [isError(result) ? result : undefined!],
        importing: false,
      });
    });

    test('Existed node is not rewritten on adding many nodes by default', () => {
      store.nodesStore.import([{ id: 'mynode', position: [0, 10] }]);

      const nodeToAdd1: INodeState = { id: 'mynode', position: [0, 11] };
      const nodeToAdd2: INodeState = { id: 'mynode2', position: [0, 12] };
      const result = store.nodesStore.addNodes([nodeToAdd1, nodeToAdd2]);

      expect(result.length).toBe(2);

      expect(result[0].success).toBe(false);
      expect(result[0].value).toBe(nodeToAdd1);
      expect(store.nodesStore.getNode('mynode')?.position).toEqual([0, 10]);

      expect(result[1].success).toBe(true);
      const addedNode = store.nodesStore.getNode('mynode2');
      expect(result[1].value).toBe(addedNode);
      expect(addedNode?.position).toEqual([0, 12]);

      expect(mockOnNodesAddResultCallback.mock.calls.length).toBe(2);
      validateOnNodesAddResult(1, {
        addedNodes: [addedNode!],
        failedToAddNodes: [isError(result[0]) ? result[0] : undefined!],
        importing: false,
      });
    });

    test('Remove node', () => {
      const addResult = store.nodesStore.addNode({ position: [0, 10] });
      if (!addResult.success) throw new Error('Add node failed');
      expect(store.nodesStore.nodes.size).toBe(1);

      const result = store.nodesStore.removeNode(addResult.value.id!);

      expect(result).toBeDefined();
      expect(store.nodesStore.nodes.size).toBe(0);

      expect(mockOnNodesRemoveResultCallback.mock.calls.length).toBe(1);
      validateOnNodesRemoveResult(0, {
        removedNodes: [result!],
        failedToRemoveNodeIds: [],
      });
    });

    test('Remove not existed node', () => {
      const result = store.nodesStore.removeNode('someId');

      expect(result).toBeUndefined();

      expect(mockOnNodesRemoveResultCallback.mock.calls.length).toBe(1);
      validateOnNodesRemoveResult(0, {
        removedNodes: [],
        failedToRemoveNodeIds: ['someId'],
      });
    });

    test('Remove nodes', () => {
      store.nodesStore.addNodes([
        { id: '1', position: [0, 10] },
        { id: '2', position: [0, 10] },
      ]);
      expect(store.nodesStore.nodes.size).toBe(2);

      const results = store.nodesStore.removeNodes(['1', '3']);

      expect(results.length).toBe(2);
      expect(store.nodesStore.nodes.size).toBe(1);
      expect(store.nodesStore.getNode('2')).toBeDefined();

      expect(mockOnNodesRemoveResultCallback.mock.calls.length).toBe(1);
      validateOnNodesRemoveResult(0, {
        removedNodes: [isSuccess(results[0]) ? results[0].value : undefined!],
        failedToRemoveNodeIds: ['3'],
      });
    });
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
    beforeEach(() => {
      store.diagramState.ref.current = createDummyHTMLElement({
        size: [100, 100],
        position: [0, 0],
        attributes: {
          'data-zoom': '1',
        },
      });
    });

    test('Two nodes with sizes', () => {
      store.nodesStore.import([
        { position: [-10, -15] },
        { position: [10, 15] },
      ]);
      const nodes = Array.from(store.nodesStore.nodes.values());
      nodes[0].ref.current = createDummyHTMLElement({
        size: [100, 100],
        position: nodes[0].position,
      });
      nodes[1].ref.current = createDummyHTMLElement({
        size: [100, 100],
        position: nodes[1].position,
      });

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
});
