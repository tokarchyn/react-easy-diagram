import React, { useEffect } from 'react';
import { SetterOrUpdater, useRecoilValue } from 'recoil';
import { defaultNodeType } from '..';
import { useNodeState } from '../hooks/nodeHooks';
import { useNotifyRef } from '../hooks/useNotifyRef';
import { useNodeUserInteraction } from '../hooks/userInteractions/useNodeUserInteraction';
import { nodeComponentDefinitionState } from '../states/nodesSettingsState';
import { NodeState } from '../states/nodeState';

export interface INodeWrapperProps {
  id: string;
}

export const NodeWrapper: React.FC<INodeWrapperProps> = (props) => {
  const [node, setNode] = useNodeState(props.id);
  const nodeComponentDefinition = useRecoilValue(
    nodeComponentDefinitionState(node.type ?? defaultNodeType)
  );
  const nodeRef = useNodeRef(node, setNode);
  const { transform, userInteractionElemRef } = useNodeUserInteraction(
    node,
    setNode
  );

  return (
    <div
      id={node.id}
      className='react_fast_diagram_NodeWrapper'
      style={{
        transform: transform,
      }}
      ref={nodeRef}
    >
      <nodeComponentDefinition.component
        ref={userInteractionElemRef}
        node={node}
        setNode={setNode}
        settings={nodeComponentDefinition.settings}
      />
    </div>
  );
};

export const NodeWrapperMemo = React.memo(NodeWrapper);

function useNodeRef(
  node: NodeState,
  setNode: SetterOrUpdater<NodeState>
): React.MutableRefObject<HTMLDivElement | null> {
  const nodeRef = useNotifyRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setNode((curValue) => {
      if (curValue.ref !== nodeRef) {
        return {
          ...curValue,
          ref: nodeRef,
        };
      } else return curValue;
    });
  }, [nodeRef, node.ref]);

  return nodeRef;
}
