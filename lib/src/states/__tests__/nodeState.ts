import { ICallbacks } from 'states/callbacks';
import { NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
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
});
