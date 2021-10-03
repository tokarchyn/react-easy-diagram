import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react';
import type { IPortVisualComponentProps } from 'states/portsSettings';
import { StatefullStyling } from 'states/statefullStyling';
import type { IComponentDefinition } from 'states/visualComponentState';

const PortInnerDefault: React.FC<
  IPortVisualComponentProps<IPortInnerDefaultSettings>
> = observer(({ entity, settings }) => {
  const styling = useMemo(
    () =>
      new StatefullStyling(
        settings?.removeDefaultClasses,
        'default',
        settings?.classes,
        defaultPortInnerClasses,
        settings?.style
      ),
    [settings]
  );

  useEffect(() => {
    let state = 'default';
    if (entity.dragging) state = 'dragging';
    else if (entity.hovered && entity.validForConnection) state = 'hovered';
    else if (entity.hovered && !entity.validForConnection) state = 'invalid';

    styling.setState(state);
  }, [
    entity,
    entity.hovered,
    entity.dragging,
    entity.validForConnection,
    styling,
  ]);

  return <div className={styling.className} style={styling.style}></div>;
});

export type PortInnerDefaultState =
  | 'default'
  | 'hovered'
  | 'dragging'
  | 'invalid';
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
  default: ['react_fast_diagram_PortInnerDefault'],
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
