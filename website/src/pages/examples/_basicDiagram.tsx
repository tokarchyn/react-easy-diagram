import React from 'react';
import {
  Diagram,
} from 'react-easy-diagram';

export default function () {
  return (
    <Diagram
      initState={{
        nodes: [
          {
            id: 'node_1',
            label: 'Node 1',
            position: [300, 300],
            componentType: 'output_horizontal'
          },
          {
            id: 'node_2',
            label: 'Node 2',
            position: [520, 400],
            componentType: 'input_output_horizontal'
          },
          {
            id: 'node_3',
            label: 'Node 3',
            position: [520, 200],
            componentType: 'input_horizontal'
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
            }
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
