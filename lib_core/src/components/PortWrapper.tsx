import React from 'react';
import { PortState } from '../states';
import { usePortUserInteraction } from '../hooks/userInteractions/usePortUserInteraction';
import { observer } from 'mobx-react-lite';

export const PortWrapper: React.FC<{ port: PortState }> = observer(
  ({ port, children }) => {
    const { bind } = usePortUserInteraction(port);

    children = children ?? (
      <port.componentDefinition.component
        entity={port}
        settings={port.componentDefinition.settings}
      />
    );

    return (
      <div
        ref={port.ref}
        {...bind()}
        id={port.fullId}
        className='react_fast_diagram_port'
      >
        {children}
      </div>
    );
  }
);
