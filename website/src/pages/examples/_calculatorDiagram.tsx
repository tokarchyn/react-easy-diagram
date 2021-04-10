import React from 'react';
import {
  Diagram,
  INodeVisualComponentProps,
  Port,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';

const NumberProvider = observer<INodeVisualComponentProps>(
  ({ entity, draggableRef }) => {
    const port = entity.ports['number'];
    return (
      <div className='react_fast_diagram_Node_Default' ref={draggableRef}>
        <div>Number input</div>
        <span>
          <input
            type='number'
            // You can set extra using api, like this. Or pass extra right in props to Port component like it is done in AddNumbers
            onChange={(event) => port?.setExtra(parseInt(event.target.value))}
            defaultValue={port && port.extra}
          />
        </span>
        <Port id='number' position='right-center' />
      </div>
    );
  }
);

const AddNumbers = observer<INodeVisualComponentProps>(
  ({ entity, draggableRef }) => {
    const outputPort = entity.ports['output'];

    const getInputNumber = (portName: string): number => {
      const port = entity.ports[portName];
      if (port && port.connectedPorts.length > 0) {
        return port.connectedPorts[0].extra;
      } else return 0;
    };
    const num1 = getInputNumber('number_1');
    const num2 = getInputNumber('number_2');

    return (
      <div className='react_fast_diagram_Node_Default' ref={draggableRef}>
        <div>Add numbers</div>
        <span>Result: {outputPort ? outputPort.extra : ''}</span>
        <Port
          id='number_1'
          position='left-center'
          offsetFromOrigin={[0, -15]}
          type='single_connection'
        />
        <Port
          id='number_2'
          position='left-center'
          offsetFromOrigin={[0, 15]}
          type='single_connection'
        />
        <Port id='output' position='right-center' extra={num1 + num2} />
      </div>
    );
  }
);

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'Num1',
          position: [100, 100],
          componentType: 'number',
        },
        {
          id: 'Num2',
          position: [100, 300],
          componentType: 'number',
        },
        {
          id: 'Num3',
          position: [420, 250],
          componentType: 'number',
        },
        {
          id: 'add1',
          position: [420, 150],
          componentType: 'addnumbers',
        },
        {
          id: 'add2',
          position: [700, 200],
          componentType: 'addnumbers',
        },
      ],
      links: [],
    }}
    settings={{
      nodes: {
        components: {
          number: NumberProvider,
          addnumbers: AddNumbers,
        },
      },
      callbacks: {
        validateLinkEndpoints: (source, target, rootStore) => {
          if (target.type === 'single_connection') {
            // allow connection only if target port is still unconnected
            return target.connectedLinks.length === 0;
          }
          return true;
        },
      },
    }}
  />
);
