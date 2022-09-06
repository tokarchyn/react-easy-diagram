import { cleanup, fireEvent, render } from '@testing-library/react';
import { Diagram } from 'components/Diagram';
import React from 'react';
import { Callbacks, ICallbacks, OnLinkingStarted } from 'states/callbacks';
import { NodeState } from 'states/nodeState';
import { PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { Point } from 'utils/point';
import { createDummyHTMLElement } from 'utils/__tests__/testUtils';

describe('Callbacks import', () => {

  // TODO: Setup Jest to work with React rendering

  // let store: RootStore;

  // let mockOnLinkingStartCallback: jest.Mock<
  //   ReturnType<NonNullable<ICallbacks['onLinkingStarted']>>,
  //   Parameters<NonNullable<ICallbacks['onLinkingStarted']>>
  // >;

  // let mockOnLinkingEndCallback: jest.Mock<
  //   ReturnType<NonNullable<ICallbacks['onLinkingEnded']>>,
  //   Parameters<NonNullable<ICallbacks['onLinkingEnded']>>
  // >;

  // const validateOnLinkingStartCallbackCall = (
  //   mockArgs: [info: OnLinkingStarted, rootStore: RootStore],
  //   sourcePort: PortState
  // ) => {
  //   expect(mockArgs[0].sourcePort).toBe(sourcePort);
  //   expect(mockArgs[1]).toBe(store);
  // };

  // let portInput: PortState, portOutput: PortState;

  // beforeEach(() => {
  //   store = new RootStore();

  //   mockOnLinkingStartCallback = jest.fn((_a, _b) => {});
  //   mockOnLinkingEndCallback = jest.fn((_a, _b) => {});
  //   store.callbacks.import({
  //     onLinkingStarted: mockOnLinkingStartCallback,
  //     onLinkingEnded: mockOnLinkingEndCallback,
  //   });
  //   store.nodesStore.import([
  //     {
  //       id: '1',
  //       position: [0, 0],
  //       ports: [
  //         {
  //           id: 'output',
  //         },
  //       ],
  //     },
  //     {
  //       id: '2',
  //       position: [5, 10],
  //       ports: [
  //         {
  //           id: 'input',
  //         },
  //       ],
  //     },
  //   ]);

  //   const node1 = store.nodesStore.getNode('1')!;
  //   expect(node1).toBeDefined();
  //   node1.ref.current = createDummyHTMLElement({
  //     position: [0,0],
  //     size: [100,100],
  //   })
  //   const node2 = store.nodesStore.getNode('2')!;
  //   expect(node2).toBeDefined();
  //   node2.ref.current = createDummyHTMLElement({
  //     position: [5,10],
  //     size: [100,100],
  //   })
  //   portOutput = node1.getPort('output')!;
  //   expect(portOutput).toBeDefined();
  //   portOutput.ref.current = createDummyHTMLElement({
  //     position: [0,0],
  //     size: [10,10],
  //   })
  //   portInput = node2.getPort('input')!;
  //   expect(portInput).toBeDefined();
  //   portInput.ref.current = createDummyHTMLElement({
  //     position: [0,0],
  //     size: [10,10],
  //   })
  // });

  // test('Typical flow', () => {
  //   store.linksStore.linkCreation.startLinking(portOutput, [0, 1]);

  //   expect(mockOnLinkingStartCallback.mock.calls.length).toBe(1);
  //   validateOnLinkingStartCallbackCall(
  //     mockOnLinkingStartCallback.mock.calls[0],
  //     portOutput
  //   );
  //   expect(store.linksStore.linkCreation.isLinking).toBeTruthy();
  //   expect(store.linksStore.linkCreation.source).toBeDefined();
  //   expect(store.linksStore.linkCreation.source?.nodeId).toBe('1');
  //   expect(store.linksStore.linkCreation.source?.portId).toBe('output');
  //   expect(store.linksStore.linkCreation.source?.port.fullId).toBe('1-output');
  //   expect(store.linksStore.linkCreation.target).toBeUndefined();


  // });
});
