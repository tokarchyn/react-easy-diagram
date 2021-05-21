import React from 'react';
import {
  Diagram,
  ILinkState,
  INodeState,
} from 'react-easy-diagram';

const generateState = (colNum: number, rowNum: number) => {
  const nodes: INodeState[] = [];
  const links: ILinkState[] = [];
  const getNodeId = (i: number, j: number) => `node_${i}_${j}`;

  for (let i = 0; i < colNum; i++) {
    for (let j = 0; j < rowNum; j++) {
      nodes.push({
        id: getNodeId(i, j),
        position: [i * 120, j * 120],
        type: 'star'
      });
      if (i - 1 >= 0) {
        links.push({
          source: {
            nodeId: getNodeId(i - 1, j),
            portId: 'right',
          },
          target: {
            nodeId: getNodeId(i, j),
            portId: 'left',
          },
        });
      }
      if (j - 1 >= 0) {
        links.push({
          source: {
            nodeId: getNodeId(i, j - 1),
            portId: 'bottom',
          },
          target: {
            nodeId: getNodeId(i, j),
            portId: 'top',
          },
        });
      }
    }
  }

  return { nodes, links };
};

export default () => <Diagram initState={generateState(10, 10)} />;
