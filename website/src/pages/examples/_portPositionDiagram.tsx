import React, { useState } from 'react';
import {
  createNodeDefault,
  createPortInnerDefault,
  Diagram,
  disableNodeUserInteractionClassName,
  INodeVisualComponentProps,
  NodeState,
  Point,
  Port,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';

const SomeNode = observer<INodeVisualComponentProps>(
  ({ draggableRef, entity }) => {
    const [
      portOffsetFromNodeCenter,
      setPortOffsetFromNodeCenter,
    ] = useState<number>();

    const [
      yellowPortOffsetFromOrigin,
      setYellowPortOffsetFromOrigin,
    ] = useState<Point>([0, 0]);

    return (
      <div
        ref={draggableRef}
        className='react_fast_diagram_Node_Default'
        style={{
          padding: 15,
          border: entity.selected ? '#6eb7ff solid 1px' : '',
        }}
      >
        <div>Offset from center of node:</div>
        <span>
          <input
            className={disableNodeUserInteractionClassName}
            type='number'
            onChange={(event) =>
              setPortOffsetFromNodeCenter(parseInt(event.target.value) ?? 0)
            }
            defaultValue={0}
          />
        </span>
        <div>Yellow port's offset from origin position:</div>
        <span>
          X:{' '}
          <input
            className={disableNodeUserInteractionClassName}
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
            className={disableNodeUserInteractionClassName}
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
          id='1'
          position='left-top'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='2'
          position='left-top'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
          offsetFromOrigin={[0, 15]}
        />
        <Port
          id='3'
          position='left-center'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='4'
          position='left-bottom'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='5'
          position='center-top'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
          linkDirection='up'
        />
        <Port
          id='6'
          position='center-bottom'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
          linkDirection='down'
        />
        <Port
          id='7'
          position='right-top'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='8'
          position='right-center'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
          offsetFromOrigin={yellowPortOffsetFromOrigin}
          type='custom_port'
        />
        <Port
          id='9'
          position='right-bottom'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
      </div>
    );
  }
);

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
          custom_port: createPortInnerDefault({
            color: 'yellow',
          }),
        },
      },
    }}
  />
);
