import { Callbacks } from 'states/callbacks';
import { RootStore } from 'states/rootStore';

describe('Callbacks import', () => {
  let callbacks: Callbacks;

  beforeEach(() => {
    const rootStore = new RootStore();
    callbacks = rootStore.callbacks;
  });

  test('Import/Export', () => {
    let callback = () => true;
    callbacks.import({
      validateLinkEndpoints: callback,
      nodesAdded: callback
    });

    const exportedCallbacks = callbacks.export();
    expect(exportedCallbacks.validateLinkEndpoints).toBe(callback);
    expect(exportedCallbacks.nodesAdded).toBe(callback);
  });
});
