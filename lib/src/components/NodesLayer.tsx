import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useRootStore } from 'hooks/useRootStore';
import { NodesStore } from 'states/nodesStore';
import { NodeWrapper } from 'components/NodeWrapper';

export const NodesLayer = observer<{nodesStore: NodesStore}>(({nodesStore}) => {
  const rootStore = useRootStore();

  useEffect(() => {
    rootStore.diagramState.zoomToFit();
  }, [])

  return (
    <div className="react_fast_diagram_Layer">
      {Array.from(nodesStore.nodes).map(([id, node]) => (
        <NodeWrapper key={node.id} node={node} />
      ))}
    </div>
  );
});
