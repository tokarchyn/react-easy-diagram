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
      nodesAdded: callback,
      nodePositionChanged: callback,
      dragStateChanged: callback
    });

    const exportedCallbacks = callbacks.export();
    expect(exportedCallbacks.validateLinkEndpoints).toBe(callback);
    expect(exportedCallbacks.nodesAdded).toBe(callback);
    expect(exportedCallbacks.nodePositionChanged).toBe(callback);
    expect(exportedCallbacks.dragStateChanged).toBe(callback);
  });
});
