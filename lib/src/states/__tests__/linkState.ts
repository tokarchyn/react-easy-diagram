import { RootStore } from 'states/rootStore';

describe('Link state', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
    store.importState([
      { id: '1', position: [0, 10], type: 'input_output_horizontal' },
      { id: '2', position: [100, 110], type: 'input_output_horizontal' },
      { id: '3', position: [100, 110], type: 'input_output_horizontal' },
    ]);
  });

  test('Swap endpoints', () => {
    store.linksStore.addLink({
      id: 'link',
      source: { nodeId: '1', portId: 'output' },
      target: { nodeId: '2', portId: 'input' },
    });

    const link = store.linksStore.getLink('link');
    expect(link).toBeDefined();
    if (link === undefined) throw new Error();

    link.swapEndpoints();

    expect(link.sourceEndpoint).toStrictEqual({ nodeId: '2', portId: 'input' });
    expect(link.targetEndpoint).toStrictEqual({
      nodeId: '1',
      portId: 'output',
    });
    expect(link.source?.nodeId).toBe('2');
    expect(link.source?.portId).toBe('input');
    expect(link.target?.nodeId).toBe('1');
    expect(link.target?.portId).toBe('output');
  });
});
