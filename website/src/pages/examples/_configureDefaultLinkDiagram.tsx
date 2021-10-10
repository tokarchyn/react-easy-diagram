import { css, keyframes } from '@emotion/css';
import React from 'react';
import { createLinkDefault, Diagram } from 'react-easy-diagram';

// We use for our example emotion library for css-in-js, but you can use of 
// course vanilla css or any method of doing css you like
const lineAnim = keyframes`
  to {
    stroke-dashoffset: 40;
  }
`;
const mainLineClass = css`
  stroke-dasharray: 4;
  animation: ${lineAnim} 5s linear infinite;
`;

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
              classes: {
                base: [mainLineClass],
              },
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
