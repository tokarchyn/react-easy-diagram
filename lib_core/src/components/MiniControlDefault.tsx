import React from 'react';
import {
  CornerPosition,
  IComponentDefinition,
  IMiniControlComponentProps,
} from '..';

const MiniControlDefault: React.FC<
  IMiniControlComponentProps<IMiniControlDefaultSettings>
> = ({ rootStore, settings }) => {
  settings = settings ?? defaultSettings;

  return (
    <div
      className='react_fast_diagram_Minicontrol_Default'
      style={{
        ...getOffsetStyles(settings),
        ...settings?.containerStyle,
      }}
    >
      {settings.buttons.zoomIn && (
        <MiniControlButton
          size={settings.buttonsSize}
          onClick={rootStore.diagramState.zoomIn}
          children='+'
        />
      )}
      {settings.buttons.zoomOut && (
        <MiniControlButton
          size={settings.buttonsSize}
          onClick={rootStore.diagramState.zoomOut}
          children='-'
        />
      )}
    </div>
  );
};

function getOffsetStyles(settings: IMiniControlDefaultSettings) {
  return {
    top:
      settings.position == 'left-top' || settings.position == 'right-top'
        ? settings.parentOffset
        : undefined,
    right:
      settings.position == 'right-bottom' || settings.position == 'right-top'
        ? settings.parentOffset
        : undefined,
    bottom:
      settings.position == 'left-bottom' || settings.position == 'right-bottom'
        ? settings.parentOffset
        : undefined,
    left:
      settings.position == 'left-top' || settings.position == 'left-bottom'
        ? settings.parentOffset
        : undefined,
  };
}

const MiniControlButton: React.FC<{ size: number; onClick: () => any }> = (
  props
) => (
  <div
    onClick={props.onClick}
    className='react_fast_diagram_Minicontrol_Default_Btn'
    style={{
      width: props.size + 'px',
      height: props.size + 'px',
    }}
  >
    <span>{props.children}</span>
  </div>
);

export const createDefaultMiniControl = (
  settings?: Partial<IMiniControlDefaultSettings>
): IComponentDefinition<
  IMiniControlComponentProps,
  IMiniControlDefaultSettings
> => {
  const finalSettings = {
    ...defaultSettings,
    ...(settings ? settings : {}),
  };

  return {
    component: MiniControlDefault,
    settings: finalSettings,
  };
};

const defaultSettings: IMiniControlDefaultSettings = {
  position: 'left-bottom',
  containerStyle: {},
  buttonsSize: 30,
  buttons: {
    zoomIn: true,
    zoomOut: true,
  },
  parentOffset: 20,
};

export interface IMiniControlDefaultSettings {
  position: CornerPosition;
  containerStyle: React.CSSProperties;
  buttons: ButtonsValue<boolean>;
  buttonsSize: number;
  parentOffset: number;
}

interface ButtonsValue<TValue> {
  zoomIn?: TValue;
  zoomOut?: TValue;
}
