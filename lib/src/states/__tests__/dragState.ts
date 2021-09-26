import { RootStore } from 'states/rootStore';

describe('Drag state', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
    store.importState(
      [
        { id: '1', position: [0, 0] },
        { id: '2', position: [0, 100] },
        { id: '3', position: [0, 200] },
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
  });

  test('Drag already selected nodes', () => {
    const node1 = store.nodesStore.getNode('1')!;
    const node2 = store.nodesStore.getNode('2')!;
    const node3 = store.nodesStore.getNode('3')!;
    store.selectionState.select(node1);
    store.selectionState.select(node2);

    store.dragState.startDragging(node2);
    store.dragState.dragBy([10, 10]);

    expect(store.dragState.isActive).toBeTruthy();

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

  test('Unselect items that cannot be dragged', () => {
    const node1 = store.nodesStore.getNode('1')!;
    const node2 = store.nodesStore.getNode('2')!;
    node2.setIsDragEnabled(false);
    const link1_2 = store.linksStore.getLink('1-2')!;
    store.selectionState.select(node1);
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

    store.dragState.startDragging(node2);

    expect(node1.isDragActive).toBeTruthy();
    expect(node1.selected).toBeTruthy();

    expect(node2.isDragActive).toBeFalsy();
    expect(node2.selected).toBeFalsy();
  });

  test('Do not start node dragging if another node is being dragged ', () => {
    const node1 = store.nodesStore.getNode('1')!;
    const node2 = store.nodesStore.getNode('2')!;
    store.dragState.startDragging(node1);

    store.dragState.startDragging(node2);

    expect(store.dragState.isActive).toBeTruthy();

    expect(node1.isDragActive).toBeTruthy();
    expect(node1.selected).toBeTruthy();

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
});
