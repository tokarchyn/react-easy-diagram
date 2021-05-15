import React, { useState } from 'react';
import {
  createPortInnerDefault,
  Diagram,
  disableNodeUserInteractionClassName,
  INodeVisualComponentProps,
  Point,
  Port,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';
import styles from '../styles.module.css'; 

const SomeNode = observer<INodeVisualComponentProps>(
  ({ draggableRef, entity }) => {
    const [
      portOffsetFromNodeCenter,
      setPortOffsetFromNodeCenter,
    ] = useState<number>(6);

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
            className={`${styles.textInput} ${disableNodeUserInteractionClassName}`}
            type='number'
            onChange={(event) =>
              setPortOffsetFromNodeCenter(parseInt(event.target.value) ?? 0)
            }
            defaultValue={portOffsetFromNodeCenter}
          />
        </span>
        <div>Yellow port's offset from origin position:</div>
        <span>
          X:{' '}
          <input
            className={`${styles.textInput} ${disableNodeUserInteractionClassName}`}
            type='number'
            style={{ width: 50, marginRight: 10 }}
            onChange={(event) => {
              event.persist();
              setYellowPortOffsetFromOrigin((current) => [
                parseInt(event.target.value),
                current[1],
              ]);
            }}
            defaultValue={yellowPortOffsetFromOrigin[0]}
          />
          Y:{' '}
          <input
            className={`${styles.textInput} ${disableNodeUserInteractionClassName}`}
            type='number'
            style={{ width: 50 }}
            onChange={(event) => {
              event.persist();
              setYellowPortOffsetFromOrigin((current) => [
                current[0],
                parseInt(event.target.value),
              ]);
            }}
            defaultValue={yellowPortOffsetFromOrigin[1]}
          />
        </span>
        <Port
          id='left-top'
          position='left-top'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='left-center'
          position='left-center'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='left-bottom'
          position='left-bottom'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />

        <Port
          id='top-left'
          position='top-left'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='top-center'
          position='top-center'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='top-right'
          position='top-right'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />

        <Port
          id='right-top'
          position='right-top'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='right-center'
          position='right-center'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
          offsetFromOrigin={yellowPortOffsetFromOrigin}
          type='custom_port'
        />
        <Port
          id='right-bottom'
          position='right-bottom'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />

        <Port
          id='bottom-left'
          position='bottom-left'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='bottom-center'
          position='bottom-center'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='bottom-right'
          position='bottom-right'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />

        <Port
          id='diagonal-left-top'
          position='diagonal-left-top'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='diagonal-right-top'
          position='diagonal-right-top'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='diagonal-right-bottom'
          position='diagonal-right-bottom'
          offsetFromNodeCenter={portOffsetFromNodeCenter}
        />
        <Port
          id='diagonal-left-bottom'
          position='diagonal-left-bottom'
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
