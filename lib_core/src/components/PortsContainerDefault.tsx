import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { VisualComponent } from 'states/visualComponentState';
import { positionValues, Position } from 'utils/position';
import { IPortState } from 'states/portState';
import { Port } from './Port';

export interface IPortsContainerDefaultSettings {
  style?: React.CSSProperties;
  gapBetweenPorts: string;
  /**
   * If number - offset from origin position in direction from the center of parent element.
   * If Point - horizontal offset and vertical offset.
   */
  offsetFromOriginPosition?: number;
}

export interface IPortsContainerDefaultProps {
  position: Position;
  ports?: IPortState[];
}

const PortsContainerDefault: React.FC<
  IPortsContainerDefaultProps & IPortsContainerDefaultSettings
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
