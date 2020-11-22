import React, { useEffect, useRef } from 'react';
import { DraggableCore } from 'react-draggable';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { diagramScaleState, nodeWithIdState } from '../DiagramState';
import { useNotiftRef } from '../hooks';

export interface NodeProps {
  id: string;
}

export const Node: React.FC<NodeProps> = (props) => {
  const [node, setNode] = useRecoilState(nodeWithIdState(props.id));
  const nodeRef = useNotiftRef<HTMLDivElement>();

  useEffect(() => {
    setNode((curValue) => ({
      ...curValue,
      ref: nodeRef
    }))
  }, [nodeRef])

  const getScale = useRecoilCallback(({ snapshot }) => () => {
    const scaleState = snapshot.getLoadable(diagramScaleState).contents;
    return typeof scaleState === 'number' ? scaleState : 1;
  });

  return (
    <DraggableCore
      onStart={(e) => e.stopPropagation()}
      onStop={(e) => e.stopPropagation()}
      onDrag={(e, d) => {
        e.stopPropagation();
        const scale = getScale();
        setNode((curValue) => ({
          ...curValue,
          position: {
            x: curValue.position.x + d.deltaX / scale,
            y: curValue.position.y - d.deltaY / scale,
          },
        }));
      }}
    >
      <div
        ref={nodeRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'white',
          border: '2px solid WhiteSmoke',
          position: 'absolute',
          bottom: node.position.y,
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
    </DraggableCore>
  );
};

export const NodeMemo = React.memo(Node);
