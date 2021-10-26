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
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
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
            },
          ]}
        />
      </div>
    </Diagram>
  );
}

function createNodeOnDrop(nodeType: string) {
  return (event: DragAndDropEvent) =>
    event.store.commandExecutor.execute(
      addNodeCommand({
        position: event.position,
        label: 'Newly created',
        type: nodeType,
      })
    );
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
