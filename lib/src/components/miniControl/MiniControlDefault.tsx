import { cloneSelectedNodesCommand } from 'commands/clone';
import { removeSelectedCommand } from 'commands/remove';
import {
  CopyIcon,
  FilterCenterFocusIcon,
  RubbishBinIcon,
} from 'components/Icons';
import { observer } from 'mobx-react-lite';
import React from 'react';
import type { IMiniControlComponentProps } from 'states/diagramSettings';
import { IComponentDefinition } from 'states/visualComponentState';
import { CornerPosition } from 'utils/position';

const MiniControlDefault: React.FC<
  IMiniControlComponentProps<IMiniControlDefaultSettings>
> = observer(({ rootStore, settings }) => {
  settings = settings ?? defaultSettings;

  if (Object.values(settings.buttons).every((v) => v === false)) return null;

  return (
    <div
      className='react_fast_diagram_Minicontrol_Default'
      style={{
        ...getOffsetStyles(settings),
        ...settings?.containerStyle,
      }}
    >
      {settings.buttons.deleteSelection &&
        rootStore.selectionState.selectedItems.length > 0 && (
          <Button
            size={settings.buttonsSize}
            onClick={() =>
              rootStore.commandExecutor.execute(removeSelectedCommand)
            }
          >
            <RubbishBinIcon />
          </Button>
        )}
      {settings.buttons.cloneSelectedNodes &&
        rootStore.selectionState.selectedItems.length > 0 && (
          <Button
            size={settings.buttonsSize}
            onClick={() =>
              rootStore.commandExecutor.execute(cloneSelectedNodesCommand)
            }
          >
            <CopyIcon />
          </Button>
        )}
      {settings.buttons.zoomIn && (
        <Button
          size={settings.buttonsSize}
          onClick={rootStore.diagramState.zoomIn}
          children='+'
        />
      )}
      {settings.buttons.zoomOut && (
        <Button
          size={settings.buttonsSize}
          onClick={rootStore.diagramState.zoomOut}
          children='-'
        />
      )}
      {settings.buttons.zoomToFit && (
        <Button
          size={settings.buttonsSize}
          onClick={rootStore.diagramState.zoomToFit}
        >
          <FilterCenterFocusIcon />
        </Button>
      )}
    </div>
  );
});

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

export const Button: React.FC<{
  size: number;
  onClick: () => any;
}> = (props) => (
  <button
    onClick={props.onClick}
    className='react_fast_diagram_Minicontrol_Btn'
    style={{
      width: props.size + 'px',
      height: props.size + 'px',
      padding: 5,
    }}
  >
    {props.children}
  </button>
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
    deleteSelection: true,
    cloneSelectedNodes: true,
    zoomToFit: true,
  },
  parentOffset: 20,
};

export interface IMiniControlDefaultSettings {
  position: CornerPosition;
  containerStyle: React.CSSProperties;
  buttons: ButtonsValue;
  buttonsSize: number;
  parentOffset: number;
}

interface ButtonsValue {
  zoomIn?: boolean;
  zoomOut?: boolean;
  deleteSelection?: boolean;
  cloneSelectedNodes?: boolean;
  zoomToFit?: boolean;
}
