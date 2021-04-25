import React from 'react';
import {
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
        {
          id: 'Node 3',
          position: [420, 100],
          ports: [{ id: 'port', type: 'left' }],
        },
      ],
      links: [
        {
          source: { nodeId: 'Node 1', portId: 'port' },
          target: { nodeId: 'Node 2', portId: 'port_1' },
        },
      ],
    }}
  />
);