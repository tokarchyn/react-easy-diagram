import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react';
import type { ILinkVisualComponentProps } from 'states/linksSettings';
import { StatefullStyling } from 'states/statefullStyling';
import type { IComponentDefinition } from 'states/visualComponentState';

export const LinkDefault: React.FC<
  ILinkVisualComponentProps<ILinkDefaultSettings>
> = observer(({ entity, settings, bind }) => {
  const mainStyling = useMemo(
    () =>
      new StatefullStyling(
        settings?.removeDefaultClasses,
        'default',
        settings?.mainLine?.classes,
        defaultMainLineClasses,
        settings?.mainLine?.styles
      ),
    [settings]
  );

  const secondaryStyling = useMemo(
    () =>
      new StatefullStyling(
        settings?.removeDefaultClasses,
        'default',
        settings?.secondaryLine?.classes,
        defaultSecondaryLineClasses,
        settings?.secondaryLine?.styles
      ),
    [settings]
  );

  useEffect(() => {
    let state = 'default';
    if (entity.selected) state = 'selected';
    else if (entity.hovered) state = 'hovered';

    mainStyling.setState(state);
    secondaryStyling.setState(state);
  }, [entity, entity.hovered, entity.selected, mainStyling, secondaryStyling]);

  if (!entity.path) return null;

  return (
    <g>
      <path
        d={entity.path.svgPath}
        className={mainStyling.className}
        style={mainStyling.style}
      />
      <path
        d={entity.path.svgPath}
        className={secondaryStyling.className}
        style={secondaryStyling.style}
        {...bind()}
      />
    </g>
  );
});

export interface ILineStyling {
  classes?: ILinkDefaultSettingsByStates<string[]>;
  styles?: ILinkDefaultSettingsByStates<React.CSSProperties>;
}
export interface ILinkDefaultSettings {
  removeDefaultClasses?: true;
  mainLine?: ILineStyling;
  secondaryLine?: ILineStyling;
}

export type LinkDefaultState = 'default' | 'hovered' | 'selected';
export type ILinkDefaultSettingsByStates<TValue> = {
  [key in LinkDefaultState]?: TValue;
};

export const defaultMainLineClasses: ILinkDefaultSettingsByStates<string[]> = {
  default: ['react_fast_diagram_LinkDefault_Line'],
  hovered: ['react_fast_diagram_LinkDefault_Line_Hovered'],
  selected: ['react_fast_diagram_LinkDefault_Line_Selected'],
};

export const defaultSecondaryLineClasses: ILinkDefaultSettingsByStates<string[]> = {
  default: [
    'react_fast_diagram_LinkDefault_Line',
    'react_fast_diagram_LinkDefault_SecondaryLine',
  ],
  hovered: [
    'react_fast_diagram_LinkDefault_Line_Hovered',
    'react_fast_diagram_LinkDefault_SecondaryLine_Hovered',
  ],
  selected: [
    'react_fast_diagram_LinkDefault_Line_Selected',
    'react_fast_diagram_LinkDefault_SecondaryLine_Selected',
  ],
};

export function createLinkDefault(
  settings?: ILinkDefaultSettings
): IComponentDefinition<
  ILinkVisualComponentProps,
  Partial<ILinkDefaultSettings>
> {
  return {
    component: LinkDefault,
    settings: settings,
  };
}
