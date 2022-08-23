import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import {
  ENABLE_NODE_USER_INTERACTION_CLASS,
  useNodeUserInteraction,
} from 'hooks/userInteractions/useNodeUserInteraction';
import { NodeState } from 'states/nodeState';
import { observer } from 'mobx-react-lite';
import { useNotifyRef } from 'hooks/useNotifyRef';
import { action } from 'mobx';
import { useRootStore } from 'hooks/useRootStore';

export const NodeWrapper = observer<{ node: NodeState }>(({ node }) => {
  const {diagramSettings} = useRootStore();
  useNodeUserInteraction(node);

  let className = `react_fast_diagram_NodeWrapper ${ENABLE_NODE_USER_INTERACTION_CLASS}`;
  if (
    !diagramSettings.userInteraction.arePointerInteractionsDisabled
  ) {
    // Disable touch actions as useGesture library recommends
    className += ' react_fast_diagram_touch_action_disabled';
  }

  return (
    <NodeContext.Provider value={node}>
        <div
          id={node.id}
          className={className}
          style={{
            transform: `translate(${node.position[0]}px, ${node.position[1]}px)`,
            zIndex: node.selected ? 10 : undefined,
          }}
          ref={node.ref}
        >
          <node.componentDefinition.component
            entity={node}
            settings={node.componentDefinition.settings}
          />
        </div>
    </NodeContext.Provider>
  );
});

export const NodeContext = React.createContext<NodeState | null>(null);