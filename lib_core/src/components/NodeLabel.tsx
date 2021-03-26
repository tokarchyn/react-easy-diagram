import { observer } from 'mobx-react-lite';
import React from 'react';
import { NodeState } from '../states';

export const NodeLabel: React.FC<{ node: NodeState }> = observer(({ node }) => {
  return <span>{node.label ? node.label : node.id}</span>;
});
