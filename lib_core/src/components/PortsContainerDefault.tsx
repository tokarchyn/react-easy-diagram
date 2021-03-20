import React from 'react';
import { PortWrapper } from './PortWrapper';
import { VisualComponent } from '../states/visualComponentState';
import { RelativePosition } from '../types/common';
import { PortState } from '../states/portState';

export interface IPortsContainerDefaultSettings {
  style?: React.CSSProperties;
  gapBetweenPorts: string;
  offsetFromOriginPosition?: number;
}

export interface IPortsContainerDefaultProps {
  position: RelativePosition;
  ports: PortState[];
}

const PortsContainerDefault: React.FC<
  IPortsContainerDefaultProps & IPortsContainerDefaultSettings
> = ({ position, ports, style, gapBetweenPorts, offsetFromOriginPosition }) => {
  let className = 'react_fast_diagram_flex_gap ';
  if (position === 'top' || position === 'bottom') {
    className += 'react_fast_diagram_flex_gap_x';
  } else {
    className += 'react_fast_diagram_flex_gap_y';
  }

  const positionStyle = {
    position: 'absolute',
    left: position === 'left' ? 0 : undefined,
    top:
      position === 'left' || position === 'right' || position === 'top'
        ? 0
        : undefined,
    right: position === 'right' ? 0 : undefined,
    bottom: position === 'bottom' ? 0 : undefined,
    height: position === 'left' || position === 'right' ? '100%' : undefined,
    width: position === 'top' || position === 'bottom' ? '100%' : undefined,
  };

  const offsetFromOriginPositionStyle = {};
  if (
    offsetFromOriginPosition &&
    (position === 'left' ||
      position === 'right' ||
      position === 'top' ||
      position === 'bottom')
  ) {
    offsetFromOriginPositionStyle[position] = -offsetFromOriginPosition;
  }

  return (
    <div
      className={className}
      style={{
        // @ts-ignore
        '--gap': gapBetweenPorts,
        ...style,
        ...positionStyle,
        ...offsetFromOriginPositionStyle,
      }}
    >
      {ports && ports.map((port) => <PortWrapper key={port.id} port={port} />)}
    </div>
  );
};

export function createPortsContainerDefault(
  settings?: Partial<IPortsContainerDefaultSettings>
): VisualComponent<IPortsContainerDefaultProps> {
  return (props: IPortsContainerDefaultProps) => (
    <PortsContainerDefault
      {...{ ...portsContainerDefaultSettings, ...settings }}
      {...props}
    />
  );
}

const portsContainerDefaultSettings: IPortsContainerDefaultSettings = {
  gapBetweenPorts: '8px',
};
