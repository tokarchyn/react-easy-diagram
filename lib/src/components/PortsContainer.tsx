import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { VisualComponent } from 'states/visualComponentState';
import { positionValues, Position } from 'utils/position';
import { IPortState } from 'states/portState';
import { Port } from './Port';

export interface IPortsContainerSettings {
  style?: React.CSSProperties;
  gapBetweenPorts: string;
  /**
   * If number - offset from origin position in direction from the center of parent element.
   * If Point - horizontal offset and vertical offset.
   */
  offsetFromOriginPosition?: number;
}

export interface IPortsContainerProps {
  position: Position;
  ports?: IPortState[];
}

const PortsContainer: React.FC<
  IPortsContainerProps & IPortsContainerSettings
> = observer(
  ({ position, ports, style, gapBetweenPorts, offsetFromOriginPosition }) => {
    const portsModified = useMemo(
      () =>
        ports &&
        ports.map(
          (p) =>
            ({
              linkDirection: positionToDirection[position],
              ...p,
            } as IPortState)
        ),
      [position, ports]
    );

    if (!portsModified || portsModified.length === 0) return null;

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
    if (offsetFromOriginPosition && positionValues.includes(position)) {
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
        {portsModified &&
          portsModified.map((port) => <Port {...port} key={port.id} />)}
      </div>
    );
  }
);

const positionToDirection = {
  left: 'left',
  top: 'up',
  right: 'right',
  bottom: 'down',
};

export function createPortsContainer(
  settings?: Partial<IPortsContainerSettings>
): VisualComponent<IPortsContainerProps> {
  return (props: IPortsContainerProps) => (
    <PortsContainer
      {...{ ...defaultPortsContainerSettings, ...settings }}
      {...props}
    />
  );
}

const defaultPortsContainerSettings: IPortsContainerSettings = {
  gapBetweenPorts: '8px',
};
