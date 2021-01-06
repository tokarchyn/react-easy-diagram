import React, { useEffect } from 'react';
import { IComponentDefinition } from '../states/visualComponents';
import { INodeVisualComponentProps } from '../states/nodesSettingsState';
import { PortWrapper } from './PortWrapper';

export interface INodeDefaultSettings {
  style: React.CSSProperties;
}

export const NodeDefault: React.FC<
  INodeVisualComponentProps<INodeDefaultSettings>
> = ({ entity, settings, draggableRef }) => {
  return (
    <div
      ref={draggableRef}
      className='react_fast_diagram_Node_Default'
      style={settings?.style}
    >
      <span>{entity.id}</span>
      <div className='react_fast_diagram_PortContainer_Default react_fast_diagram_PortContainer_Default_Horizontal' style={{
        position: 'absolute',
        bottom: -8
      }}>
        {Object.values(entity.ports).map(port => (
          <PortWrapper key={port.id} port={port}/>
        ))}
      </div>
    </div>
  );
};

export function createNodeDefault(
  settings?: INodeDefaultSettings
): IComponentDefinition<
  INodeVisualComponentProps<INodeDefaultSettings>,
  INodeDefaultSettings
> {
  return {
    component: NodeDefault,
    settings,
  };
}

// export const NodeDefault = forwardRef<
//   HTMLDivElement,
//   IComponentProps<NodeState, INodeDefaultSettings>
// >(observable(() => {
