import React from 'react';
import { PortState } from '../states';
import { usePortUserInteraction } from '../hooks/userInteractions/usePortUserInteraction';
import { observer } from 'mobx-react-lite';

export const PortWrapper: React.FC<{ port: PortState }> = observer(
  ({ port }) => {
    const { userInteractionElemRef, bind } = usePortUserInteraction(port);

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
        <port.componentDefinition.component
          entity={port}
          settings={port.componentDefinition.settings}
        />
      </div>
    );
  }
);
