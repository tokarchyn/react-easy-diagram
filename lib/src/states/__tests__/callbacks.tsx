import { Callbacks } from 'states/callbacks';
import { RootStore } from 'states/rootStore';

describe('Callbacks import', () => {
  let callbacks: Callbacks;
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
    callbacks = store.callbacks;
  });

  test('Import/Export', () => {
    let callback = () => true;
    callbacks.import({
      onNodesAddResult: callback,
      onNodesRemoveResult: callback,
      onNodePositionChanged: callback,
      onDragStarted: callback,
      onDrag: callback,
      onDragEnded: callback,
      onImportedStateRendered: callback,
      onLinkValidation: callback,
      onLinksAddResult: callback,
      onLinksRemoveResult: callback,
      onLinkingStarted: callback,
      onLinkingEnded: callback,
    });

    const exportedCallbacks = callbacks.export();
    expect(exportedCallbacks.onNodesAddResult).toBe(callback);
    expect(exportedCallbacks.onNodesRemoveResult).toBe(callback);
    expect(exportedCallbacks.onNodePositionChanged).toBe(callback);
    expect(exportedCallbacks.onDragStarted).toBe(callback);
    expect(exportedCallbacks.onDrag).toBe(callback);
    expect(exportedCallbacks.onImportedStateRendered).toBe(callback);
    expect(exportedCallbacks.onLinkValidation).toBe(callback);
    expect(exportedCallbacks.onLinksAddResult).toBe(callback);
    expect(exportedCallbacks.onLinksRemoveResult).toBe(callback);
    expect(exportedCallbacks.onLinkingStarted).toBe(callback);
    expect(exportedCallbacks.onLinkingEnded).toBe(callback);
  });
});
