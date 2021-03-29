import React from 'react';
import { PortWrapper } from './PortWrapper';
import { VisualComponent } from '../states/visualComponentState';
import { Point, RelativePosition } from '../types/common';
import { PortState } from '../states/portState';
import { useRelativePositionStyles } from '../hooks/useRelativePositionStyles';
import { observer } from 'mobx-react-lite';

export interface IPortsContainerDefaultSettings {
  style?: React.CSSProperties;
  gapBetweenPorts: string;
  /**
   * If number - offset from origin position in direction from the center of parent element.
   * If Point - horizontal offset and vertical offset.
   */
  offsetFromOriginPosition?: number | Point;
}

export interface IPortsContainerDefaultProps {
  position: RelativePosition;
  ports: PortState[];
}

const PortsContainerDefault: React.FC<
  IPortsContainerDefaultProps & IPortsContainerDefaultSettings
> = observer(
  ({ position, ports, style, gapBetweenPorts, offsetFromOriginPosition }) => {
    let className = 'react_fast_diagram_flex_gap ';
    if (position === 'top' || position === 'bottom') {
      className += 'react_fast_diagram_flex_gap_x';
    } else {
      className += 'react_fast_diagram_flex_gap_y';
    }

    const positionStyles = useRelativePositionStyles(
      position,
      offsetFromOriginPosition,
      true
    );

    return (
      <div
        className={className}
        style={{
          // @ts-ignore
          '--gap': gapBetweenPorts,
          ...style,
          ...positionStyles,
        }}
      >
        {ports &&
          ports.map((port) => <PortWrapper key={port.id} port={port} />)}
      </div>
    );
  }
);

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
