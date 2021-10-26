import { css } from '@emotion/css';
import React from 'react';
import {
  addNodeCommand,
  Diagram,
  DigramInner,
  DragAndDropContainer,
  DragAndDropEvent,
} from 'react-easy-diagram';

export default function () {
  return (
    <Diagram
    settings={{
      diagram: {
        userInteraction: {
          disableAllMouseAndTouchInteractions: true
        }
      }
    }}
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
              onDrop: createNodeOnDrop('input_output_horizontal'),
            },
            {
              draggable: <NodeTemplate label='Input' />,
              onDrop: createNodeOnDrop('input_horizontal'),
            },
            {
              draggable: <NodeTemplate label='Output' />,
              onDrop: createNodeOnDrop('output_horizontal'),
            },
            {
              draggable: <NodeTemplate label='Star' />,
              droppable: (
                <div style={{ fontSize: '2rem', textAlign: 'center' }}>⭐</div>
              ),
              onDrop: createNodeOnDrop('star'),
              onDrag: (event) =>
                console.log(`Dragging position: ${event.position}`),
              onDragStart: (event) => console.log(`Dragging started`),
            },
          ]}
        />
      </div>
    </Diagram>
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

function createNodeOnDrop(nodeType: string) {
  return (event: DragAndDropEvent) => {
    // Check if drop occured above the diagram
    if (event.position) {
      event.store.commandExecutor.execute(
        addNodeCommand({
          position: event.position,
          label: 'Newly created',
          type: nodeType,
        })
      );
    }
  };
}

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
