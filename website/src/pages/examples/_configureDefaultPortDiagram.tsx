import React from 'react';
import {
  createNode,
  createPortInnerDefault,
  Diagram,
} from 'react-easy-diagram';

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'Node 1',
          position: [100, 100],
          type: 'output_horizontal',
        },
        {
          id: 'Node 2',
          position: [420, 300],
          type: 'custom',
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
      ports: {
        portComponents: {
          default: createPortInnerDefault({
            style: {
              base: {
                width: 10,
                height: 10,
                backgroundColor: '#ee6eff',
              },
              invalid: {
                backgroundColor: '#cccccc',
              },
            },
          }),
          big_yellow: createPortInnerDefault({
            style: {
              base: {
                width: 10,
                height: 20,
                backgroundColor: '#ffe657',
              },
            },
          }),
        },
      },
      nodes: {
        components: {
          custom: createNode({
            ports: [
              { id: 'input', type: 'big_yellow', position: 'left-center' },
            ],
          }),
        },
      },
    }}
  />
);
