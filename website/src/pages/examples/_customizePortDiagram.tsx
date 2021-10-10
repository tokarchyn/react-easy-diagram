import React from 'react';
import {
  createNode,
  createPortInnerDefault,
  Diagram,
  IPortVisualComponentProps,
} from 'react-easy-diagram';
import { observer } from 'mobx-react-lite';
import { css } from '@emotion/css';

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'Node 1',
          position: [100, 100],
          type: 'output_horizontal',
        },
        {
          id: 'Node 2',
          position: [300, 200],
          type: 'node_with_yellow_port',
        },
        {
          id: 'Node 3',
          position: [300, 100],
          type: 'node_with_circle_port',
        },
      ],
      links: [
        {
          source: { nodeId: 'Node 1', portId: 'output' },
          target: { nodeId: 'Node 2', portId: 'input' },
        },
        {
          source: { nodeId: 'Node 1', portId: 'output' },
          target: { nodeId: 'Node 3', portId: 'input' },
        },
      ],
    }}
    settings={{
      ports: {
        components: {
          default: createPortInnerDefault({
            style: {
              base: {
                width: 10,
                height: 10,
                backgroundColor: '#ee6eff',
              },
              invalid: {
                backgroundColor: '#cccccc',
              },
            },
          }),
          big_yellow: createPortInnerDefault({
            style: {
              base: {
                width: 10,
                height: 20,
                backgroundColor: '#fded93',
              },
              hovered: {
                backgroundColor: '#ffe657',
              },
            },
          }),
          circle: CirclePort,
        },
      },
      nodes: {
        components: {
          node_with_yellow_port: createNode({
            ports: [
              { id: 'input', type: 'big_yellow', position: 'left-center' },
            ],
          }),
          node_with_circle_port: createNode({
            ports: [{ id: 'input', type: 'circle', position: 'left-center' }],
          }),
        },
      },
    }}
  />
);

const circle_base_class = css`
  width: 5px;
  height: 5px;
  background-color: white;
  border: 1px solid #afafaf;
  border-radius: 9999px;
`;

const circle_hovered_class = css`
  background-color: #dfefff;
  border: 1px solid #a1d0ff;
`;

const CirclePort = observer<IPortVisualComponentProps>(({ entity }) => {
  let className = circle_base_class;
  if (entity.hovered || entity.dragging)
    className += ' ' + circle_hovered_class;
    
  return <div className={className}></div>;
});
