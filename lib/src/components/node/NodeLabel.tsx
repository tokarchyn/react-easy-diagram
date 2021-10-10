import { observer } from 'mobx-react-lite';
import React from 'react';
import { NodeState } from 'states/nodeState';

export const NodeLabel: React.FC<{ node: NodeState }> = observer(({ node }) => {
  return <div className='react_fast_diagram_NodeLabel'>{node.label ? node.label : node.id}</div>;
});
