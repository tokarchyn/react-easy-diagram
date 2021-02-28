import React from 'react';
import { LinkCreationState } from '../states';
import { ILinkVisualComponentProps } from '../states/linksSettings';
import { IComponentDefinition } from '../states/visualComponentState';

export const LinkDefault: React.FC<
  ILinkVisualComponentProps<ILinkDefaultSettings>
> = (props) => {
  const settings = {
    ...linkDefaultSettings,
    ...(props.settings ? props.settings : {}),
  };
  const path = props.entity.path;
  if (!path) return null;

  return (
    <g>
      <path
        ref={props.draggableRef}
        d={path.svgPath}
        stroke={settings.color}
        strokeWidth={settings.strokeWidth}
        fill='none'
      />
      {props.entity instanceof LinkCreationState && (
        <circle
          cx={path.target[0]}
          cy={path.target[1]}
          r={settings.cirleRadius}
          fill='orange'
        />
      )}
    </g>
  );
};

export interface ILinkDefaultSettings {
  color?: string;
  strokeWidth?: number;
  cirleRadius?: number;
}

const linkDefaultSettings: ILinkDefaultSettings = {
  color: 'LightBlue',
  strokeWidth: 3,
  cirleRadius: 3,
};

export function createLinkDefault(
  settings?: ILinkDefaultSettings
): IComponentDefinition<ILinkVisualComponentProps, ILinkDefaultSettings> {
  return {
    component: LinkDefault,
    settings: settings,
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
