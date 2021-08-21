import { ICallbacks } from 'states/callbacks';
import { INodeState, INodeStateWithoutId, NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { Point } from 'utils/point';
import { SuccessOrErrorResult, SuccessResult } from 'utils/result';

describe('Node state', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
  });

  describe('nodePositionChanged callback', () => {
    let mocknodePositionChangedCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['nodePositionChanged']>>,
      Parameters<NonNullable<ICallbacks['nodePositionChanged']>>
    >;

    const validateCallbackCall = (
      params: any[],
      node: NodeState,
      oldPos: Point,
      newPos: Point
    ) => {
      expect(params[0]).toBe(node);
      expect(params[1]).toEqual(oldPos);
      expect(params[2]).toEqual(newPos);
      expect(params[3]).toBe(store);
    };

    beforeEach(() => {
      mocknodePositionChangedCallback = jest.fn((a, b, c, d) => {});
      store.callbacks.import({
        nodePositionChanged: mocknodePositionChangedCallback,
      });
    });

    test('Is not called on initialization', () => {
      new NodeState(store, 'test', {
        position: [5, 10],
      });

      expect(mocknodePositionChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is not called if position remains the same', () => {
      const node = new NodeState(store, 'test', {
        position: [5, 10],
      });
      node.setPosition([5,10]);
      expect(mocknodePositionChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is called for new node position', () => {
      const initPosition: Point = [5, 10];
      const newPosition: Point = [50, 100];
      const node = new NodeState(store, 'test', { position: initPosition });

      node.setPosition(newPosition);

      expect(mocknodePositionChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(
        mocknodePositionChangedCallback.mock.calls[0],
        node,
        initPosition,
        newPosition
      );
    });
  });
});
