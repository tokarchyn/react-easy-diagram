import React from 'react';
import { useNodeUserInteraction } from '../hooks/userInteractions/useNodeUserInteraction';
import { NodeState } from '../states/nodeState';
import { observer } from 'mobx-react-lite';

export const NodeContext = React.createContext<NodeState | null>(null);

export const NodeWrapper = observer<{ node: NodeState }>(({ node }) => {
  const { userInteractionElemRef } = useNodeUserInteraction(node);

  return (
    <NodeContext.Provider value={node}>
      <div
        id={node.id}
        className='react_fast_diagram_NodeWrapper'
        style={{
          left: node.position[0],
          top: node.position[1],
          zIndex: node.selected ? 10 : undefined,
        }}
        ref={node.ref}
      >
        <node.componentDefinition.component
          draggableRef={userInteractionElemRef}
          entity={node}
          settings={node.componentDefinition.settings}
        />
      </div>
    </NodeContext.Provider>
  );
});
