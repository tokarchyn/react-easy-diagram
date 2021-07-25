import React from 'react';
import { Diagram, NodeState, SuccessResult } from 'react-easy-diagram';

export default function () {
  return (
    <Diagram
      settings={{
        callbacks: {
          nodesAdded: (addResults, importing, store) => {
            console.log('Added nodes:');
            console.log(
              addResults
                .filter((r) => r.success)
                .map((r) => (r as SuccessResult<NodeState>).value.export())
            );
          },
        },
      }}
      initState={{
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
      }}
    />
  );
}