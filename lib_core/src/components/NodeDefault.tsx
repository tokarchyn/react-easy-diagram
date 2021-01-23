import React from 'react';
import { IComponentDefinition } from '../states/visualComponents';
import { INodeVisualComponentProps } from '../states/nodesSettings';
import { useRootStore } from '../hooks/useRootStore';
import { PortsSettings } from '../states/portsSettings';
import { PortState } from '../states';
import { Dictionary, RelativePosition } from '..';

export interface INodeDefaultSettings {
  style: React.CSSProperties;
}

export const NodeDefault: React.FC<
  INodeVisualComponentProps<INodeDefaultSettings>
> = ({ entity, settings, draggableRef }) => {
  const { portsSettings } = useRootStore();

  return (
    <div
      ref={draggableRef}
      className='react_fast_diagram_Node_Default'
      style={settings?.style}
    >
      <span>{entity.id}</span>

      {generatePortsContainer(portsSettings, entity.ports, 'left', 'left')}
      {generatePortsContainer(portsSettings, entity.ports, 'top', 'top')}
      {generatePortsContainer(portsSettings, entity.ports, 'right', 'right')}
      {generatePortsContainer(portsSettings, entity.ports, 'bottom', 'bottom')}
    </div>
  );
};

export function generatePortsContainer(
  portsSettings: PortsSettings,
  ports: Dictionary<PortState>,
  portsType: string,
  position: RelativePosition
) {
  const portsToShow = Object.values(ports).filter(
    (port) => port.type === portsType
  );
  const portsContainer = portsSettings.portsContainerVisualComponents.getComponent(
    position === 'left' || position === 'right' ? 'vertical' : 'horizontal'
  );

  return (
    portsToShow && (
      <div
        style={{
          position: 'absolute',
          left: position === 'left' ? 0 : undefined,
          top:
            position === 'left' || position === 'right' || position === 'top'
              ? 0
              : undefined,
          right: position === 'right' ? 0 : undefined,
          bottom: position === 'bottom' ? 0 : undefined,
          height:
            position === 'left' || position === 'right' ? '100%' : undefined,
          width:
            position === 'top' || position === 'bottom' ? '100%' : undefined,
        }}
      >
        <portsContainer.component
          entity={portsToShow}
          settings={portsContainer.settings}
        />
      </div>
    )
  );
}

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
