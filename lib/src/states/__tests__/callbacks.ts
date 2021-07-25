import { RootStore } from "../rootStore";

describe("Callbacks", () => {
  test('Import nodesAdded callback', () => {
    let store = new RootStore();
    let callback = () => undefined;
    store.importSettings({
      callbacks: {
        nodesAdded: callback
      }
    })
    expect(store.callbacks.nodesAdded).toBe(callback);
  });
});
