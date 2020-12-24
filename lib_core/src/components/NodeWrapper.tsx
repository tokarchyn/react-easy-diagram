import React, { useEffect, useRef } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { defaultNodeType } from '..';
import { useNodeState } from '../hooks/nodeHooks';
import { useDragAndZoom } from '../hooks/useDragAndZoom';
import { useNotifyRef } from '../hooks/useNotifyRef';
import { diagramScaleState } from '../states/diagramState';
import { nodeComponentDefinitionState } from '../states/nodesSettingsState';

export interface INodeWrapperProps {
  id: string;
}

export const NodeWrapper: React.FC<INodeWrapperProps> = (props) => {
  const [node, setNode] = useNodeState(props.id);
  const nodeComponentDefinition = useRecoilValue(
    nodeComponentDefinitionState(node.type ?? defaultNodeType)
  );
  const nodeRef = useNotifyRef<HTMLDivElement | null>(null);
  const draggableRef = useRef<HTMLElement | null>(null);

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

  const getScale = useRecoilCallback(({ snapshot }) => () => {
    const scaleState = snapshot.getLoadable(diagramScaleState).contents;
    return typeof scaleState === 'number' ? scaleState : 1;
  });

  const { transform, translate } = useDragAndZoom({
    elemToAttachTo: draggableRef,
    parentScale: getScale(),
    initTranslate: node.position,
  });

  useEffect(() => {
    setNode((currentNode) => {
      return { ...currentNode, position: translate };
    });
  }, [translate]);

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
        ref={draggableRef}
        node={node}
        setNode={setNode}
        settings={nodeComponentDefinition.settings}
      />
    </div>
  );
};

export const NodeWrapperMemo = React.memo(NodeWrapper);
