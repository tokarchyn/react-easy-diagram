import React from 'react';
import { ILinkVisualComponentProps } from '../states/linksSettings';
import { IComponentDefinition } from '../states/visualComponentState';

export const LinkDefault: React.FC<
  ILinkVisualComponentProps<ILinkDefaultSettings>
> = (props) => {
  const settings = props.settings ?? linkDefaultSettings;
  const { svgPath: pathStr, target } = props.path;

  return (
    <g>
      <path
        ref={props.draggableRef}
        d={pathStr}
        stroke={settings.color}
        strokeWidth={settings.strokeWidth}
        fill='none'
      />
      {props.entity.target.hasOnlyPosition && (
        <circle
          cx={target[0]}
          cy={target[1]}
          r={settings.cirleRadius}
          fill='orange'
        />
      )}
    </g>
  );
};

export interface ILinkDefaultSettings {
  color: string;
  strokeWidth: number;
  cirleRadius: number;
}

const linkDefaultSettings: ILinkDefaultSettings = {
  color: 'LightBlue',
  strokeWidth: 3,
  cirleRadius: 3,
};

export function createLinkDefault(
  settings?: Partial<ILinkDefaultSettings>
): IComponentDefinition<ILinkVisualComponentProps, ILinkDefaultSettings> {
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
