import React from 'react';
import { useRecoilState } from 'recoil';
import { nodesIdsState } from '../states/nodeState';
import { NodeMemo } from './Node';

const NodesLayer: React.FC = () => {
  const [nodes] = useRecoilState(nodesIdsState);

  return (
    <div>
      {nodes.map((id) => (
        <NodeMemo key={id} id={id} />
      ))}
    </div>
  );
};

export const NodesLayerMemorized = React.memo(NodesLayer);
