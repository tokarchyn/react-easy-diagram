import { RootStore } from 'states/rootStore';

describe('Selection state', () => {
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

  test('Select node should return false if it is already selected', () => {
    const node1 = store.nodesStore.getNode('1')!;
    store.selectionState.select(node1);

    const selected = store.selectionState.select(node1);

    expect(selected).toBeFalsy();
  });

  test('Switch selected item should unselect it', () => {
    const node1 = store.nodesStore.getNode('1')!;
    store.selectionState.select(node1);

    store.selectionState.switch(node1);

    expect(node1.selected).toBeFalsy();
  });

  test('Switch unselected item should select it', () => {
    const node1 = store.nodesStore.getNode('1')!;

    store.selectionState.switch(node1);

    expect(node1.selected).toBeTruthy();
  });

  test('Unselect other items on item selection', () => {
    const node1 = store.nodesStore.getNode('1')!;
    const node2 = store.nodesStore.getNode('1')!;
    const link1_2 = store.linksStore.getLink('1-2')!;
    store.selectionState.select(node1);
    store.selectionState.select(node2);

    store.selectionState.select(link1_2, true);

    expect(node1.selected).toBeFalsy();
    expect(node2.selected).toBeFalsy();
    expect(link1_2.selected).toBeTruthy();
  });
});
