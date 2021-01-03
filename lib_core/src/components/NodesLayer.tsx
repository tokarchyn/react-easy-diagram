import { observer } from 'mobx-react-lite';
import React from 'react';
import { NodesStore } from '../states/nodesStore';
import { NodeWrapper } from './NodeWrapper';

export const NodesLayer = observer<{nodesStore: NodesStore}>(({nodesStore}) => {
  return (
    <div>
      {Object.values(nodesStore.nodes).map((node) => (
        <NodeWrapper key={node.id} node={node} />
      ))}
    </div>
  );
});
