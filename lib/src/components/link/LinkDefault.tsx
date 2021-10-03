import { observer } from 'mobx-react-lite';
import React from 'react';
import type { ILinkVisualComponentProps } from 'states/linksSettings';
import type { IComponentDefinition } from 'states/visualComponentState';

export const LinkDefault: React.FC<
  ILinkVisualComponentProps<Partial<ILinkDefaultSettings>>
> = observer(({ entity, settings, bind }) => {
  const finalSettings = {
    ...linkDefaultSettings,
    ...settings,
  };
  const path = entity.path;
  if (!path) return null;

  let color = finalSettings.color;
  if (entity.selected && finalSettings.selectedColor)
    color = finalSettings.selectedColor;
  else if (entity.hovered && finalSettings.hoveredColor)
    color = finalSettings.hoveredColor;

  return (
    <g>
      <path
        d={path.svgPath}
        stroke={color}
        strokeWidth={finalSettings.strokeWidth}
        fill='none'
        strokeLinecap='round'
        markerStart={getMarkerBasedOnState(
          finalSettings.markerStart,
          entity.selected,
          entity.hovered
        )}
        markerEnd={getMarkerBasedOnState(
          finalSettings.markerEnd,
          entity.selected,
          entity.hovered
        )}
      />
      <path
        d={path.svgPath}
        stroke={color}
        strokeWidth='5'
        {...bind()}
        pointerEvents='auto'
        fill='none'
        strokeOpacity={
          entity.hovered && finalSettings.enableHoverEffect ? 0.22 : 0
        }
      />
    </g>
  );
});

export function getMarkerBasedOnState(
  marker: ILinkSvgMarker | undefined,
  selected: boolean,
  hovered: boolean
): string | undefined {
  if (!marker) return undefined;

  let id = undefined;
  if (typeof marker === 'string') {
    id = marker;
  } else {
    id = marker.default;
    if (selected && marker.selected) id = marker.selected;
    else if (hovered && marker.hovered) id = marker.hovered;
  }
  return `url(#${id})`;
}

export interface ILinkDefaultSettings {
  color: string;
  selectedColor?: string;
  hoveredColor?: string;
  enableHoverEffect: boolean;
  strokeWidth: number;
  markerStart?: ILinkSvgMarker;
  markerEnd?: ILinkSvgMarker;
}

type ILinkSvgMarker =
  | {
      default: string;
      hovered?: string;
      selected?: string;
    }
  | string;

const linkDefaultSettings: ILinkDefaultSettings = {
  color: '#c2c2c2',
  selectedColor: '#6eb7ff',
  hoveredColor: '#a1d0ff',
  strokeWidth: 1,
  enableHoverEffect: true,
};

export function createLinkDefault(
  settings?: Partial<ILinkDefaultSettings>
): IComponentDefinition<
  ILinkVisualComponentProps,
  Partial<ILinkDefaultSettings>
> {
  return {
    component: LinkDefault,
    settings: settings,
  };
}
