import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { PortState } from 'states/portState';
import { usePortUserInteraction } from 'hooks/userInteractions/usePortUserInteraction';
import { disableNodeUserInteractionClassName } from 'hooks/userInteractions/useNodeUserInteraction';

const className = `react_fast_diagram_PortInnerWrapper ${disableNodeUserInteractionClassName}`;

export const PortInnerWrapper: React.FC<{
  port: PortState;
  styles?: React.CSSProperties;
}> = observer(({ port, styles }) => {
  const { bind } = usePortUserInteraction(port);

  useEffect(() => {
    port.ref.recalculateSizeAndPosition();
  }, [port, port.ref, port.sizeAndPositionRecalculationWithDelay])

  return (
    <div
      style={styles}
      id={port.fullId}
      className={className}
      ref={port.ref}
      {...bind()}
    >
      <port.componentDefinition.component
        entity={port}
        settings={port.componentDefinition.settings}
      />
    </div>
  );
});
