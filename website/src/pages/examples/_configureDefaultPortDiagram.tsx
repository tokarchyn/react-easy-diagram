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
          componentType: 'output_horizontal',
        },
        {
          id: 'Node 2',
          position: [420, 300],
          componentType: 'custom',
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
            size: [10, 10],
            color: '#ee6eff',
            dragColor: '#f849d2',
            hoverColor: '#f849d2',
            invalidColor: '#cccccc',
          }),
          big_yellow: createPortInnerDefault({
            size: [10, 20],
            color: '#ffe657',
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
