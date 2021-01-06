import React, { useEffect } from 'react';
import { IComponentDefinition } from '../states/visualComponents';
import { INodeVisualComponentProps } from '../states/nodesSettingsState';
import { PortState } from '../states';
import { usePortUserInteraction } from '../hooks/userInteractions/usePortUserInteraction';

export const PortWrapper: React.FC<
  {port: PortState}
> = ({ port }) => {
  const {userInteractionElemRef} = usePortUserInteraction(port);

  return (
    <div
      ref={{set current(value : HTMLDivElement){userInteractionElemRef.current = value; port.ref.current = value}}}
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
