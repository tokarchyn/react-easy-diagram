import { Callbacks, ICallbacks } from 'states/callbacks';
import { NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { Point } from 'utils/point';

describe('Callbacks import', () => {
  let callbacks: Callbacks;
  let store: RootStore;
  
  beforeEach(() => {
    store = new RootStore();
    callbacks = store.callbacks;
  });

  test('Import/Export', () => {
    let callback = () => true;
    callbacks.import({
      validateLinkEndpoints: callback,
      nodesAdded: callback,
      nodePositionChanged: callback,
      dragStateChanged: callback
    });

    const exportedCallbacks = callbacks.export();
    expect(exportedCallbacks.validateLinkEndpoints).toBe(callback);
    expect(exportedCallbacks.nodesAdded).toBe(callback);
    expect(exportedCallbacks.nodePositionChanged).toBe(callback);
    expect(exportedCallbacks.dragStateChanged).toBe(callback);
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
});
