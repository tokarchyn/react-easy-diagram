import { cloneSelectedNodesCommand } from 'commands/clone';
import { removeSelectedCommand } from 'commands/remove';
import {
  CopyIcon,
  FilterCenterFocusIcon,
  RubbishBinIcon,
  UnlockIcon,
} from 'components/Icons';
import { LockIcon } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import type { IMiniControlComponentProps } from 'states/diagramSettings';
import { IComponentDefinition } from 'states/visualComponentState';
import { combineArrays } from 'utils/common';
import { CornerPosition } from 'utils/position';

const MiniControlDefault: React.FC<
  IMiniControlComponentProps<IMiniControlDefaultSettings>
> = observer(
  ({
    rootStore: {
      commandExecutor,
      diagramState,
      diagramSettings,
      selectionState,
    },
    settings,
  }) => {
    const finalSettings = settings ?? defaultSettings;

    const className = useMemo(
      () =>
        combineArrays(
          ['react_fast_diagram_MiniControl_Default'],
          finalSettings?.classes
        ).join(' '),
      [finalSettings]
    );

    const style = useMemo(
      () => ({
        ...getOffsetStyles(finalSettings),
        ...finalSettings?.style,
      }),
      [finalSettings]
    );

    if (Object.values(finalSettings.buttons).every((v) => v === false))
      return null;

    return (
      <div className={className} style={style}>
        {finalSettings.buttons.deleteSelection &&
          selectionState.selectedItems.length > 0 && (
            <Button
              size={finalSettings.buttonsSize}
              onClick={() => commandExecutor.execute(removeSelectedCommand)}
            >
              <RubbishBinIcon />
            </Button>
          )}
        {finalSettings.buttons.cloneSelectedNodes &&
          selectionState.selectedNodes.length > 0 && (
            <Button
              size={finalSettings.buttonsSize}
              onClick={() => commandExecutor.execute(cloneSelectedNodesCommand)}
            >
              <CopyIcon />
            </Button>
          )}
        {finalSettings.buttons.zoomIn && (
          <Button
            size={finalSettings.buttonsSize}
            onClick={diagramState.zoomIn}
            children='+'
          />
        )}
        {finalSettings.buttons.zoomOut && (
          <Button
            size={finalSettings.buttonsSize}
            onClick={diagramState.zoomOut}
            children='-'
          />
        )}
        {finalSettings.buttons.zoomToFit && (
          <Button
            size={finalSettings.buttonsSize}
            onClick={diagramState.zoomToFit}
          >
            <FilterCenterFocusIcon />
          </Button>
        )}
        {finalSettings.buttons.lockUnlockPointerInteractions && (
          <Button
            size={finalSettings.buttonsSize}
            onClick={() => {
              if (
                diagramSettings.userInteraction.arePointerInteractionsDisabled
              )
                diagramSettings.userInteraction.enableAllPointerInteractions(
                  true
                );
              else
                diagramSettings.userInteraction.disableAllPointerInteractions(
                  true
                );
            }}
          >
            {diagramSettings.userInteraction.arePointerInteractionsDisabled ? (
              <UnlockIcon />
            ) : (
              <LockIcon />
            )}
          </Button>
        )}
      </div>
    );
  }
);

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
    className='react_fast_diagram_MiniControl_Btn'
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
  buttonsSize: 30,
  buttons: {
    zoomIn: true,
    zoomOut: true,
    deleteSelection: true,
    cloneSelectedNodes: true,
    zoomToFit: true,
    lockUnlockPointerInteractions: true,
  },
  parentOffset: 20,
};

export interface IMiniControlDefaultSettings {
  classes?: string[];
  style?: React.CSSProperties;
  position?: CornerPosition;
  buttons: ButtonsValue;
  buttonsSize: number;
  parentOffset?: number;
}

interface ButtonsValue {
  zoomIn?: boolean;
  zoomOut?: boolean;
  deleteSelection?: boolean;
  cloneSelectedNodes?: boolean;
  zoomToFit?: boolean;
  lockUnlockPointerInteractions?: boolean;
}
