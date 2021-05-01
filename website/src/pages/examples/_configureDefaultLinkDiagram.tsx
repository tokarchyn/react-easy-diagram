import React from 'react';
import {
  createLinkDefault,
  Diagram,
} from '@react-easy-diagram/core';

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'Node 1',
          position: [100, 100],
          componentType: 'input_output_horizontal'
        },
        {
          id: 'Node 2',
          position: [420, 300],
          componentType: 'input_output_horizontal'
        },
        {
          id: 'Node 3',
          position: [420, 100],
          componentType: 'input_output_horizontal'
        },
      ],
      links: [
        {
          source: { nodeId: 'Node 1', portId: 'output' },
          target: { nodeId: 'Node 2', portId: 'input' },
        },
      ],
    }}
    settings={{
      links: {
        components: {
          default: createLinkDefault({
            color: 'grey',
            strokeWidth: 1,
          }),
          linkCreation: createLinkDefault({
            color: 'green',
            strokeWidth: 3,
            cirleRadius: 3,
          }),
        },
      },
    }}
  />
);
