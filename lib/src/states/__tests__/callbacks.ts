import { Callbacks } from 'states/callbacks';

describe('Callbacks import', () => {
  let callbacks: Callbacks;

  beforeEach(() => {
    callbacks = new Callbacks();
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
