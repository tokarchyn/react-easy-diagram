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
  const renderedPortsContextValue = usePortsCleanUp(node);

  let className = `react_fast_diagram_NodeWrapper ${ENABLE_NODE_USER_INTERACTION_CLASS}`;
  if (
    !diagramSettings.userInteraction.arePointerInteractionsDisabled
  ) {
    // Disable touch actions as useGesture library recommends
    className += ' react_fast_diagram_touch_action_disabled';
  }

  return (
    <NodeContext.Provider value={node}>
      <RenderedPortsComponentsContext.Provider
        value={renderedPortsContextValue}
      >
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
      </RenderedPortsComponentsContext.Provider>
    </NodeContext.Provider>
  );
});

export const NodeContext = React.createContext<NodeState | null>(null);
interface IRenderedPorts {
  render: (id: string) => void;
  unrender: (id: string) => void;
}
export const RenderedPortsComponentsContext = React.createContext<IRenderedPorts>(
  { render: () => undefined, unrender: () => undefined }
);

/**
 * Clean up old ports.
 * @param node
 * @returns ports that are currently rendered
 */
const usePortsCleanUp = (node: NodeState): IRenderedPorts => {
  const renderedPortsRef = useNotifyRef<string[]>([]);
  const renderedPortsContextValue = useMemo<IRenderedPorts>(
    () => ({
      render: (id: string) => {
        if (!renderedPortsRef.current.includes(id)) {
          renderedPortsRef.current = [...renderedPortsRef.current, id];
        }
      },
      unrender: (id: string) => {
        if (renderedPortsRef.current.includes(id)) {
          renderedPortsRef.current = renderedPortsRef.current.filter(
            (oldId) => oldId !== id
          );
        }
      },
    }),
    [renderedPortsRef]
  );

  useLayoutEffect(() => {
    renderedPortsRef.current = [];
  }, [node, renderedPortsRef]);

  useEffect(() => {
    const extraPortsIds = Object.keys(node.ports).filter(
      (id) => !renderedPortsRef.current.includes(id)
    );
    action(() => extraPortsIds.forEach((id) => node.removePort(id)));
  }, [renderedPortsRef.current]);

  return renderedPortsContextValue;
};
