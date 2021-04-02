import React, { useState } from 'react';
import {
  createPortDefault,
  Diagram,
  INodeVisualComponentProps,
  Point,
  Port,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';

const SomeNode = observer<INodeVisualComponentProps>(({ draggableRef }) => {
  const [
    portOffsetFromNodeCenter,
    setPortOffsetFromNodeCenter,
  ] = useState<number>();

  const [
    yellowPortOffsetFromOrigin,
    setYellowPortOffsetFromOrigin,
  ] = useState<Point>([0, 0]);

  return (
    <div className='react_fast_diagram_Node_Default' ref={draggableRef}>
      <div>Offset from center of node:</div>
      <span>
        <input
          type='number'
          onChange={(event) =>
            setPortOffsetFromNodeCenter(parseInt(event.target.value))
          }
          defaultValue={0} 
        />
      </span>
      <div>Yellow port's offset from origin position:</div>
      <span>
        X:{' '}
        <input
          type='number'
          style={{ width: 50, marginRight: 10 }}
          onChange={(event) => {
            event.persist();
            setYellowPortOffsetFromOrigin((current) => [
              parseInt(event.target.value),
              current[1],
            ]);
          }}
          defaultValue={0}
        />
        Y:{' '}
        <input
          type='number'
          style={{ width: 50 }}
          onChange={(event) => {
            event.persist();
            setYellowPortOffsetFromOrigin((current) => [
              current[0],
              parseInt(event.target.value),
            ]);
          }}
          defaultValue={0}
        />
      </span>
      <Port
        id='port_1'
        position='left-top'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
      />
      <Port
        id='port_5'
        position='left-top'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
        offsetFromOrigin={[0, 15]}
      />
      <Port
        id='port_2'
        position='left-center'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
      />
      <Port
        id='port_3'
        position='left-bottom'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
      />
      <Port
        id='port_4'
        position='center-top'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
        linkDirection='up'
      />
      <Port
        id='port_6'
        position='center-bottom'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
        linkDirection='down'
      />
      <Port
        id='port_7'
        position='right-top'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
      />
      <Port
        id='port_8'
        position='right-center'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
        offsetFromOrigin={yellowPortOffsetFromOrigin}
        type='custom_port'
      />
      <Port
        id='port_9'
        position='right-bottom'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
      />
    </div>
  );
});

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'node_1',
          position: [100, 100],
        },
      ],
      links: [],
    }}
    settings={{
      nodes: {
        components: {
          default: SomeNode,
        },
      },
      ports: {
        portComponents: {
          custom_port: createPortDefault({
            color: 'yellow',
          }),
        },
      },
    }}
  />
);
