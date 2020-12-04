import React, { forwardRef } from 'react';
import { ILinkComponentProps } from '../states/linksSettingsState';

export interface ILinkDefaultSettings {
  color: string;
  strokeWidth: number;
}

export interface ILinkDefaultProps
  extends ILinkComponentProps<ILinkDefaultSettings> {}

export const LinkDefault = forwardRef<any, ILinkDefaultProps>((props, ref) => {
  console.log(props.settings)

  const settings = {
    color: 'LightBlue',
    strokeWidth: 3,
    ... (props.settings ? props.settings : {})
  }

  return (
    <path
      ref={ref}
      d={props.path}
      stroke={settings.color}
      strokeWidth={settings.strokeWidth}
      fill='none'
    />
  );
});

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
