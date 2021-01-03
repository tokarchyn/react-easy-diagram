import React, { forwardRef } from 'react';
import { ILinkVisualComponentProps } from '../states/linksSettingsState';
import { IComponentDefinition } from '../states/visualComponents';

export const LinkDefault: React.FC<
  ILinkVisualComponentProps<ILinkDefaultSettings>
> = (props) => {
  const settings = props.settings ?? linkDefaultSettings;

  return (
    <path
      ref={props.draggableRef}
      d={props.path}
      stroke={settings.color}
      strokeWidth={settings.strokeWidth}
      fill='none'
    />
  );
};

export interface ILinkDefaultSettings {
  color: string;
  strokeWidth: number;
}

const linkDefaultSettings: ILinkDefaultSettings = {
  color: 'LightBlue',
  strokeWidth: 3,
};

export function createLinkDefault(
  settings?: Partial<ILinkDefaultSettings>
): IComponentDefinition<
  ILinkVisualComponentProps,
  ILinkDefaultSettings
> {
  const finaleSettings = {
    ...linkDefaultSettings,
    ...(settings ? settings : {}),
  };

  return {
    component: LinkDefault,
    settings: finaleSettings,
  };
}

// <g>
//       {/* Main line */}
//       <path d={points} stroke={linkColor} strokeWidth="3" fill="none" />
//       {/* Thick line to make selection easier */}
//       <path
//         d={points}
//         stroke={linkColor}
//         strokeWidth="20"
//         fill="none"
//         strokeLinecap="round"
//         strokeOpacity={isHovered || isSelected ? 0.1 : 0}
//         onMouseEnter={() => onLinkMouseEnter({ config, linkId: link.id })}
//         onMouseLeave={() => onLinkMouseLeave({ config, linkId: link.id })}
//         onClick={(e) => {
//           onLinkClick({ config, linkId: link.id })
//           e.stopPropagation()
//         }}
//       />
//     </g>
