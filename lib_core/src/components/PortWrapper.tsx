import React from 'react';
import { PortState } from '../states';
import { usePortUserInteraction } from '../hooks/userInteractions/usePortUserInteraction';
import { observer } from 'mobx-react-lite';

export const PortWrapper: React.FC<{ port: PortState }> = observer(({ port }) => {
  const { userInteractionElemRef } = usePortUserInteraction(port);

  return (
    <div
      ref={{
        set current(value: HTMLDivElement) {
          userInteractionElemRef.current = value;
          port.ref.current = value;
        },
      }}
      id={port.nodeId + ':' + port.id}
      className='react_fast_diagram_PortWrapper'
    >
      <div
        style={{
          width: 10,
          height: 10,
          backgroundColor: 'green',
        }}
      ></div>
    </div>
  );
});
