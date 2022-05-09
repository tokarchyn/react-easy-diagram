import { css } from '@emotion/css';
import React from 'react';
import {
  DigramInner,
  DragAndDropContainer,
  DiagramContext,
  createNodeOnDrop,
} from 'react-easy-diagram';

export default function () {
  return (
    <DiagramContext
      initState={{
        nodes: [
          {
            id: 'node_1',
            label: 'Node 1',
            position: [300, 300],
            type: 'output_horizontal',
          },
        ],
      }}
    >
      <div className={container_class}>
        <DigramInner />
        <DragAndDropContainer
          items={[
            {
              draggable: <NodeTemplate label='Input-output' />,
              onDrop: createNodeOnDrop({ type: 'input_output_horizontal', label: 'Input-output node' }),
            },
            {
              draggable: <NodeTemplate label='Input' />,
              onDrop: createNodeOnDrop({ type: 'input_horizontal', label: 'Input node' }),
            },
            {
              draggable: <NodeTemplate label='Output' />,
              onDrop: createNodeOnDrop({ type: 'output_horizontal', label: 'Output node' }),
            },
            {
              draggable: <NodeTemplate label='Star' />,
              droppable: (
                <div style={{ fontSize: '2rem', textAlign: 'center' }}>⭐</div>
              ),
              onDrop: createNodeOnDrop({ type: 'star', label: 'Star node' }),
              onDrag: (event) =>
                console.log(`Dragging position: ${event.position}`),
              onDragStart: (event) => console.log(`Dragging started`),
            },
          ]}
        />
      </div>
    </DiagramContext>
  );
}

const container_class = css`
  width: 100%;
  height: 100%;
  display: flex;

  > :last-child {
    border: 0 solid rgb(0, 0, 0, 0.1);
    flex-shrink: 0;
  }

  @media (min-width: 800px) {
    flex-direction: row-reverse;

    > :last-child {
      border-right-width: 1px;
      width: 300px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    > :last-child {
      border-top-width: 1px;
      width: 100%;
      height: 150px;
    }
  }
`;

function NodeTemplate(props: { label: string }) {
  return (
    <div
      className={'react_fast_diagram_NodeDefault'}
      style={{
        width: 250,
        height: 30,
      }}
    >
      {props.label}
    </div>
  );
}
