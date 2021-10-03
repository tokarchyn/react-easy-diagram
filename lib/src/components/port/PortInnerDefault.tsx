import { observer } from 'mobx-react-lite';
import React from 'react';
import type { IPortVisualComponentProps } from 'states/portsSettings';
import type { IComponentDefinition } from 'states/visualComponentState';
import { Point } from 'utils/point';

export interface IPortInnerDefaultSettings {
  size: Point;
  borderRadius: React.CSSProperties['borderRadius'];
  opacity?: number;
  color: string;
  dragColor: string;
  hoverColor: string;
  invalidColor: string;
}

const PortInnerDefault: React.FC<
  IPortVisualComponentProps<IPortInnerDefaultSettings>
> = observer(({ entity: port, settings }) => {
  settings = settings ?? portDefaultSettings;

  let color = settings.color;
  if (port.dragging) color = settings.dragColor;
  else if (port.hovered && port.validForConnection)
    color = settings.hoverColor;
  else if (port.hovered && !port.validForConnection)
    color = settings.invalidColor;

  return (
    <div
      className={'react_fast_diagram_PortInnerDefault'}
      style={{
        width: settings.size[0],
        height: settings.size[1],
        opacity: settings.opacity,
        backgroundColor: color,
        borderRadius: settings.borderRadius,
      }}
    ></div>
  );
});

const portDefaultSettings: IPortInnerDefaultSettings = {
  size: [10, 10],
  borderRadius: '2px',
  color: '#6eb7ff',
  dragColor: '#49f860',
  hoverColor: '#49f860',
  invalidColor: '#fa4040',
};

export function createPortInnerDefault(
  settings?: Partial<IPortInnerDefaultSettings>
): IComponentDefinition<IPortVisualComponentProps, IPortInnerDefaultSettings> {
  return {
    component: PortInnerDefault,
    settings: {
      ...portDefaultSettings,
      ...settings,
    },
  };
}
