import React from 'react';
import { createLinkDefault, Diagram } from 'react-easy-diagram';

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'Node 1',
          position: [100, 100],
          type: 'input_output_horizontal',
        },
        {
          id: 'Node 2',
          position: [420, 300],
          type: 'input_output_horizontal',
        },
        {
          id: 'Node 3',
          position: [420, 100],
          type: 'input_output_horizontal',
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
            mainLine: {
              style: {
                base: {
                  stroke: 'grey',
                  strokeWidth: 1,
                },
              },
            },
          }),
          linkCreation: createLinkDefault({
            mainLine: {
              style: {
                base: {
                  stroke: 'green',
                  strokeWidth: 2,
                },
              },
            },
            secondaryLine: {
              style: {
                base: {
                  stroke: 'green',
                  strokeWidth: 5,
                },
              },
            },
          }),
        },
      },
    }}
  />
);
