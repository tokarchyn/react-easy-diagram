import React, { useState } from 'react';
import {
  createNodeDefault,
  createPortInnerDefault,
  Diagram,
  NodeState,
  Point,
  Port,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';

const SomeNode = observer<{node: NodeState}>(() => {
  const [
    portOffsetFromNodeCenter,
    setPortOffsetFromNodeCenter,
  ] = useState<number>();

  const [
    yellowPortOffsetFromOrigin,
    setYellowPortOffsetFromOrigin,
  ] = useState<Point>([0, 0]);

  return (
    <>
      <div>Offset from center of node:</div>
      <span>
        <input
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
        position='left-top'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
      />
      <Port
        position='left-top'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
        offsetFromOrigin={[0, 15]}
      />
      <Port
        position='left-center'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
      />
      <Port
        position='left-bottom'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
      />
      <Port
        position='center-top'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
        linkDirection='up'
      />
      <Port
        position='center-bottom'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
        linkDirection='down'
      />
      <Port
        position='right-top'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
      />
      <Port
        position='right-center'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
        offsetFromOrigin={yellowPortOffsetFromOrigin}
        type='custom_port'
      />
      <Port
        position='right-bottom'
        offsetFromNodeCenter={portOffsetFromNodeCenter}
      />
    </>
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
          default: createNodeDefault({innerNode: SomeNode}),
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