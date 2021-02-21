import React from 'react';
import { PortState } from '../states';
import { usePortUserInteraction } from '../hooks/userInteractions/usePortUserInteraction';
import { observer } from 'mobx-react-lite';

export const PortWrapper: React.FC<{ port: PortState }> = observer(
  ({ port }) => {
    const { userInteractionElemRef, bind } = usePortUserInteraction(port);

    let color = '#6eb7ff';
    if (port.dragging) color = '#49f860';
    else if (port.hovered && port.validForConnection) color = '#49f860';
    else if (port.hovered && !port.validForConnection) color = '#fa4040';

    return (
      <div
        ref={{
          set current(value: HTMLDivElement) {
            userInteractionElemRef.current = value;
            port.ref.current = value;
          },
        }}
        {...bind()}
        id={port.nodeId + ':' + port.id}
        className='react_fast_diagram_PortWrapper'
      >
        <div
          style={{
            width: 10,
            height: 10,
            backgroundColor: color,
          }}
        ></div>
      </div>
    );
  }
);
