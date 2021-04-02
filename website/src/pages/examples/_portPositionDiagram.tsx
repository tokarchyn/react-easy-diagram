

import React, { useEffect, useState } from 'react';
import {
  Diagram,
  INodeVisualComponentProps,
  Port,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';

const SomeNode = observer<INodeVisualComponentProps>(({ draggableRef }) => {
  const [portOffset, setPortOffset] = useState<number>(); 

  return (
    <div className="react_fast_diagram_Node_Default" ref={draggableRef}>
      <div>Offset from center of node:</div>
      <span>
        <input
          type='number'
          onChange={(event) =>
            setPortOffset(parseInt(event.target.value))
          }
          defaultValue={0}
        />
      </span>
      <Port id='port_1' position='left-top' offsetFromNodeCenter={portOffset}/>
      <Port id='port_5' position='left-top' offsetFromNodeCenter={portOffset} offsetFromOrigin={[0,15]}/>
      <Port id='port_2' position='left-center' offsetFromNodeCenter={portOffset}/>
      <Port id='port_3' position='left-bottom' offsetFromNodeCenter={portOffset}/>
      <Port id='port_4' position='center-top' offsetFromNodeCenter={portOffset}/>
      <Port id='port_6' position='center-bottom' offsetFromNodeCenter={portOffset}/>
      <Port id='port_7' position='right-top' offsetFromNodeCenter={portOffset}/>
      <Port id='port_8' position='right-center' offsetFromNodeCenter={portOffset}/>
      <Port id='port_9' position='right-bottom' offsetFromNodeCenter={portOffset}/>
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
    }}
  />
);
