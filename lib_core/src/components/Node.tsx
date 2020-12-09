import React, { useEffect, useRef, useState } from 'react';
import { DraggableCore } from 'react-draggable';
import { useRecoilCallback, useRecoilSnapshot, useRecoilState } from 'recoil';
import { useNodeState } from '../hooks/nodeHooks';
import { useDragAndZoom } from '../hooks/useDragAndZoom';
import { useNotifyRef } from '../hooks/useNotifyRef';
import { diagramScaleState } from '../states/diagramState';
import { roundPoint } from '../utils';

export interface NodeProps {
  id: string;
}

export const Node: React.FC<NodeProps> = (props) => {
  const [node, setNode] = useNodeState(props.id);
  const nodeRef = useNotifyRef<HTMLDivElement|null>(null);

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

  const {transform, scale} = useDragAndZoom({
    elemToAttachTo: nodeRef
  });

  return (
    // <DraggableCore
    //   enableUserSelectHack={true}
    //   nodeRef={nodeRef}
    //   onStart={(e) => {
    //     e.stopPropagation();
    //   }}
    //   onDrag={(e, d) => {
    //     const scale = getScale();
    //     setNode((curValue) => ({
    //       ...curValue,
    //       position: roundPoint({
    //         x: curValue.position.x + d.deltaX / scale,
    //         y: curValue.position.y + d.deltaY / scale,
    //       }),
    //     }));
    //   }}
    // >
      <div
        id={node.id}
        className='react_fast_diagram_Node'
        ref={nodeRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'white',
          border: '2px solid WhiteSmoke',
          top: node.position.y,
          left: node.position.x,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
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
    // </DraggableCore>
  );
};

export const NodeMemo = React.memo(Node);
