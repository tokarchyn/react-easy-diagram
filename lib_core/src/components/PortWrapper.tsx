import React, { useEffect } from 'react';
import { IComponentDefinition } from '../states/visualComponents';
import { INodeVisualComponentProps } from '../states/nodesSettingsState';
import { PortState } from '../states';
import { usePortUserInteraction } from '../hooks/userInteractions/usePortUserInteraction';

export const PortWrapper: React.FC<
  {port: PortState}
> = ({ port }) => {
  const {userInteractionElemRef} = usePortUserInteraction(port);
  if (port.ref.current !== userInteractionElemRef.current) {
    port.ref.current = userInteractionElemRef.current;
  }

  return (
    <div
      ref={userInteractionElemRef}
      className='react_fast_diagram_PortWrapper'
    >
      <div style={{
        width: 8,
        height: 8,
        backgroundColor: 'green'
      }}>

      </div>
    </div>
  );
};
