import { NodeLabel } from 'components/node/NodeLabel';
import { IPortProps, Port } from 'components/port/Port';
import { IUseStylingOptions, useStyling } from 'hooks/useStyling';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { INodeVisualComponentProps } from 'states/nodesSettings';
import { NodeState } from 'states/nodeState';
import {
  IComponentDefinition,
  VisualComponent,
} from 'states/visualComponentState';

const NodeDefault: React.FC<
  INodeVisualComponentProps<INodeDefaultSettings>
> = observer(({ entity, settings }) => {
  const stylingOptions = useMemo<IUseStylingOptions>(
    () => ({
      removeDefaultClasses: settings?.removeDefaultClasses,
      baseState: 'base',
      classes: settings?.classes,
      defaultClasses: defaultNodeClasses,
      style: settings?.style,
      spareStates: { 'selected-hovered': ['selected', 'hovered'] },
    }),
    [settings]
  );

  let state = 'base';
  if (entity.selected && entity.hovered) state = 'selected-hovered';
  else if (entity.selected) state = 'selected';
  else if (entity.hovered) state = 'hovered';

  const styling = useStyling(stylingOptions, state);

  return (
    <div className={styling.className} style={styling.style}>
      {settings?.innerNode && <settings.innerNode node={entity} />}

      {Array.isArray(settings?.ports) &&
        settings?.ports.map((p) => <Port {...p} key={p.id} />)}
    </div>
  );
});

export interface INodeDefaultSettings {
  ports?: IPortProps[];
  innerNode?: VisualComponent<{ node: NodeState }>;
  removeDefaultClasses?: true;
  classes?: NodeDefaultSettingsByStates<string[]>;
  style?: NodeDefaultSettingsByStates<React.CSSProperties>;
}

export type NodeDefaultState =
  | 'base'
  | 'hovered'
  | 'selected'
  | 'selected-hovered';
export type NodeDefaultSettingsByStates<TValue> = {
  [key in NodeDefaultState]?: TValue;
};

export const defaultNodeClasses: NodeDefaultSettingsByStates<string[]> = {
  base: ['react_fast_diagram_NodeDefault'],
  hovered: ['react_fast_diagram_NodeDefault_Hovered'],
  selected: ['react_fast_diagram_NodeDefault_Selected'],
};

export function createNode(
  settings?: INodeDefaultSettings
): IComponentDefinition<
  INodeVisualComponentProps<INodeDefaultSettings>,
  INodeDefaultSettings
> {
  return {
    component: NodeDefault,
    settings: {
      innerNode: NodeLabel,
      ...settings,
    },
  };
}

export type INodeDefaultSettingsWithoutPorts = Omit<
  INodeDefaultSettings,
  'ports'
>;

export const createInputOutputHorizontalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [
      { id: 'input', type: 'input', position: 'left-center' },
      { id: 'output', type: 'output', position: 'right-center' },
    ],
  });

export const createInputOutputVerticalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [
      { id: 'input', type: 'input', position: 'top-center' },
      { id: 'output', type: 'output', position: 'bottom-center' },
    ],
  });

export const createInputHorizontalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [{ id: 'input', type: 'input', position: 'left-center' }],
  });

export const createInputVerticalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [{ id: 'input', type: 'input', position: 'top-center' }],
  });

export const createOutputHorizontalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [{ id: 'output', type: 'output', position: 'right-center' }],
  });

export const createOutputVerticalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [{ id: 'output', type: 'output', position: 'bottom-center' }],
  });

export const createStarNode = (settings?: INodeDefaultSettingsWithoutPorts) =>
  createNode({
    ...settings,
    ports: [
      { id: 'left', position: 'left-center' },
      { id: 'top', position: 'top-center' },
      { id: 'right', position: 'right-center' },
      { id: 'bottom', position: 'bottom-center' },
    ],
  });
