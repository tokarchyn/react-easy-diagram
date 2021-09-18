import React from 'react';
import { Diagram } from 'react-easy-diagram';

export default function () {
  return (
    <Diagram
      settings={{
        callbacks: {
          nodesAdded: (addResults, failedToAdd, importing, store) => {
            console.log('Added nodes:');
            console.log(addResults.map((r) => r.export()));
          },
          nodePositionChanged: (node, oldPos, newPos, isDragActive, store) => {
            console.log(
              `Position of node '${
                node.id
              }' changed from '${oldPos.toString()}' to '${newPos.toString()}'`
            );
          },
          nodeDragStateChanged: (node, isDragActive) => {
            console.log(
              `${isDragActive ? 'Start' : 'Finish'} dragging of node with id '${
                node.id
              }'`
            );
          },
        },
      }}
      initState={{
        nodes: [
          {
            id: 'node_1',
            label: 'Node 1',
            position: [300, 300],
            type: 'output_horizontal',
          },
          {
            id: 'node_2',
            label: 'Node 2',
            position: [520, 400],
            type: 'input_output_horizontal',
          },
          {
            id: 'node_3',
            label: 'Node 3',
            position: [520, 200],
            type: 'input_horizontal',
          },
        ],
        links: [
          {
            source: {
              nodeId: 'node_1',
              portId: 'output',
            },
            target: {
              nodeId: 'node_2',
              portId: 'input',
            },
          },
          {
            source: {
              nodeId: 'node_1',
              portId: 'output',
            },
            target: {
              nodeId: 'node_3',
              portId: 'input',
            },
          },
          {
            source: {
              nodeId: 'node_3',
              portId: 'input',
            },
            target: {
              nodeId: 'node_2',
              portId: 'output',
            },
          },
        ],
      }}
    />
  );
}
