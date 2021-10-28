import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useRootStore } from 'hooks/useRootStore';
import { NodesStore } from 'states/nodesStore';
import { NodeWrapper } from 'components/node/NodeWrapper';

export const NodesLayer = observer<{
  transform: string;
}>(({ transform }) => {
  const rootStore = useRootStore();

  useEffect(() => {
    if (rootStore.diagramSettings.zoomToFitSettings.callOnLoad)
      rootStore.diagramState.zoomToFit();
  }, []);

  return (
    <div className='react_fast_diagram_Layer' style={{ transform: transform }}>
      <NodesList />
    </div>
  );
});

const NodesList = observer(() => {
  const { nodesStore } = useRootStore();
  return (
    <>
      {' '}
      {Array.from(nodesStore.nodes).map(([id, node]) => (
        <NodeWrapper key={node.id} node={node} />
      ))}
    </>
  );
});
