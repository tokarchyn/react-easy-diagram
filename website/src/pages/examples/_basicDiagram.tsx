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
            id: 'Node 1',
            position: [300, 300],
            ports: [{ id: 'output_1', type: 'bottom' }],
          },
          {
            id: 'Node 2',
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
            id: 'Node 3',
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
              nodeId: 'Node 1',
              portId: 'output_1',
            },
            target: {
              nodeId: 'Node 2',
              portId: 'input_1',
            },
            componentType: 'attention',
          },
          {
            source: {
              nodeId: 'Node 1',
              portId: 'output_1',
            },
            target: {
              nodeId: 'Node 3',
              portId: 'input_1',
            },
          },
          {
            source: {
              nodeId: 'Node 3',
              portId: 'output_1',
            },
            target: {
              nodeId: 'Node 2',
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
