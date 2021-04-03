import React from 'react';
import {
  createPortInnerDefault,
  Diagram,
} from '@react-easy-diagram/core';

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'Node 1',
          position: [100, 100],
          ports: [{ id: 'port', type: 'right' }],
        },
        {
          id: 'Node 2',
          position: [420, 300],
          ports: [
            { id: 'port_1', type: 'left' },
            { id: 'port_2', type: 'right' },
          ],
        },
      ],
      links: [
        {
          source: { nodeId: 'Node 1', portId: 'port' },
          target: { nodeId: 'Node 2', portId: 'port_1' },
        },
      ],
    }}
    settings={{
      ports: {
        portComponents: {
          default: createPortInnerDefault({
            size: [10, 10],
            color: '#6eb7ff',
            dragColor: '#49f860',
            hoverColor: '#49f860',
            invalidColor: '#fa4040',
          }),
          left: createPortInnerDefault({
            size: [7, 15],
          }),
        },
      },
    }}
  />
);
