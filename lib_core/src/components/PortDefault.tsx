import { observer } from 'mobx-react-lite';
import React from 'react';
import { IComponentDefinition, IPortVisualComponentProps } from '../states';
import { Point } from '../types';

export interface IPortDefaultSettings {
  size: Point;
  color: string;
  dragColor: string;
  hoverColor: string;
  invalidColor: string;
}

export const PortDefault: React.FC<
  IPortVisualComponentProps<IPortDefaultSettings>
> = observer(({ entity: port, settings }) => {
  const finalSettings = {
    ...portDefaultSettings,
    ...settings,
  };

  let color = finalSettings.color;
  if (port.dragging) color = finalSettings.dragColor;
  else if (port.hovered && port.validForConnection)
    color = finalSettings.hoverColor;
  else if (port.hovered && !port.validForConnection)
    color = finalSettings.invalidColor;

  return (
    <div
      style={{
        width: finalSettings.size[0],
        height: finalSettings.size[1],
        backgroundColor: color,
        borderRadius: '2px',
      }}
    ></div>
  );
});

const portDefaultSettings: IPortDefaultSettings = {
  size: [10, 10],
  color: '#6eb7ff',
  dragColor: '#49f860',
  hoverColor: '#49f860',
  invalidColor: '#fa4040',
};

export function createPortDefault(
  settings?: Partial<IPortDefaultSettings>
): IComponentDefinition<IPortVisualComponentProps, IPortDefaultSettings> {
  return {
    component: PortDefault,
    settings: {
      ...portDefaultSettings,
      ...settings,
    },
  };
}
