import { IUseStylingOptions, useStyling } from 'hooks/useStyling';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import type { IPortVisualComponentProps } from 'states/portsSettings';
import type { IComponentDefinition } from 'states/visualComponentState';

const PortInnerDefault: React.FC<
  IPortVisualComponentProps<IPortInnerDefaultSettings>
> = observer(({ entity, settings }) => {
  const stylingOptions = useMemo<IUseStylingOptions>(
    () => ({
      removeDefaultClasses: settings?.removeDefaultClasses,
      baseState: 'base',
      classes: settings?.classes,
      defaultClasses: defaultPortInnerClasses,
      style: settings?.style,
    }),
    [settings]
  );

  let state = 'base';
  if (entity.dragging) state = 'dragging';
  else if (entity.hovered && entity.validForConnection) state = 'hovered';
  else if (entity.hovered && !entity.validForConnection) state = 'invalid';

  const styling = useStyling(stylingOptions, state);

  return <div className={styling.className} style={styling.style}></div>;
});

export type PortInnerDefaultState = 'base' | 'hovered' | 'dragging' | 'invalid';
export type PortInnerDefaultSettingsByStates<TValue> = {
  [key in PortInnerDefaultState]?: TValue;
};

export interface IPortInnerDefaultSettings {
  removeDefaultClasses?: true;
  classes?: PortInnerDefaultSettingsByStates<string[]>;
  style?: PortInnerDefaultSettingsByStates<React.CSSProperties>;
}

export const defaultPortInnerClasses: PortInnerDefaultSettingsByStates<
  string[]
> = {
  base: ['react_fast_diagram_PortInnerDefault'],
  hovered: ['react_fast_diagram_PortInnerDefault_Hovered'],
  dragging: ['react_fast_diagram_PortInnerDefault_Dragging'],
  invalid: ['react_fast_diagram_PortInnerDefault_Invalid'],
};

export function createPortInnerDefault(
  settings?: IPortInnerDefaultSettings
): IComponentDefinition<IPortVisualComponentProps, IPortInnerDefaultSettings> {
  return {
    component: PortInnerDefault,
    settings: settings,
  };
}
