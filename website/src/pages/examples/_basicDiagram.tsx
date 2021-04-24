import React from 'react';
import {
  createCurvedLinkPathConstructor,
  createDefaultMiniControl,
  createLinkDefault,
  Diagram,
} from '@react-easy-diagram/core';

export default function () {
  return (
    <Diagram
      initState={{
        nodes: [
          {
            id: 'node_1',
            label: 'Node 1',
            position: [300, 300],
            ports: [{ id: 'output_1', type: 'bottom' }],
          },
          {
            id: 'node_2',
            label: 'Node 2',
            position: [520, 400],
            ports: [
              { id: 'input_1', type: 'top' },
              { id: 'input_2', type: 'top' },
              { id: 'output_1', type: 'right' },
              { id: 'output_2', type: 'right' },
              { id: 'output_3', type: 'right' },
            ],
          },
          {
            id: 'node_3',
            label: 'Node 3',
            position: [520, 200],
            ports: [
              { id: 'input_1', type: 'top' },
              { id: 'output_1', type: 'bottom' },
              { id: 'output_2', type: 'bottom' },
            ],
          },
        ],
        links: [
          {
            source: {
              nodeId: 'node_1',
              portId: 'output_1',
            },
            target: {
              nodeId: 'node_2',
              portId: 'input_1',
            },
            componentType: 'attention',
          },
          {
            source: {
              nodeId: 'node_1',
              portId: 'output_1',
            },
            target: {
              nodeId: 'node_3',
              portId: 'input_1',
            },
          },
          {
            source: {
              nodeId: 'node_3',
              portId: 'output_1',
            },
            target: {
              nodeId: 'node_2',
              portId: 'input_1',
            },
          },
        ],
      }}
      settings={{
        links: {
          components: {
            attention: createLinkDefault({ color: 'red' }),
          }
        }
      }}
    />
  );
}
