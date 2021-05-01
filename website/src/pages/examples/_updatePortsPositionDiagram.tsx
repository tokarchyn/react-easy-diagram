import React, { useEffect, useState } from 'react';
import {
  Diagram,
  disableNodeUserInteractionClassName,
  INodeVisualComponentProps,
  Port,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';

const NodeWithExternalData = observer<INodeVisualComponentProps>(
  ({ draggableRef, entity: node }) => {
    const [linesNumber, setLinesNumber] = useState<number>(0);

    useEffect(() => {
      // Size and position changes in DOM element are not reported to the library, so it is
      // required to trigger recalculation if you think size or position is changed. There is also
      // possibility to store your data that could change size or position in port's or node's "extra" property,
      // changes in these properties along with the other are already handled by library.
      node.recalculatePortsSizeAndPosition();
    }, [linesNumber]);

    return (
      <div
        className='react_fast_diagram_Node_Default'
        ref={draggableRef}
        style={{ padding: 15, border: node.selected ? '#6eb7ff solid 1px' : '' }}
      >
        <div>Node with external state that cause node resize</div>
        <div>Fields:</div>

        {[...Array(linesNumber)].map((v, i) => (
          <span key={i}>Line {i}</span>
        ))}

        <div>
          <button
            className={disableNodeUserInteractionClassName}
            type='button'
            onClick={() => setLinesNumber((c) => c + 1)}
          >
            Add line
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
    const linesNumber = node.extra ?? 0;
    return (
      <div
        className='react_fast_diagram_Node_Default'
        ref={draggableRef}
        style={{ padding: 15, border: node.selected ? '#6eb7ff solid 1px' : '' }}
      >
        <div>Node with internal state that cause node resize</div>
        <div>Fields:</div>

        {[...Array(linesNumber)].map((v, i) => (
          <span key={i}>Line {i}</span>
        ))}

        <div>
          <button
            className={disableNodeUserInteractionClassName}
            type='button'
            onClick={() => node.setExtra(linesNumber + 1)}
          >
            Add line
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
          componentType: 'output_horizontal',
        },
        {
          id: 'top_node',
          position: [300, -200],
          componentType: 'output_vertical',
        },
        {
          id: 'right_node',
          position: [800, 100],
          componentType: 'input_horizontal',
        },
        {
          id: 'bottom_node',
          position: [300, 300],
          componentType: 'input_vertical',
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
            portId: 'output',
          },
        },
        {
          source: {
            nodeId: 'internal',
            portId: 'right',
          },
          target: {
            nodeId: 'right_node',
            portId: 'input',
          },
        },
        {
          source: {
            nodeId: 'internal',
            portId: 'bottom',
          },
          target: {
            nodeId: 'bottom_node',
            portId: 'input',
          },
        },

        {
          source: {
            nodeId: 'external',
            portId: 'left',
          },
          target: {
            nodeId: 'left_node',
            portId: 'output',
          },
        },
        {
          source: {
            nodeId: 'external',
            portId: 'top',
          },
          target: {
            nodeId: 'top_node',
            portId: 'output',
          },
        },
        {
          source: {
            nodeId: 'external',
            portId: 'bottom',
          },
          target: {
            nodeId: 'bottom_node',
            portId: 'input',
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
