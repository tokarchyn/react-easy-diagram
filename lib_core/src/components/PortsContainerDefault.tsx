import React from 'react';
import { IComponentDefinition } from '../states/visualComponents';
import { PortWrapper } from './PortWrapper';
import { IPortsContainerVisualComponentProps } from '../states/portsSettingsState';

export interface IPortsContainerDefaultSettings {
  style?: React.CSSProperties;
  direction: 'horizontal' | 'vertical';
  gapBetweenPorts: number | string;
}

export const PortsContainerDefault: React.FC<
  IPortsContainerVisualComponentProps<IPortsContainerDefaultSettings>
> = ({ entity, settings }) => {
  const finalSettings = {
    ...portsContainerDefaultSettings,
    ...settings,
  };

  let className = 'react_fast_diagram_PortContainer_Default ';
  if (finalSettings.direction === 'horizontal') {
    className += 'react_fast_diagram_PortContainer_Default_Horizontal'
  }
  else {
    className += 'react_fast_diagram_PortContainer_Default_Vertical';
  }

  return (
    <div className={className} style={{
      //@ts-ignore
      '--flex-gap': finalSettings.gapBetweenPorts
    }}>
      {Object.values(entity).map((port) => (
        <PortWrapper key={port.id} port={port} />
      ))}
    </div>
  );
};

export function createPortsContainerDefault(
  settings?: Partial<IPortsContainerDefaultSettings>
): IComponentDefinition<
  IPortsContainerVisualComponentProps<IPortsContainerDefaultSettings>,
  IPortsContainerDefaultSettings
> {
  return {
    component: PortsContainerDefault,
    settings: {
      ...portsContainerDefaultSettings,
      ...settings
    }
  };
}

const portsContainerDefaultSettings: IPortsContainerDefaultSettings = {
  direction: 'horizontal',
  gapBetweenPorts: 8,
};
