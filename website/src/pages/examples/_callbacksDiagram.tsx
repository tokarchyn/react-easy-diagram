import React, { useEffect, useRef, useState } from 'react';
import {
  Diagram,
  IDiagramInitState,
  ISettings,
  NodeState,
  RootStore,
} from 'react-easy-diagram';
import { reaction } from 'mobx';
import { useCallback } from 'react';

const settings: ISettings = {
  callbacks: {
    onNodesAddResult: (info, store) => {
      if (info.addedNodes.length > 0) {
        console.log(
          'Added nodes:',
          info.addedNodes.map((n) => n.export())
        );
      }
    },
    onNodesRemoveResult(info, rootStore) {
      if (info.removedNodes.length > 0) {
        console.log(
          `Removed nodes: ${info.removedNodes
            .map((n) => n.id)
            .reduce((prev, val) => prev + ', ' + val)}`
        );
      }
    },
    onNodePositionChanged: (info, store) => {
      console.log(
        `Position of node '${
          info.node.id
        }' changed from '${info.oldValue.toString()}' to '${info.newValue.toString()}'`
      );
    },
    onDragStarted: ({ nodes }, store) => {
      console.log(
        `Start dragging nodes: '${nodes
          .map((n) => n.id)
          .reduce((prev, val) => prev + ', ' + val)}'`
      );
    },
    onDrag: ({ delta }, store) => {
      console.log(`Drag by ${delta}`);
    },
    onDragEnded: ({ nodes }, store) => {
      console.log(
        `End dragging nodes: '${nodes
          .map((n) => n.id)
          .reduce((prev, val) => prev + ', ' + val)}'`
      );
    },
    onImportedStateRendered: (store) => {
      console.log('Imported state has been rendered');
    },
    onLinkingStarted(info, rootStore) {
      console.log(`Start linking port '${info.sourcePort.fullId}'`);
    },
    onLinkingEnded(info, rootStore) {
      if (info.linked) {
        console.log(
          `Port '${info.sourcePort.fullId}' has been linked with '${info.targetPort?.fullId}'`
        );
      } else {
        console.log(`Port '${info.sourcePort.fullId}' has not been linked`);
      }
    },
    onLinksAddResult(info, rootStore) {
      console.log(`Links add result: `, info);
    },
    onLinksRemoveResult(info, rootStore) {
      console.log(`Links remove result: `, info);
    },
  },
};

const initState: IDiagramInitState = {
  nodes: [
    {
      id: 'node_1',
      label: 'Node 1',
      position: [300, 300],
      type: 'output_horizontal',
    },
    {
      id: 'node_2',
      label: 'Node 2',
      position: [520, 400],
      type: 'input_output_horizontal',
    },
    {
      id: 'node_3',
      label: 'Node 3',
      position: [520, 200],
      type: 'input_horizontal',
    },
  ],
  links: [
    {
      source: {
        nodeId: 'node_1',
        portId: 'output',
      },
      target: {
        nodeId: 'node_2',
        portId: 'input',
      },
    },
    {
      source: {
        nodeId: 'node_1',
        portId: 'output',
      },
      target: {
        nodeId: 'node_3',
        portId: 'input',
      },
    },
    {
      source: {
        nodeId: 'node_3',
        portId: 'input',
      },
      target: {
        nodeId: 'node_2',
        portId: 'output',
      },
    },
  ],
};

export default function () {
  const storeRef = useRef<RootStore>(null);

  const [savedState, setSavedState] = useState<IDiagramInitState>(initState);

  const saveStateCallback = useCallback(() => {
    if (storeRef.current) {
      const state = storeRef.current?.export();
      setSavedState(state);
      console.log(state);
    }
  }, [storeRef, setSavedState]);

  const restoreLastSavedCallback = useCallback(() => {
    storeRef.current?.importState(savedState?.nodes, savedState?.links);
  }, [storeRef, savedState]);

  // To react on changes in the diagram state, in addition to callbacks the library provides,
  // you can also use mobx functions like reaction, autorun and when. More info here: https://mobx.js.org/reactions.html
  // Here is example that will help you to do some work when selection changed.
  useEffect(
    () =>
      reaction(
        () => {
          if (storeRef.current) {
            // When you read properties in any observable object mobx subscribes to changes in this properties
            // and will call function you provide as a second argument to reaction function.
            return storeRef.current.selectionState.selectedItems.map((i) => i);
          }
        },
        (selectedItems, prevSelectedItems) => {
          console.log(
            'Selection updated. Current selected nodes: ',
            selectedItems
              ?.filter((i) => i instanceof NodeState)
              .map((n) => n.id)
          );
        }
      ),
    [storeRef.current]
  );

  return (
    <Diagram storeRef={storeRef} settings={settings} initState={initState}>
      <button
        onClick={saveStateCallback}
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
        }}
      >
        Save state
      </button>
      <button
        onClick={restoreLastSavedCallback}
        style={{
          position: 'absolute',
          top: '35px',
          right: '5px',
        }}
      >
        Restore last saved
      </button>
      <div
        style={{
          position: 'absolute',
          top: '65px',
          right: '5px',
        }}
      >
        Open dev tools to see logs -{'>'}
      </div>
    </Diagram>
  );
}
