import React, { CSSProperties } from 'react';

export interface ISvgMarkerSettings {
  id: string;
  style?: CSSProperties;
}

export interface ISvgCircleMarkerSettings extends ISvgMarkerSettings {
  radius?: number;
}

const CircleMarker = React.memo((props: ISvgCircleMarkerSettings) => {
  const finalSettings: ISvgCircleMarkerSettings = {
    id: props.id,
    radius: props.radius ?? 2,
    style: {
      stroke: 'none',
      fill: 'rgb(194, 194, 194)',
      ...props.style,
    },
  };
  return (
    <marker
      id={finalSettings.id}
      overflow='visible'
      markerUnits='userSpaceOnUse'
    >
      <circle r={finalSettings.radius} style={finalSettings.style} />
    </marker>
  );
});

export function createCircleMarker(
  settings: ISvgCircleMarkerSettings
): React.FunctionComponent {
  return () => <CircleMarker {...settings} />;
}

export interface ISvgArrowMarkerSettings extends ISvgMarkerSettings {
  height?: number;
  width?: number;
}

const ArrowMarker = React.memo((props: ISvgArrowMarkerSettings) => {
  const finalSettings = {
    id: props.id,
    height: props.height ?? 10,
    width: props.width ?? 10,
    style: {
      stroke: 'none',
      fill: 'rgb(194, 194, 194)',
      ...props.style,
    },
  };
  return (
    <marker
      id={finalSettings.id}
      overflow='visible'
      markerUnits='userSpaceOnUse'
      refX='-0.5'
      orient='auto'
    >
      <path
        d={`M 0 0 -${finalSettings.width} -${finalSettings.height / 2} -${
          finalSettings.width
        } ${finalSettings.height / 2} z`}
        style={finalSettings.style}
      />
    </marker>
  );
});

export function createArrowMarker(
  settings: ISvgArrowMarkerSettings
): React.FunctionComponent {
  return () => <ArrowMarker {...settings} />;
}
