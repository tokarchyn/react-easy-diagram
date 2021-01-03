import React from 'react';
import { useNodeUserInteraction } from '../hooks/userInteractions/useNodeUserInteraction';
import { NodeState } from '../states/nodeState';
import { observer } from 'mobx-react-lite';

export const NodeWrapper = observer<{node: NodeState}>(({ node }) => {
  const { userInteractionElemRef } = useNodeUserInteraction(node);

  return (
    <div
      id={node.id}
      className='react_fast_diagram_NodeWrapper'
      style={{
        transform: node.transformString,
      }}
      ref={node.ref}
    >
      <node.componentDefinition.component
        draggableRef={userInteractionElemRef}
        entity={node}
        settings={node.componentDefinition.settings}
      />
    </div>
  );
});
