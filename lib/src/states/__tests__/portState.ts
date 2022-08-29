import { RootStore } from 'states/rootStore';

describe('Port state', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
  });

  test('Port values should overwrite those in component defined port', () => {
    const defaultComponent =
      store.nodesSettings.visualComponents.getComponent('default');
    defaultComponent.import({
      component: defaultComponent.component,
      settings: {
        ports: [
          {
            id: '1',
            data: 'data',
            isConnectionEnabled: true,
            label: 'label',
            linkDirection: 'down',
            offsetFromNodeCenter: 1,
            offsetFromOrigin: [1, 2],
            position: 'bottom-center',
            type: 'test',
          },
        ],
      },
    });

    store.nodesStore.import([
      {
        id: 'mynode',
        position: [0, 10],
        ports: [
          {
            id: '1',
            data: 'new data',
            linkDirection: 'left',
            offsetFromOrigin: null,
          },
        ],
      },
    ]);

    const node = store.nodesStore.getNode('mynode')!;
    expect(node).toBeDefined();
    const port = node.getPortOrThrowException('1');
    expect(port.id).toEqual('1');
    expect(port.data).toEqual('new data');
    expect(port.isConnectionEnabled).toEqual(true);
    expect(port.label).toEqual('label');
    expect(port.linkDirection).toEqual('left');
    expect(port.offsetFromNodeCenter).toEqual(1);
    expect(port.offsetFromOrigin).toBeUndefined();
    expect(port.position).toEqual('bottom-center');
    expect(port.type).toEqual('test');
  });

  test('Port is not defined in component but exists in node state', () => {
    store.nodesStore.import([
      {
        id: 'mynode',
        position: [0, 10],
        ports: [
          {
            id: '1',
            data: 'new data',
            linkDirection: 'left',
            offsetFromOrigin: null,
          },
        ],
      },
    ]);

    const node = store.nodesStore.getNode('mynode')!;
    expect(node).toBeDefined();
    const port = node.getPortOrThrowException('1');
    expect(port.id).toEqual('1');
    expect(port.data).toEqual('new data');
    expect(port.isConnectionEnabled).toEqual(true);
    expect(port.label).toBeUndefined();
    expect(port.linkDirection).toEqual('left');
    expect(port.offsetFromNodeCenter).toBeUndefined();
    expect(port.offsetFromOrigin).toBeUndefined();
    expect(port.position).toBeUndefined();
    expect(port.type).toEqual('default');
  });

  test('Update port in component should trigger update port state', () => {
    const defaultComponent =
      store.nodesSettings.visualComponents.getComponent('default');
    defaultComponent.import({
      component: defaultComponent.component,
      settings: {
        ports: [
          {
            id: '1',
            label: 'label',
          },
        ],
      },
    });

    store.nodesStore.import([
      {
        id: 'mynode',
        position: [0, 10],
        ports: [
          {
            id: '1',
            data: 'data',
          },
        ],
      },
    ]);

    const node = store.nodesStore.getNode('mynode')!;
    expect(node).toBeDefined();
    const port = node.getPortOrThrowException('1');
    expect(port.id).toEqual('1');
    expect(port.data).toEqual('data');
    expect(port.label).toEqual('label');

    defaultComponent.import({
      component: defaultComponent.component,
      settings: {
        ports: [
          {
            id: '1',
            label: 'new label',
            data: 'new data',
          },
        ],
      },
    });

    expect(port.data).toEqual('data');
    expect(port.label).toEqual('new label');
  });
});
