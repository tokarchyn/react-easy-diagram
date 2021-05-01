import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Diagram,
  disableNodeUserInteractionClassName,
  INodeVisualComponentProps,
  Port,
  usePorts,
  usePortUserInteraction,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';

const PortWithLabel: React.FC<{
  id: string;
  remove?: (id: string) => any;
}> = (props) => {
  return (
    <div>
      {props.remove && (<button onClick={() => props.remove && props.remove(props.id)}>X</button>)}
      <span>Port id: {props.id}</span>
      <Port id={props.id} />
    </div>
  );
};

const NodeComponent = observer<INodeVisualComponentProps>(
  ({ entity, draggableRef }) => {
    const [ports, setPorts] = useState<string[]>([]);
    const remove = useCallback(
      (idToRemove: string) =>
        setPorts((ids) => ids.filter((id) => id !== idToRemove)),
      [setPorts]
    );
    const [portToAdd, setPortToAdd] = useState<string>('');

    return (
      <div className='react_fast_diagram_Node_Default' ref={draggableRef}>
        <span>
          <input
            type='number'
            onChange={(event) => setPortToAdd(event.target.value)}
            className={disableNodeUserInteractionClassName}
          />
          <button
            onClick={() =>
              setPorts((ports) =>
                ports.includes(portToAdd) ? ports : [...ports, portToAdd]
              )
            }
          >
            add new
          </button>
          <button
            onClick={() =>
              setPorts([])
            }
          >remove all</button>
        </span>
        <PortWithLabel id={"test"} key={"test"}/>
        {ports.map((id) => (
          <PortWithLabel id={id} remove={remove} key={id}/>
        ))}
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
          componentType: 'dynamic',
        },
      ],
    }}
    settings={{
      nodes: {
        components: {
          dynamic: NodeComponent,
        },
      },
    }}
  />
);
