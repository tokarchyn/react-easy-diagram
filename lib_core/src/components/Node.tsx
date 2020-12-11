import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DraggableCore } from 'react-draggable';
import { useRecoilCallback, useRecoilSnapshot, useRecoilState } from 'recoil';
import { useNodeState } from '../hooks/nodeHooks';
import { useDragAndZoom } from '../hooks/useDragAndZoom';
import { useNotifyRef } from '../hooks/useNotifyRef';
import { diagramScaleState } from '../states/diagramState';
import { nodeWithIdState } from '../states/nodeState';
import { addPoints, generateTransform, multiplyPoint, roundPoint, subtractPoints } from '../utils';

export interface NodeProps {
  id: string;
}

export const Node: React.FC<NodeProps> = (props) => {
  const [node, setNode] = useNodeState(props.id);
  const nodeRef = useNotifyRef<HTMLDivElement | null>(null);

  const nodeHasRef = !!node.ref;
  useEffect(() => {
    setNode((curValue) => ({
      ...curValue,
      ref: nodeRef,
    }));
  }, [nodeRef, nodeHasRef]);

  const getScale = useRecoilCallback(({ snapshot }) => () => {
    const scaleState = snapshot.getLoadable(diagramScaleState).contents;
    return typeof scaleState === 'number' ? scaleState : 1;
  });

  const {transform, translate} = useDragAndZoom({
    elemToAttachTo: nodeRef,
    parentScale: getScale(),
    initTranslate: node.position
  });

  useEffect(() => {
    setNode((currentNode) => {
      return { ...currentNode, position: translate };
    });
  }, [translate]);

  return (
    <div
      id={node.id}
      className='react_fast_diagram_Node react_fast_diagram_Node_Default'
      style={{
        transform: transform,
      }}
      ref={nodeRef}
    >
      <div
        style={{
          textAlign: 'center',
          margin: 'auto',
        }}
      >
        {props.id}
      </div>
    </div>
  );
};

export const NodeMemo = React.memo(Node);
