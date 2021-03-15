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
      {rootStore.selectionState.selectedItems.length > 0 && (
        <RubbishBinButton
          size={settings.buttonsSize}
          onClick={rootStore.selectionState.removeSelected}
        />
      )}
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
      {
        <MiniControlButton
          size={settings.buttonsSize}
          onClick={rootStore.diagramState.zoomToFit}
          children='[ ]'
        />
      }
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

export const RubbishBinButton: React.FC<{
  size: number;
  onClick: () => any;
}> = (props) => (
  <div
    onClick={props.onClick}
    className='react_fast_diagram_Minicontrol_Default_Btn'
    style={{
      width: props.size + 'px',
      height: props.size + 'px',
      padding: 5,
      backgroundColor: '#fa4040'
    }}
  >
    <svg
      x='0px'
      y='0px'
      width="488.936px" height="488.936px" viewBox="0 0 488.936 488.936"
      fill="white"
    >
      <g>
        <path
          d='M381.16,111.948H107.376c-6.468,0-12.667,2.819-17.171,7.457c-4.504,4.649-6.934,11.014-6.738,17.477l9.323,307.69
			c0.39,12.92,10.972,23.312,23.903,23.312h20.136v-21.012c0-24.121,19.368-44.049,43.488-44.049h127.896
			c24.131,0,43.893,19.928,43.893,44.049v21.012h19.73c12.933,0,23.52-10.346,23.913-23.268l9.314-307.7
			c0.195-6.462-2.234-12.863-6.738-17.513C393.821,114.767,387.634,111.948,381.16,111.948z'
        />
        <path
          d='M309.166,435.355H181.271c-6.163,0-11.915,4.383-11.915,11.516v30.969c0,6.672,5.342,11.096,11.915,11.096h127.895
			c6.323,0,11.366-4.773,11.366-11.096v-30.969C320.532,440.561,315.489,435.355,309.166,435.355z'
        />
        <path
          d='M427.696,27.106C427.696,12.138,415.563,0,400.591,0H88.344C73.372,0,61.239,12.138,61.239,27.106v30.946
			c0,14.973,12.133,27.106,27.105,27.106H400.59c14.973,0,27.105-12.133,27.105-27.106L427.696,27.106L427.696,27.106z'
        />
      </g>
    </svg>
  </div>
);

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
