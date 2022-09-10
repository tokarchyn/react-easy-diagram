import {
  ICallbacks,
  OnNodeDataChanged,
  OnNodeIsDragEnabledChanged,
  OnNodeIsSelectionEnabledChanged,
  OnNodeLabelChanged,
  OnNodePositionChanged,
  OnNodeTypeChanged,
} from 'states/callbacks';
import { NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { COMPONENT_DEFAULT_TYPE } from 'states/visualComponents';
import { Point } from 'utils/point';

describe('Node state', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
  });

  test('import/export', () => {
    const defaultComponent =
      store.nodesSettings.visualComponents.getComponent('default');
    defaultComponent.import({
      component: defaultComponent.component,
      settings: {
        ports: [
          {
            id: 'port_1',
            label: 'Port 1',
          },
        ],
      },
    });

    const node = new NodeState(store, 'test', {
      type: 'someType',
      data: false,
      label: 'Some label',
      isDragEnabled: false,
      isSelectionEnabled: false,
      position: [5, 10],
      ports: [
        {
          id: 'port_1',
          data: 'Data 1',
        },
        {
          id: 'port_2',
          label: 'Port 2',
        },
      ],
    });

    expect(node.export()).toEqual({
      id: 'test',
      type: 'someType',
      data: false,
      label: 'Some label',
      ports: [
        {
          id: 'port_1',
          nodeId: 'test',
          label: undefined, // only node port's values are exported, not component values
          data: 'Data 1',
        },
        {
          id: 'port_2',
          nodeId: 'test',
          label: 'Port 2',
        },
      ],
      isDragEnabled: false,
      isSelectionEnabled: false,
      position: [5, 10],
    });
  });

  describe('Snap new position', () => {
    beforeEach(() => {
      store.nodesSettings.setGridSnap(10);
    });

    test.each<[Point, Point, Point, Point]>([
      [
        [10, 0],
        [12, 5],
        [20, 0],
        [2, 5],
      ],
      [
        [10, 10],
        [12, 12],
        [20, 20],
        [2, 2],
      ],
      [
        [10, 10],
        [22, 22],
        [30, 30],
        [2, 2],
      ],
      [
        [10, 10],
        [28, 28],
        [30, 30],
        [8, 8],
      ],
      [
        [15, 15],
        [7, 7],
        [20, 20],
        [2, 2],
      ],
      [
        [15, 15],
        [17, 17],
        [30, 30],
        [2, 2],
      ],
      [
        [15, 15],
        [3, 3],
        [15, 15],
        [3, 3],
      ],
      [
        [10, 10],
        [-16, -16],
        [0, 0],
        [-6, -6],
      ],
      [
        [20, 20],
        [-8, -8],
        [20, 20],
        [-8, -8],
      ],
      [
        [10, 10],
        [-22, -22],
        [-10, -10],
        [-2, -2],
      ],
      [
        [10, 10],
        [-28, -28],
        [-10, -10],
        [-8, -8],
      ],
      [
        [0, 0],
        [-12, -12],
        [-10, -10],
        [-2, -2],
      ],
      [
        [-7, -7],
        [-1, -1],
        [-7, -7],
        [-1, -1],
      ],
      [
        [12, 10],
        [0, 0],
        [12, 10],
        [0, 0],
      ],
      [
        [-10, -10],
        [5, 5],
        [-10, -10],
        [5, 5],
      ],
    ])(
      'Node position after moving from %p by %p should be %p with remainder %p',
      (pos, vector, expectedPos, expectedRemainder) => {
        const node = new NodeState(store, 'test');
        node.setPosition(pos, true);

        const remainder = node.moveBy(vector);

        expect(node.position).toEqual(expectedPos);
        expect(remainder).toEqual(expectedRemainder);
      }
    );

    test.each<[Point, Point]>([
      [
        [12, 18],
        [10, 20],
      ],
      [
        [-12, -18],
        [-10, -20],
      ],
      [
        [-10, 10],
        [-10, 10],
      ],
    ])('Node position %p should be rounded to %p', (pos, expectedPos) => {
      const node = new NodeState(store, 'test');

      node.setPosition(pos);

      expect(node.position).toEqual(expectedPos);
    });
  });

  test.each<[Point, string]>([
    [[12, 18], 'translate(12px, 18px)'],
    [[-12, -18], 'translate(-12px, -18px)'],
    [[0, 0], 'translate(0px, 0px)'],
  ])(
    'Generate transform string for position %p',
    (pos, expectedTransformStr) => {
      const node = new NodeState(store, 'test', {
        position: pos,
      });

      expect(node.transformString).toEqual(expectedTransformStr);
    }
  );

  describe('onNodePositionChanged callback', () => {
    let mockNodePositionChangedCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onNodePositionChanged']>>,
      Parameters<NonNullable<ICallbacks['onNodePositionChanged']>>
    >;

    const validateCallbackCall = (
      mockArgs: [OnNodePositionChanged, RootStore],
      expected: OnNodePositionChanged
    ) => {
      expect(mockArgs[0].node).toBe(expected.node);
      expect(mockArgs[0].oldValue).toEqual(expected.oldValue);
      expect(mockArgs[0].newValue).toEqual(expected.newValue);
      expect(mockArgs[1]).toBe(store);
    };

    beforeEach(() => {
      mockNodePositionChangedCallback = jest.fn((_a, _b) => {});
      store.callbacks.import({
        onNodePositionChanged: mockNodePositionChangedCallback,
      });
    });

    test('Is not called on initialization', () => {
      const node = new NodeState(store, 'test', {
        position: [5, 10],
      });

      expect(node.position).toEqual([5, 10]);
      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is not called if position remains the same', () => {
      const node = new NodeState(store, 'test', {
        position: [5, 10],
      });
      expect(node.position).toEqual([5, 10]);

      node.setPosition([5, 10]);

      expect(node.position).toEqual([5, 10]);
      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is called for new node position set by code', () => {
      const initPosition: Point = [5, 10];
      const newPosition: Point = [50, 100];
      const node = new NodeState(store, 'test', { position: initPosition });
      expect(node.position).toEqual(initPosition);

      node.setPosition(newPosition);

      expect(node.position).toEqual(newPosition);
      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(mockNodePositionChangedCallback.mock.calls[0], {
        node: node,
        oldValue: initPosition,
        newValue: newPosition,
      });
    });

    test('Is called for new node position during dragging', () => {
      const initPosition: Point = [5, 10];
      const newPosition: Point = [50, 100];
      const node = new NodeState(store, 'test', { position: initPosition });

      node.isDragActive = true;
      node.setPosition(newPosition);

      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(mockNodePositionChangedCallback.mock.calls[0], {
        node: node,
        oldValue: initPosition,
        newValue: newPosition,
      });
    });
  });

  describe('onNodeLabelChanged callback', () => {
    let mockNodeLabelChangedCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onNodeLabelChanged']>>,
      Parameters<NonNullable<ICallbacks['onNodeLabelChanged']>>
    >;

    const validateCallbackCall = (
      mockArgs: [OnNodeLabelChanged, RootStore],
      expected: OnNodeLabelChanged
    ) => {
      expect(mockArgs[0].node).toBe(expected.node);
      expect(mockArgs[0].oldValue).toEqual(expected.oldValue);
      expect(mockArgs[0].newValue).toEqual(expected.newValue);
      expect(mockArgs[1]).toBe(store);
    };

    beforeEach(() => {
      mockNodeLabelChangedCallback = jest.fn((_a, _b) => {});
      store.callbacks.import({
        onNodeLabelChanged: mockNodeLabelChangedCallback,
      });
    });

    test('Is not called on initialization', () => {
      const node = new NodeState(store, 'test', {
        label: 'Label',
        position: [5, 10],
      });

      expect(node.label).toEqual('Label');
      expect(mockNodeLabelChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is not called if value remains the same', () => {
      const node = new NodeState(store, 'test', {
        label: 'Label',
        position: [5, 10],
      });
      expect(node.label).toEqual('Label');

      node.setLabel('Label');

      expect(node.label).toEqual('Label');
      expect(mockNodeLabelChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is called for new value set by code', () => {
      const node = new NodeState(store, 'test', {
        label: 'Label',
        position: [5, 10],
      });
      expect(node.label).toEqual('Label');

      node.setLabel('Label New');

      expect(node.label).toEqual('Label New');
      expect(mockNodeLabelChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(mockNodeLabelChangedCallback.mock.calls[0], {
        node: node,
        oldValue: 'Label',
        newValue: 'Label New',
      });
    });

    test('Is called for value set to undefined', () => {
      const node = new NodeState(store, 'test', {
        label: 'Label',
        position: [5, 10],
      });
      expect(node.label).toEqual('Label');

      node.setLabel(undefined);

      expect(node.label).toEqual(undefined);
      expect(mockNodeLabelChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(mockNodeLabelChangedCallback.mock.calls[0], {
        node: node,
        oldValue: 'Label',
        newValue: undefined,
      });
    });
  });

  describe('onNodeTypeChanged callback', () => {
    let mockNodeTypeChangedCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onNodeTypeChanged']>>,
      Parameters<NonNullable<ICallbacks['onNodeTypeChanged']>>
    >;

    const validateCallbackCall = (
      mockArgs: [OnNodeTypeChanged, RootStore],
      expected: OnNodeTypeChanged
    ) => {
      expect(mockArgs[0].node).toBe(expected.node);
      expect(mockArgs[0].oldValue).toEqual(expected.oldValue);
      expect(mockArgs[0].newValue).toEqual(expected.newValue);
      expect(mockArgs[1]).toBe(store);
    };

    beforeEach(() => {
      mockNodeTypeChangedCallback = jest.fn((_a, _b) => {});
      store.callbacks.import({
        onNodeTypeChanged: mockNodeTypeChangedCallback,
      });
    });

    test('Is not called on initialization', () => {
      const node = new NodeState(store, 'test', {
        type: 'Type',
        position: [5, 10],
      });

      expect(node.type).toEqual('Type');
      expect(mockNodeTypeChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is not called if value remains the same', () => {
      const node = new NodeState(store, 'test', {
        type: 'Type',
        position: [5, 10],
      });
      expect(node.type).toEqual('Type');

      node.setType('Type');

      expect(node.type).toEqual('Type');
      expect(mockNodeTypeChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is called for new value set by code', () => {
      const node = new NodeState(store, 'test', {
        type: 'Type',
        position: [5, 10],
      });
      expect(node.type).toEqual('Type');

      node.setType('Type New');

      expect(node.type).toEqual('Type New');
      expect(mockNodeTypeChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(mockNodeTypeChangedCallback.mock.calls[0], {
        node: node,
        oldValue: 'Type',
        newValue: 'Type New',
      });
    });

    test('Is called for value set to undefined', () => {
      const node = new NodeState(store, 'test', {
        type: 'Type',
        position: [5, 10],
      });
      expect(node.type).toEqual('Type');

      node.setType(undefined);

      expect(node.type).toBe(COMPONENT_DEFAULT_TYPE);
      expect(mockNodeTypeChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(mockNodeTypeChangedCallback.mock.calls[0], {
        node: node,
        oldValue: 'Type',
        newValue: undefined,
      });
    });
  });

  describe('onNodeDataChanged callback', () => {
    let mockNodeDataChangedCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onNodeDataChanged']>>,
      Parameters<NonNullable<ICallbacks['onNodeDataChanged']>>
    >;

    const validateCallbackCall = (
      mockArgs: [OnNodeDataChanged, RootStore],
      expected: OnNodeDataChanged
    ) => {
      expect(mockArgs[0].node).toBe(expected.node);
      expect(mockArgs[0].oldValue).toEqual(expected.oldValue);
      expect(mockArgs[0].newValue).toEqual(expected.newValue);
      expect(mockArgs[1]).toBe(store);
    };

    beforeEach(() => {
      mockNodeDataChangedCallback = jest.fn((_a, _b) => {});
      store.callbacks.import({
        onNodeDataChanged: mockNodeDataChangedCallback,
      });
    });

    test('Is not called on initialization', () => {
      const node = new NodeState(store, 'test', {
        data: 'Data',
        position: [5, 10],
      });

      expect(node.data).toEqual('Data');
      expect(mockNodeDataChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is not called if value remains the same', () => {
      const node = new NodeState(store, 'test', {
        data: 'Data',
        position: [5, 10],
      });
      expect(node.data).toEqual('Data');

      node.setData('Data');

      expect(node.data).toEqual('Data');
      expect(mockNodeDataChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is called for new value set by code', () => {
      const node = new NodeState(store, 'test', {
        data: 'Data',
        position: [5, 10],
      });
      expect(node.data).toEqual('Data');

      node.setData({
        value1: 'Data1',
        value2: 'Data2',
      });

      expect(node.data).toEqual({
        value1: 'Data1',
        value2: 'Data2',
      });
      expect(mockNodeDataChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(mockNodeDataChangedCallback.mock.calls[0], {
        node: node,
        oldValue: 'Data',
        newValue: {
          value1: 'Data1',
          value2: 'Data2',
        },
      });
    });

    test('Is called for value set to undefined', () => {
      const node = new NodeState(store, 'test', {
        data: 'Data',
        position: [5, 10],
      });
      expect(node.data).toEqual('Data');

      node.setData(undefined);

      expect(node.data).toEqual(undefined);
      expect(mockNodeDataChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(mockNodeDataChangedCallback.mock.calls[0], {
        node: node,
        oldValue: 'Data',
        newValue: undefined,
      });
    });
  });

  describe('onNodeIsSelectionEnabledChanged callback', () => {
    let mockNodeIsSelectionEnabledChangedCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onNodeIsSelectionEnabledChanged']>>,
      Parameters<NonNullable<ICallbacks['onNodeIsSelectionEnabledChanged']>>
    >;

    const validateCallbackCall = (
      mockArgs: [OnNodeIsSelectionEnabledChanged, RootStore],
      expected: OnNodeIsSelectionEnabledChanged
    ) => {
      expect(mockArgs[0].node).toBe(expected.node);
      expect(mockArgs[0].oldValue).toEqual(expected.oldValue);
      expect(mockArgs[0].newValue).toEqual(expected.newValue);
      expect(mockArgs[1]).toBe(store);
    };

    beforeEach(() => {
      mockNodeIsSelectionEnabledChangedCallback = jest.fn((_a, _b) => {});
      store.callbacks.import({
        onNodeIsSelectionEnabledChanged:
          mockNodeIsSelectionEnabledChangedCallback,
      });
    });

    test('Is not called on initialization', () => {
      const node = new NodeState(store, 'test', {
        isSelectionEnabled: true,
        position: [5, 10],
      });

      expect(node.isSelectionEnabled).toEqual(true);
      expect(mockNodeIsSelectionEnabledChangedCallback.mock.calls.length).toBe(
        0
      );
    });

    test('Is not called if value remains the same', () => {
      const node = new NodeState(store, 'test', {
        isSelectionEnabled: false,
        position: [5, 10],
      });
      expect(node.isSelectionEnabled).toEqual(false);

      node.setIsSelectionEnabled(false);

      expect(node.isSelectionEnabled).toEqual(false);
      expect(mockNodeIsSelectionEnabledChangedCallback.mock.calls.length).toBe(
        0
      );
    });

    test('Is called for new value set by code', () => {
      const node = new NodeState(store, 'test', {
        isSelectionEnabled: undefined,
        position: [5, 10],
      });
      expect(node.isSelectionEnabled).toEqual(true);

      node.setIsSelectionEnabled(true);

      expect(node.isSelectionEnabled).toEqual(true);
      expect(mockNodeIsSelectionEnabledChangedCallback.mock.calls.length).toBe(
        1
      );
      validateCallbackCall(
        mockNodeIsSelectionEnabledChangedCallback.mock.calls[0],
        {
          node: node,
          oldValue: undefined,
          newValue: true,
        }
      );
    });

    test('Is called for value set to undefined', () => {
      const node = new NodeState(store, 'test', {
        isSelectionEnabled: false,
        position: [5, 10],
      });
      expect(node.isSelectionEnabled).toEqual(false);

      node.setIsSelectionEnabled(undefined);

      expect(node.isSelectionEnabled).toEqual(true);
      expect(mockNodeIsSelectionEnabledChangedCallback.mock.calls.length).toBe(
        1
      );
      validateCallbackCall(
        mockNodeIsSelectionEnabledChangedCallback.mock.calls[0],
        {
          node: node,
          oldValue: false,
          newValue: undefined,
        }
      );
    });
  });

  describe('onNodeIsDragEnabledChanged callback', () => {
    let mockNodeIsDragEnabledChangedCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onNodeIsDragEnabledChanged']>>,
      Parameters<NonNullable<ICallbacks['onNodeIsDragEnabledChanged']>>
    >;

    const validateCallbackCall = (
      mockArgs: [OnNodeIsDragEnabledChanged, RootStore],
      expected: OnNodeIsDragEnabledChanged
    ) => {
      expect(mockArgs[0].node).toBe(expected.node);
      expect(mockArgs[0].oldValue).toEqual(expected.oldValue);
      expect(mockArgs[0].newValue).toEqual(expected.newValue);
      expect(mockArgs[1]).toBe(store);
    };

    beforeEach(() => {
      mockNodeIsDragEnabledChangedCallback = jest.fn((_a, _b) => {});
      store.callbacks.import({
        onNodeIsDragEnabledChanged: mockNodeIsDragEnabledChangedCallback,
      });
    });

    test('Is not called on initialization', () => {
      const node = new NodeState(store, 'test', {
        isDragEnabled: true,
        position: [5, 10],
      });

      expect(node.isDragEnabled).toEqual(true);
      expect(mockNodeIsDragEnabledChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is not called if value remains the same', () => {
      const node = new NodeState(store, 'test', {
        isDragEnabled: false,
        position: [5, 10],
      });
      expect(node.isDragEnabled).toEqual(false);

      node.setIsDragEnabled(false);

      expect(node.isDragEnabled).toEqual(false);
      expect(mockNodeIsDragEnabledChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is called for new value set by code', () => {
      const node = new NodeState(store, 'test', {
        isDragEnabled: undefined,
        position: [5, 10],
      });
      expect(node.isDragEnabled).toEqual(true);

      node.setIsDragEnabled(true);
      store.diagramSettings.import({
        userInteraction: {
          nodeDrag: false,
        },
      });

      expect(node.isDragEnabled).toEqual(true);
      expect(mockNodeIsDragEnabledChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(mockNodeIsDragEnabledChangedCallback.mock.calls[0], {
        node: node,
        oldValue: undefined,
        newValue: true,
      });
    });

    test('Is called for value set to undefined', () => {
      const node = new NodeState(store, 'test', {
        isDragEnabled: false,
        position: [5, 10],
      });
      expect(node.isDragEnabled).toEqual(false)

      node.setIsDragEnabled(undefined);

      expect(node.isDragEnabled).toEqual(true)
      expect(mockNodeIsDragEnabledChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(mockNodeIsDragEnabledChangedCallback.mock.calls[0], {
        node: node,
        oldValue: false,
        newValue: undefined,
      });
    });
  });
});
