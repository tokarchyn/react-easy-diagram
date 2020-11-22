import React from 'react';
import { useRecoilState } from 'recoil';
import { nodesIdsState } from '../DiagramState';
import { NodeMemo } from './Node';

const NodesLayer: React.FC = () => {
  const [nodes] = useRecoilState(nodesIdsState);

  return (
    <React.Fragment>
      {nodes.map((id) => (
        <NodeMemo key={id} id={id} />
      ))}
    </React.Fragment>
  );
};

export const NodesLayerMemorized = React.memo(NodesLayer);
