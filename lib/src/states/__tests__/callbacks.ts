import { RootStore } from 'states/rootStore';

describe('Callbacks import', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
  });

  test('Import validateLinkEndpoints callback', () => {
    let callback = () => true;
    store.importSettings({
      callbacks: {
        validateLinkEndpoints: callback,
      },
    });
    expect(store.callbacks.validateLinkEndpoints).toBe(callback);
  });

  test('Import nodesAdded callback', () => {
    let callback = () => undefined;
    store.importSettings({
      callbacks: {
        nodesAdded: callback,
      },
    });
    expect(store.callbacks.nodesAdded).toBe(callback);
  });
});
