import React from 'react';
import { Diagram } from 'react-easy-diagram';

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'Node 1',
          position: [100, 100],
          type: 'output_horizontal'
        },
        {
          id: 'Node 2',
          position: [420, 300],
          type: 'input_horizontal'
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
      nodes:{
        gridSnap: 35 // or [10, 20] to set x and y snap separately
      }
    }}
  />
);
