import { ICallbacks } from 'states/callbacks';
import { NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { Point } from 'utils/point';

describe('Node state', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
  });

  test('import/export',() => {
    const node = new NodeState(store, 'test', {
      type: 'someType',
      data: false,
      label: 'Some label',
      isDragEnabled: false,
      isSelectionEnabled: false,
      position: [5, 10],
    });

    node.addPort({
      id: 'port_1',
      label: 'Port 1',
    })

    expect(node.export()).toEqual({
      id: 'test',
      type: 'someType',
      data: false,
      label: 'Some label',
      ports: [{
        id: 'port_1',
        nodeId: "test",
        label: 'Port 1',
        data: null,
        type: "default"
      }],
      isDragEnabled: false,
      isSelectionEnabled: false,
      position: [5, 10],
    });
  });

  describe('nodePositionChanged callback', () => {
    let mockNodePositionChangedCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['nodePositionChanged']>>,
      Parameters<NonNullable<ICallbacks['nodePositionChanged']>>
    >;

    const validateCallbackCall = (
      mockArgs: any[],
      node: NodeState,
      oldPos: Point,
      newPos: Point
    ) => {
      expect(mockArgs[0]).toBe(node);
      expect(mockArgs[1]).toEqual(oldPos);
      expect(mockArgs[2]).toEqual(newPos);
      expect(mockArgs[3]).toEqual(node.isDragActive);
      expect(mockArgs[4]).toBe(store);
    };

    beforeEach(() => {
      mockNodePositionChangedCallback = jest.fn((_a, _b, _c, _d, _e) => {});
      store.callbacks.import({
        nodePositionChanged: mockNodePositionChangedCallback,
      });
    });

    test('Is not called on initialization', () => {
      new NodeState(store, 'test', {
        position: [5, 10],
      });

      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is not called if position remains the same', () => {
      const node = new NodeState(store, 'test', {
        position: [5, 10],
      });
      node.setPosition([5, 10]);
      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is called for new node position set by code', () => {
      const initPosition: Point = [5, 10];
      const newPosition: Point = [50, 100];
      const node = new NodeState(store, 'test', { position: initPosition });

      node.setPosition(newPosition);

      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(
        mockNodePositionChangedCallback.mock.calls[0],
        node,
        initPosition,
        newPosition
      );
    });

    test('Is called for new node position during dragging', () => {
      const initPosition: Point = [5, 10];
      const newPosition: Point = [50, 100];
      const node = new NodeState(store, 'test', { position: initPosition });

      node.isDragActive = true;
      node.setPosition(newPosition);

      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(
        mockNodePositionChangedCallback.mock.calls[0],
        node,
        initPosition,
        newPosition
      );
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
        [12,10],
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
    ])(
      'Node position %p should be rounded to %p',
      (pos, expectedPos) => {
        const node = new NodeState(store, 'test');

        node.setPosition(pos);

        expect(node.position).toEqual(expectedPos);
      }
    );
  });
});
