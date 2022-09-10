import {
  ICallbacks,
  OnDrag,
  OnDragEnded,
  OnDragStarted,
} from 'states/callbacks';
import { RootStore } from 'states/rootStore';

describe('Drag state', () => {
  let store: RootStore;

  let mockOnDragStartedCallback: jest.Mock<
    ReturnType<NonNullable<ICallbacks['onDragStarted']>>,
    Parameters<NonNullable<ICallbacks['onDragStarted']>>
  >;

  let mockOnDragCallback: jest.Mock<
    ReturnType<NonNullable<ICallbacks['onDrag']>>,
    Parameters<NonNullable<ICallbacks['onDrag']>>
  >;

  let mockOnDragEndedCallback: jest.Mock<
    ReturnType<NonNullable<ICallbacks['onDragEnded']>>,
    Parameters<NonNullable<ICallbacks['onDragEnded']>>
  >;

  const validateOnDragStartedCallbackCall = (
    invocation: number,
    expected: OnDragStarted
  ) => {
    const callbackCall = mockOnDragStartedCallback.mock.calls[invocation];

    expect(callbackCall[0].nodes.length).toBe(expected.nodes.length);
    expected.nodes.forEach((v) => expect(callbackCall[0].nodes).toContain(v));
    expect(callbackCall[1]).toBe(store);
  };

  const validateOnDragCallbackCall = (invocation: number, expected: OnDrag) => {
    const callbackCall = mockOnDragCallback.mock.calls[invocation];

    expect(callbackCall[0].nodes.length).toBe(expected.nodes.length);
    expected.nodes.forEach((v) => expect(callbackCall[0].nodes).toContain(v));
    expect(callbackCall[0].delta).toEqual(expected.delta);
    expect(callbackCall[1]).toBe(store);
  };

  const validateOnDragEndedCallbackCall = (
    invocation: number,
    expected: OnDragEnded
  ) => {
    const callbackCall = mockOnDragEndedCallback.mock.calls[invocation];

    expect(callbackCall[0].nodes.length).toBe(expected.nodes.length);
    expected.nodes.forEach((v) => expect(callbackCall[0].nodes).toContain(v));
    expect(callbackCall[1]).toBe(store);
  };

  beforeEach(() => {
    store = new RootStore();
    store.importState(
      [
        { id: '1', position: [0, 0], type: 'input_output_horizontal' },
        { id: '2', position: [0, 100], type: 'input_output_horizontal' },
        { id: '3', position: [0, 200], type: 'input_output_horizontal' },
      ],
      [
        {
          id: '1-2',
          source: {
            nodeId: '1',
            portId: 'output',
          },
          target: {
            nodeId: '2',
            portId: 'input',
          },
        },
      ]
    );
    mockOnDragStartedCallback = jest.fn((_a, _b) => {});
    mockOnDragCallback = jest.fn((_a, _b) => {});
    mockOnDragEndedCallback = jest.fn((_a, _b) => {});

    store.callbacks.import({
      onDragStarted: mockOnDragStartedCallback,
      onDrag: mockOnDragCallback,
      onDragEnded: mockOnDragEndedCallback,
    });
  });

  test('Drag already selected nodes', () => {
    const node1 = store.nodesStore.getNode('1')!;
    const node2 = store.nodesStore.getNode('2')!;
    const node3 = store.nodesStore.getNode('3')!;
    store.selectionState.select(node1);
    store.selectionState.select(node2);

    const started = store.dragState.startDragging(node2);
    store.dragState.dragBy([10, 10]);

    expect(store.dragState.isActive).toBeTruthy();
    expect(started).toBeTruthy();
    expect(node1.position).toEqual([10, 10]);
    expect(node1.isDragActive).toBeTruthy();

    expect(node2.position).toEqual([10, 110]);
    expect(node2.isDragActive).toBeTruthy();

    expect(node3.position).toEqual([0, 200]);
    expect(node3.isDragActive).toBeFalsy();
  });

  test('Stop dragging', () => {
    const node1 = store.nodesStore.getNode('1')!;
    const node2 = store.nodesStore.getNode('2')!;
    store.selectionState.select(node1);
    store.selectionState.select(node2);

    store.dragState.startDragging(node2);
    store.dragState.stopDragging();
    store.dragState.dragBy([10, 10]);

    expect(store.dragState.isActive).toBeFalsy();

    expect(node1.position).toEqual([0, 0]);
    expect(node1.isDragActive).toBeFalsy();

    expect(node2.position).toEqual([0, 100]);
    expect(node2.isDragActive).toBeFalsy();
  });

  test('Unselect nodes that cannot be dragged', () => {
    const node1 = store.nodesStore.getNode('1')!;
    const node2 = store.nodesStore.getNode('2')!;
    node2.setIsDragEnabled(false);
    store.selectionState.select(node1);
    store.selectionState.select(node2);

    store.dragState.startDragging(node1);
    store.dragState.dragBy([10, 10]);

    expect(node1.position).toEqual([10, 10]);
    expect(node1.isDragActive).toBeTruthy();
    expect(node1.selected).toBeTruthy();

    expect(node2.position).toEqual([0, 100]);
    expect(node2.isDragActive).toBeFalsy();
    expect(node2.selected).toBeFalsy();
  });

  test('Unselect all items if drag starts with unselected node ', () => {
    const node1 = store.nodesStore.getNode('1')!;
    const node2 = store.nodesStore.getNode('2')!;
    const link1_2 = store.linksStore.getLink('1-2')!;
    store.selectionState.select(node2);
    store.selectionState.select(link1_2);

    store.dragState.startDragging(node1);
    store.dragState.dragBy([10, 10]);

    expect(node1.position).toEqual([10, 10]);
    expect(node1.isDragActive).toBeTruthy();
    expect(node1.selected).toBeTruthy();

    expect(node2.position).toEqual([0, 100]);
    expect(node2.isDragActive).toBeFalsy();
    expect(node2.selected).toBeFalsy();

    expect(link1_2.selected).toBeFalsy();
  });

  test('Do not start node dragging if another node is being dragged ', () => {
    const node1 = store.nodesStore.getNode('1')!;
    const node2 = store.nodesStore.getNode('2')!;
    store.dragState.startDragging(node1);

    const dragginsStarted = store.dragState.startDragging(node2);

    expect(node1.isDragActive).toBeTruthy();
    expect(node1.selected).toBeTruthy();

    expect(dragginsStarted).toBeFalsy();
    expect(node2.isDragActive).toBeFalsy();
    expect(node2.selected).toBeFalsy();
  });

  test('Do not start node dragging if drag is disabled for this node', () => {
    const node1 = store.nodesStore.getNode('1')!;
    node1.setIsDragEnabled(false);
    store.dragState.startDragging(node1);

    expect(store.dragState.isActive).toBeFalsy();

    expect(node1.isDragActive).toBeFalsy();
    expect(node1.selected).toBeFalsy();
  });

  test('Nodes positions should be snapped to grid when drag starts', () => {
    store.nodesSettings.setGridSnap(10);
    const node1 = store.nodesStore.getNode('1')!;
    node1.setPosition([3, 8], true);
    const node2 = store.nodesStore.getNode('2')!;
    node2.setPosition([-3, -8], true);
    store.selectionState.select(node1);
    store.selectionState.select(node2);

    store.dragState.startDragging(node1);

    expect(node1.position).toEqual([0, 10]);
    expect(node2.position).toEqual([0, -10]);
  });

  test('Drag callbacks called', () => {
    const node1 = store.nodesStore.getNode('1')!;
    const node2 = store.nodesStore.getNode('2')!;
    const node3 = store.nodesStore.getNode('3')!;
    store.selectionState.select(node1);
    store.selectionState.select(node2);

    const started = store.dragState.startDragging(node2);

    expect(mockOnDragStartedCallback.mock.calls.length).toBe(1);
    validateOnDragStartedCallbackCall(0, {
      nodes: [node1, node2],
    });

    store.dragState.dragBy([10, 10]);

    expect(mockOnDragCallback.mock.calls.length).toBe(1);
    validateOnDragCallbackCall(0, {
      nodes: [node1, node2],
      delta: [10, 10],
    });

    expect(store.dragState.isActive).toBeTruthy();
    expect(started).toBeTruthy();
    expect(node1.position).toEqual([10, 10]);
    expect(node1.isDragActive).toBeTruthy();

    expect(node2.position).toEqual([10, 110]);
    expect(node2.isDragActive).toBeTruthy();

    expect(node3.position).toEqual([0, 200]);
    expect(node3.isDragActive).toBeFalsy();

    store.dragState.dragBy([15, 12]);

    expect(mockOnDragCallback.mock.calls.length).toBe(2);
    validateOnDragCallbackCall(1, {
      nodes: [node1, node2],
      delta: [15, 12],
    });

    store.dragState.stopDragging();

    expect(mockOnDragEndedCallback.mock.calls.length).toBe(1);
    validateOnDragEndedCallbackCall(0, {
      nodes: [node1, node2],
    });
  });
});
