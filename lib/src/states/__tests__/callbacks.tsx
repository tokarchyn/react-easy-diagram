import {cleanup, fireEvent, render} from '@testing-library/react';
import { Diagram } from 'components/Diagram';
import React from 'react';
import { Callbacks, ICallbacks, OnLinkingStarted } from 'states/callbacks';
import { NodeState } from 'states/nodeState';
import { PortState } from 'states/portState';
import { RootStore } from 'states/rootStore';
import { Point } from 'utils/point';

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
      onLinkValidation: callback,
      onNodesAddResult: callback,
      onNodePositionChanged: callback,
      dragStateChanged: callback
    });

    const exportedCallbacks = callbacks.export();
    expect(exportedCallbacks.onLinkValidation).toBe(callback);
    expect(exportedCallbacks.onNodesAddResult).toBe(callback);
    expect(exportedCallbacks.onNodePositionChanged).toBe(callback);
    expect(exportedCallbacks.dragStateChanged).toBe(callback);
  });

  describe('nodePositionChanged callback', () => {
    let mockNodePositionChangedCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onNodePositionChanged']>>,
      Parameters<NonNullable<ICallbacks['onNodePositionChanged']>>
    >;

    const validateCallbackCall = (
      mockArgs: any[],
      node: NodeState,
      oldPos: Point,
      newPos: Point
    ) => {
      expect(mockArgs[0]).toBe(node);
      expect(mockArgs[1]).toEqual(oldPos);
      expect(mockArgs[2]).toEqual(newPos);
      expect(mockArgs[3]).toEqual(node.isDragActive);
      expect(mockArgs[4]).toBe(store);
    };

    beforeEach(() => {
      mockNodePositionChangedCallback = jest.fn((_a, _b, _c, _d, _e) => {});
      store.callbacks.import({
        onNodePositionChanged: mockNodePositionChangedCallback,
      });
    });

    test('Is not called on initialization', () => {
      new NodeState(store, 'test', {
        position: [5, 10],
      });

      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is not called if position remains the same', () => {
      const node = new NodeState(store, 'test', {
        position: [5, 10],
      });
      node.setPosition([5, 10]);
      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(0);
    });

    test('Is called for new node position set by code', () => {
      const initPosition: Point = [5, 10];
      const newPosition: Point = [50, 100];
      const node = new NodeState(store, 'test', { position: initPosition });

      node.setPosition(newPosition);

      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(
        mockNodePositionChangedCallback.mock.calls[0],
        node,
        initPosition,
        newPosition
      );
    });

    test('Is called for new node position during dragging', () => {
      const initPosition: Point = [5, 10];
      const newPosition: Point = [50, 100];
      const node = new NodeState(store, 'test', { position: initPosition });

      node.isDragActive = true;
      node.setPosition(newPosition);

      expect(mockNodePositionChangedCallback.mock.calls.length).toBe(1);
      validateCallbackCall(
        mockNodePositionChangedCallback.mock.calls[0],
        node,
        initPosition,
        newPosition
      );
    });
  });

  describe('onLinkingStart/onLinkingEnd callbacks', () => {
    let mockOnLinkingStartCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onLinkingStarted']>>,
      Parameters<NonNullable<ICallbacks['onLinkingStarted']>>
    >;

    let mockOnLinkingEndCallback: jest.Mock<
      ReturnType<NonNullable<ICallbacks['onLinkingEnded']>>,
      Parameters<NonNullable<ICallbacks['onLinkingEnded']>>
    >;
    
    const validateOnLinkingStartCallbackCall = (
      mockArgs: [info: OnLinkingStarted, rootStore: RootStore],
      sourcePort: PortState,
    ) => {
      expect(mockArgs[0].sourcePort).toBe(sourcePort);
      expect(mockArgs[1]).toBe(store);
    };

    let portInput: PortState, portOutput: PortState;

    beforeEach(() => {
      mockOnLinkingStartCallback = jest.fn((_a, _b) => {});
      mockOnLinkingEndCallback = jest.fn((_a, _b) => {});
      store.callbacks.import({
        onLinkingStarted: mockOnLinkingStartCallback,
        onLinkingEnded: mockOnLinkingEndCallback,
      });
      store.nodesStore.import([
        {
          id: '1',
          position: [0, 0],
          ports: [
            {
              id: 'output'
            }
          ]
        },
        {
          id: '2',
          position: [5, 10],
          ports: [
            {
              id: 'input'
            }
          ]
        }
      ])

      const node1 = store.nodesStore.getNode('1')!;
      expect(node1).toBeDefined();
      const node2 = store.nodesStore.getNode('2')!;
      expect(node2).toBeDefined();
      portOutput = node1.getPort('output')!;
      expect(portOutput).toBeDefined();
      portInput = node2.getPort('input')!;
      expect(portInput).toBeDefined();
    });

    test('Is not called on initialization', () => {      
      store.linksStore.linkCreation.startLinking(portOutput, [0,1]);
      
      expect(mockOnLinkingStartCallback.mock.calls.length).toBe(1);
      validateOnLinkingStartCallbackCall(mockOnLinkingStartCallback.mock.calls[0], portOutput);
    });

    test('Is not called on initialization', () => {      
      const {queryByLabelText, getByLabelText} = render(
        <Diagram initState={{
          nodes: [
            {
              id: '1',
              position: [0, 0],
              ports: [
                {
                  id: 'output'
                }
              ]
            },
            {
              id: '2',
              position: [5, 10],
              ports: [
                {
                  id: 'input'
                }
              ]
            }
          ]
        }} />
      );
    });
  });
});
