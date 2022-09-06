import {
  ICallbacks,
  OnLinksAddResult,
  OnLinksRemoveResult,
} from 'states/callbacks';
import { ILinkState, LinkState } from 'states/linkState';
import { INodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { isError, isSuccess } from 'utils/result';

describe('Links store', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
  });

  describe('Add/remove', () => {
    let mockOnLinksAddResultCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onLinksAddResult']>>,
      Parameters<NonNullable<ICallbacks['onLinksAddResult']>>
    >;

    let mockOnLinksRemoveResultCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onLinksRemoveResult']>>,
      Parameters<NonNullable<ICallbacks['onLinksRemoveResult']>>
    >;

    const nodes: INodeState[] = [
      { id: '1', position: [0, 10], type: 'input_output_horizontal' },
      { id: '2', position: [100, 110], type: 'input_output_horizontal' },
      { id: '3', position: [100, 110], type: 'input_output_horizontal' },
    ];

    beforeEach(() => {
      mockOnLinksAddResultCallback = jest.fn((a, b) => {});
      mockOnLinksRemoveResultCallback = jest.fn((a, b) => {});
      store.callbacks.import({
        onLinksAddResult: mockOnLinksAddResultCallback,
        onLinksRemoveResult: mockOnLinksRemoveResultCallback,
      });
    });

    const validateOnLinksAddResult = (
      invocation: number,
      info: OnLinksAddResult
    ) => {
      const callbackCall = mockOnLinksAddResultCallback.mock.calls[invocation];

      expect(callbackCall[0].addedLinks.length).toBe(info.addedLinks.length);
      info.addedLinks.forEach((v) =>
        expect(callbackCall[0].addedLinks).toContain(v)
      );

      expect(callbackCall[0].failedToAddLinks.length).toBe(
        info.failedToAddLinks.length
      );
      info.failedToAddLinks.forEach((v) =>
        expect(callbackCall[0].failedToAddLinks).toContain(v)
      );

      expect(callbackCall[0].importing).toBe(info.importing);
      expect(callbackCall[1]).toBe(store);
    };

    const validateOnLinksRemoveResult = (
      invocation: number,
      info: OnLinksRemoveResult
    ) => {
      const callbackCall =
        mockOnLinksRemoveResultCallback.mock.calls[invocation];

      expect(callbackCall[0].removedLinks.length).toBe(
        info.removedLinks.length
      );
      info.removedLinks.forEach((v) =>
        expect(callbackCall[0].removedLinks).toContain(v)
      );

      expect(callbackCall[0].failedToRemoveLinkIds).toEqual(
        info.failedToRemoveLinkIds
      );
      expect(callbackCall[1]).toBe(store);
    };

    const validateLink = (link: LinkState, linkObj: ILinkState) => {
      expect(link.id).toEqual(linkObj.id);
      expect(link.source).toBeDefined();
      expect(link.source?.port.id).toBe(linkObj.source.portId);
      expect(link.source?.port.node.id).toBe(linkObj.source.nodeId);
      expect(link.target).toBeDefined();
      expect(link.target?.port.id).toBe(linkObj.target.portId);
      expect(link.target?.port.node.id).toBe(linkObj.target.nodeId);
    };

    test('Import links', () => {
      const links: ILinkState[] = [
        {
          id: 'first',
          source: { nodeId: '1', portId: 'output' },
          target: { nodeId: '2', portId: 'input' },
        },
        {
          id: 'second',
          source: { nodeId: '2', portId: 'output' },
          target: { nodeId: '3', portId: 'input' },
        },
      ];

      store.importState(nodes, links);

      expect(store.linksStore.links.size).toBe(2);
      const linksImported = Array.from(store.linksStore.links.values());
      expect(mockOnLinksAddResultCallback.mock.calls.length).toBe(1);
      validateOnLinksAddResult(0, {
        addedLinks: linksImported,
        failedToAddLinks: [],
        importing: true,
      });

      validateLink(linksImported[0], links[0]);
      validateLink(linksImported[1], links[1]);
    });

    test('Import should not call callback if links are not provided', () => {
      store.linksStore.import();

      expect(mockOnLinksAddResultCallback.mock.calls.length).toBe(0);
    });

    test('Import new links should remove previous links', () => {
      store.importState(nodes, [
        {
          id: 'first',
          source: { nodeId: '1', portId: 'output' },
          target: { nodeId: '2', portId: 'input' },
        },
      ]);
      store.linksStore.import([]);

      expect(store.linksStore.links.size).toBe(0);
      expect(mockOnLinksAddResultCallback.mock.calls.length).toBe(1);
      expect(mockOnLinksRemoveResultCallback.mock.calls.length).toBe(0);
    });

    test('Add undefined link should failed', () => {
      const result = store.linksStore.addLink(undefined as any, false);

      expect(store.linksStore.links.size).toBe(0);
      expect(result.success).toBeFalsy();
      expect(result.value).toBeUndefined();
      expect(mockOnLinksAddResultCallback.mock.calls.length).toBe(1);
      validateOnLinksAddResult(0, {
        addedLinks: [],
        failedToAddLinks: [isError(result) ? result : undefined!],
        importing: false,
      });
    });

    test('Add links', () => {
      const links: ILinkState[] = [
        {
          id: 'first',
          source: { nodeId: '1', portId: 'output' },
          target: { nodeId: '2', portId: 'input' },
        },
        {
          id: 'second',
          source: { nodeId: '2', portId: 'output' },
          target: { nodeId: '3', portId: 'input' },
        },
      ];

      store.importState(nodes);
      const result = store.linksStore.addLinks(links);

      const linksImported = Array.from(store.linksStore.links.values());

      expect(store.linksStore.links.size).toBe(2);
      expect(result.length).toBe(2);
      expect(result[0].success).toBeTruthy();
      expect(result[0].value).toBe(linksImported[0]);
      expect(result[1].success).toBeTruthy();
      expect(result[1].value).toBe(linksImported[1]);

      expect(mockOnLinksAddResultCallback.mock.calls.length).toBe(1);
      validateOnLinksAddResult(0, {
        addedLinks: linksImported,
        failedToAddLinks: [],
        importing: false,
      });

      validateLink(linksImported[0], links[0]);
      validateLink(linksImported[1], links[1]);
    });

    test('Add link', () => {
      const link: ILinkState = {
        id: 'first',
        source: { nodeId: '1', portId: 'output' },
        target: { nodeId: '2', portId: 'input' },
      };

      store.importState(nodes);
      const result = store.linksStore.addLink(link);

      const linksImported = Array.from(store.linksStore.links.values());

      expect(store.linksStore.links.size).toBe(1);
      expect(result.success).toBeTruthy();
      expect(result.value).toBe(linksImported[0]);

      expect(mockOnLinksAddResultCallback.mock.calls.length).toBe(1);
      validateOnLinksAddResult(0, {
        addedLinks: linksImported,
        failedToAddLinks: [],
        importing: false,
      });

      validateLink(linksImported[0], link);
    });

    test('Add links should not call callback if links parameter is empty', () => {
      store.linksStore.addLinks([], false);
      expect(mockOnLinksAddResultCallback.mock.calls.length).toBe(0);
    });

    test('Add existed link should failed', () => {
      const link: ILinkState = {
        id: 'first',
        source: { nodeId: '1', portId: 'output' },
        target: { nodeId: '2', portId: 'input' },
      };
      store.importState(nodes);
      store.linksStore.addLink(link, false);

      const linkToAdd: ILinkState = {
        ...link,
        source: { nodeId: '3', portId: 'output' },
      };
      const result = store.linksStore.addLink(linkToAdd, false);

      const linksAdded = Array.from(store.linksStore.links.values());

      expect(result.success).toBeFalsy();
      expect(result.value).toBe(linkToAdd);
      expect(store.linksStore.links.size).toBe(1);

      expect(mockOnLinksAddResultCallback.mock.calls.length).toBe(2);
      validateOnLinksAddResult(1, {
        addedLinks: [],
        failedToAddLinks: [isError(result) ? result : undefined!],
        importing: false,
      });

      validateLink(linksAdded[0], link);
    });

    test('Rewrite link', () => {
      const link: ILinkState = {
        id: 'first',
        source: { nodeId: '1', portId: 'output' },
        target: { nodeId: '2', portId: 'input' },
      };
      store.importState(nodes);
      store.linksStore.addLink(link, false);

      const linkToAdd: ILinkState = {
        ...link,
        source: { nodeId: '3', portId: 'output' },
      };
      const result = store.linksStore.addLink(linkToAdd, true);

      const linksAdded = Array.from(store.linksStore.links.values());

      expect(result.success).toBeTruthy();
      expect(result.value).toBe(linksAdded[0]);
      expect(store.linksStore.links.size).toBe(1);

      expect(mockOnLinksAddResultCallback.mock.calls.length).toBe(2);
      validateOnLinksAddResult(1, {
        addedLinks: linksAdded,
        failedToAddLinks: [],
        importing: false,
      });

      validateLink(linksAdded[0], linkToAdd);
    });

    test('Existed link is not rewritten on adding many links by default', () => {
      const linkToAdd1: ILinkState = {
        id: '1',
        source: { nodeId: '1', portId: 'output' },
        target: { nodeId: '2', portId: 'input' },
      };
      const linkToAdd1WithDifference: ILinkState = {
        id: '1',
        source: { nodeId: '3', portId: 'output' },
        target: { nodeId: '2', portId: 'input' },
      };
      const linkToAdd2: ILinkState = {
        id: '2',
        source: { nodeId: '2', portId: 'output' },
        target: { nodeId: '3', portId: 'input' },
      };

      store.importState(nodes, [linkToAdd1]);

      const result = store.linksStore.addLinks([
        linkToAdd1WithDifference,
        linkToAdd2,
      ]);

      const linksImported = Array.from(store.linksStore.links.values());

      expect(store.linksStore.links.size).toBe(2);
      expect(result.length).toBe(2);
      expect(result[0].success).toBeFalsy();
      expect(result[0].value).toBe(linkToAdd1WithDifference);
      expect(result[1].success).toBeTruthy();
      expect(result[1].value).toBe(linksImported[1]);

      expect(mockOnLinksAddResultCallback.mock.calls.length).toBe(2);
      validateOnLinksAddResult(1, {
        addedLinks: linksImported.filter((l) => l.id === '2'),
        failedToAddLinks: [isError(result[0]) ? result[0] : undefined!],
        importing: false,
      });

      validateLink(linksImported[0], linkToAdd1);
      validateLink(linksImported[1], linkToAdd2);
    });

    test('Remove not existed link', () => {
      const result = store.linksStore.removeLink('someId');

      expect(result).toBeUndefined();

      expect(mockOnLinksRemoveResultCallback.mock.calls.length).toBe(1);
      validateOnLinksRemoveResult(0, {
        removedLinks: [],
        failedToRemoveLinkIds: ['someId'],
      });
    });

    test('Remove links', () => {
      const links: ILinkState[] = [
        {
          id: '1',
          source: { nodeId: '1', portId: 'output' },
          target: { nodeId: '2', portId: 'input' },
        },
        {
          id: '2',
          source: { nodeId: '2', portId: 'output' },
          target: { nodeId: '3', portId: 'input' },
        },
      ];
      store.importState(nodes, links);
      expect(store.linksStore.links.size).toBe(2);

      const results = store.linksStore.removeLinks(['1', '3']);

      expect(results.length).toBe(2);
      expect(store.linksStore.links.size).toBe(1);
      expect(store.linksStore.getLink('2')).toBeDefined();

      expect(mockOnLinksRemoveResultCallback.mock.calls.length).toBe(1);
      validateOnLinksRemoveResult(0, {
        removedLinks: [isSuccess(results[0]) ? results[0].value : undefined!],
        failedToRemoveLinkIds: ['3'],
      });
    });
  });
});
