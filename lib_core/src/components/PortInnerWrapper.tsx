import React from 'react';
import { PortState } from '../states';
import { usePortUserInteraction } from '../hooks/userInteractions/usePortUserInteraction';
import { observer } from 'mobx-react-lite';

export const PortInnerWrapper: React.FC<{ port: PortState, styles?: React.CSSProperties }> = observer(
  ({ port, styles }) => {
    const { bind } = usePortUserInteraction(port);

    return (
      <div
      style={styles}
      id={port.fullId}
      className='react_easy_diagram_port'
      ref={port.ref}
      {...bind()}
    >
      <port.componentDefinition.component
        entity={port}
        settings={port.componentDefinition.settings}
      />
    </div>
    );
  }
);
