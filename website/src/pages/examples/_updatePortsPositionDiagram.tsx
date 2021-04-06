import React, { useEffect, useState } from 'react';
import {
  Diagram,
  INodeVisualComponentProps,
  Port,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

const NodeWithExternalData = observer<INodeVisualComponentProps>(
  ({ draggableRef, entity }) => {
    const [fieldsNumber, setFieldsNumber] = useState<number>(0);

    useEffect(() => {
      // Size and position changes in DOM element are not reported to the library, so it is
      // required to trigger recalculation if you think size or position is changed. There is also
      // possibility to store your data that could change size or position in port's or node's "extra" property,
      // changes in these properties along with the other are already handled by library.
      entity.recalculatePortsSizeAndPosition();
    }, [fieldsNumber]);

    return (
      <div className='react_fast_diagram_Node_Default' ref={draggableRef}>
        <div>Node with external state that cause node resize</div>
        <div>Fields:</div>

        {[...Array(fieldsNumber)].map((v, i) => (
          <span key={i}>
            <input
              type='number'
              style={{ width: 100 }}
              defaultValue={`Text field #${i}`}
            />
          </span>
        ))}

        <div>
          <button type='button' onClick={() => setFieldsNumber((c) => c + 1)}>
            Add field
          </button>
        </div>

        <Port id='left' position='left-center' />
        <Port id='top' position='center-top' linkDirection='up' />
        <Port id='right' position='right-center' />
        <Port id='bottom' position='center-bottom' linkDirection='down' />
      </div>
    );
  }
);

const NodeWithInternalData = observer<INodeVisualComponentProps>(
  ({ draggableRef, entity: node }) => {
    const fieldsNumber = node.extra ?? 0;
    return (
      <div className='react_fast_diagram_Node_Default' ref={draggableRef}>
        <div>Node with internal state that cause node resize</div>
        <div>Fields:</div>

        {[...Array(fieldsNumber)].map((v, i) => (
          <span key={i}>
            <input
              type='number'
              style={{ width: 100 }}
              defaultValue={`Text field #${i}`}
            />
          </span>
        ))}

        <div>
          <button type='button' onClick={() => node.setExtra(fieldsNumber + 1)}>
            Add field
          </button>
        </div>

        <Port id='left' position='left-center' />
        <Port id='top' position='center-top' linkDirection='up' />
        <Port id='right' position='right-center' />
        <Port id='bottom' position='center-bottom' linkDirection='down' />
      </div>
    );
  }
);

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'external',
          position: [0, 0],
          componentType: 'external',
        },
        {
          id: 'internal',
          position: [400, 0],
          componentType: 'internal',
        },
        {
          id: 'left_node',
          position: [-200, 100],
          ports: [
            {
              id: 'port',
              type: 'right',
            },
          ],
        },
        {
          id: 'top_node',
          position: [300, -200],
          ports: [
            {
              id: 'port',
              type: 'bottom',
            },
          ],
        },
        {
          id: 'right_node',
          position: [800, 100],
          ports: [
            {
              id: 'port',
              type: 'left',
            },
          ],
        },
        {
          id: 'bottom_node',
          position: [300, 300],
          ports: [
            {
              id: 'port',
              type: 'top',
            },
          ],
        },
      ],
      links: [
        {
          source: {
            nodeId: 'internal',
            portId: 'left',
          },
          target: {
            nodeId: 'external',
            portId: 'right',
          },
        },
        {
          source: {
            nodeId: 'internal',
            portId: 'top',
          },
          target: {
            nodeId: 'top_node',
            portId: 'port',
          },
        },
        {
          source: {
            nodeId: 'internal',
            portId: 'right',
          },
          target: {
            nodeId: 'right_node',
            portId: 'port',
          },
        },
        {
          source: {
            nodeId: 'internal',
            portId: 'bottom',
          },
          target: {
            nodeId: 'bottom_node',
            portId: 'port',
          },
        },

        {
          source: {
            nodeId: 'external',
            portId: 'left',
          },
          target: {
            nodeId: 'left_node',
            portId: 'port',
          },
        },
        {
          source: {
            nodeId: 'external',
            portId: 'top',
          },
          target: {
            nodeId: 'top_node',
            portId: 'port',
          },
        },
        {
          source: {
            nodeId: 'external',
            portId: 'bottom',
          },
          target: {
            nodeId: 'bottom_node',
            portId: 'port',
          },
        },
      ],
    }}
    settings={{
      nodes: {
        components: {
          internal: NodeWithInternalData,
          external: NodeWithExternalData,
        },
      },
    }}
  />
);
