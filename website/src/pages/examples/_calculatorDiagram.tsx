import React, { useEffect } from 'react';
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
    const numPort1 = entity.ports['number_1'];
    const numPort2 = entity.ports['number_2'];
    const outputPort = entity.ports['output'];

    let num1 = 0;
    if (numPort1 && numPort1.connectedPorts.length > 0) {
      num1 = numPort1.connectedPorts[0].extra;
    }
    
    let num2 = 0;
    if (numPort2 && numPort2.connectedPorts.length > 0) {
      num2 = numPort2.connectedPorts[0].extra;
    }

    useEffect(() => {
      if (outputPort) {
        outputPort.setExtra(num1 + num2);
      }
    }, [num1, num2, outputPort]);

    return (
      <div className='react_fast_diagram_Node_Default' ref={draggableRef}>
        <div>Add numbers</div>
        <span>Result: {outputPort ? outputPort.extra : ''}</span>
        <Port
          id='number_1'
          position='left-center'
          offsetFromOrigin={[0, -15]}
        />
        <Port id='number_2' position='left-center' offsetFromOrigin={[0, 15]} />
        <Port id='output' position='right-center' />
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
    }}
  />
);
