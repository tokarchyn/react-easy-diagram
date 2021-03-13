import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useRootStore } from '../hooks/useRootStore';
import { NodesStore } from '../states/nodesStore';
import { NodeWrapper } from './NodeWrapper';

export const NodesLayer = observer<{nodesStore: NodesStore}>(({nodesStore}) => {
  const rootStore = useRootStore();

  useEffect(() => {
    rootStore.diagramState.zoomToFit();
  }, [])

  return (
    <div>
      {Object.values(nodesStore.nodes).map((node) => (
        <NodeWrapper key={node.id} node={node} />
      ))}
    </div>
  );
});
