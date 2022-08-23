import React, { useEffect, useState } from 'react';
import {
  createPortInnerDefault,
  Diagram,
  DISABLE_NODE_USER_INTERACTION_CLASS,
  INodeVisualComponentProps,
  Point,
  Port,
} from 'react-easy-diagram';
import { observer } from 'mobx-react-lite';
import styles from '../styles.module.css';

const SomeNode = observer<INodeVisualComponentProps>(({ entity }) => {
  const [portOffsetFromNodeCenter, setPortOffsetFromNodeCenter] =
    useState<number>(6);

  const [customPortOffsetFromOrigin, setCustomPortOffsetFromOrigin] =
    useState<Point>([0, 0]);

  useEffect(() => {
    entity.ports.forEach((port) =>
      port.setOffsetFromNodeCenter(portOffsetFromNodeCenter)
    );
  }, [portOffsetFromNodeCenter]);

  useEffect(() => {
    entity.ports.forEach((port) => {
      if (port.type === 'custom_port') {
        port.setOffsetFromOrigin(customPortOffsetFromOrigin);
      }
    });
  }, [customPortOffsetFromOrigin]);

  return (
    <div
      className='react_fast_diagram_NodeDefault'
      style={{
        padding: 15,
        border: entity.selected ? '#6eb7ff solid 1px' : '',
      }}
    >
      <div>Offset from center of node:</div>
      <span>
        <input
          className={`${styles.textInput} ${DISABLE_NODE_USER_INTERACTION_CLASS}`}
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
          className={`${styles.textInput} ${DISABLE_NODE_USER_INTERACTION_CLASS}`}
          type='number'
          style={{ width: 50, marginRight: 10 }}
          onChange={(event) => {
            event.persist();
            setCustomPortOffsetFromOrigin((current) => [
              parseInt(event.target.value),
              current[1],
            ]);
          }}
          defaultValue={customPortOffsetFromOrigin[0]}
        />
        Y:{' '}
        <input
          className={`${styles.textInput} ${DISABLE_NODE_USER_INTERACTION_CLASS}`}
          type='number'
          style={{ width: 50 }}
          onChange={(event) => {
            event.persist();
            setCustomPortOffsetFromOrigin((current) => [
              current[0],
              parseInt(event.target.value),
            ]);
          }}
          defaultValue={customPortOffsetFromOrigin[1]}
        />
      </span>

      {Array.from(entity.ports).map(([id]) => (
        <Port id={id} key={id} />
      ))}
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
          default: {
            component: SomeNode,
            settings: {
              ports: [
                {
                  id: 'left-top',
                  position: 'left-top',
                },
                {
                  id: 'left-center',
                  position: 'left-center',
                },
                {
                  id: 'left-bottom',
                  position: 'left-bottom',
                },
                {
                  id: 'top-left',
                  position: 'top-left',
                },
                {
                  id: 'top-center',
                  position: 'top-center',
                },
                {
                  id: 'top-right',
                  position: 'top-right',
                },
                {
                  id: 'right-top',
                  position: 'right-top',
                },
                {
                  id: 'right-center',
                  position: 'right-center',
                  type: 'custom_port',
                },
                {
                  id: 'right-bottom',
                  position: 'right-bottom',
                },
                {
                  id: 'bottom-left',
                  position: 'bottom-left',
                },
                {
                  id: 'bottom-center',
                  position: 'bottom-center',
                },
                {
                  id: 'bottom-right',
                  position: 'bottom-right',
                },
                {
                  id: 'diagonal-left-top',
                  position: 'diagonal-left-top',
                },
                {
                  id: 'diagonal-right-top',
                  position: 'diagonal-right-top',
                },
                {
                  id: 'diagonal-right-bottom',
                  position: 'diagonal-right-bottom',
                },
                {
                  id: 'diagonal-left-bottom',
                  position: 'diagonal-left-bottom',
                },
              ],
            },
          },
        },
      },
      ports: {
        components: {
          custom_port: createPortInnerDefault({
            style: {
              base: {
                backgroundColor: 'yellow',
              },
            },
          }),
        },
      },
    }}
  />
);
