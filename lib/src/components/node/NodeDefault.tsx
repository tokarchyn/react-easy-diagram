import { NodeLabel } from 'components/node/NodeLabel';
import { IPortProps, Port } from 'components/port/Port';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { INodeVisualComponentProps } from 'states/nodesSettings';
import { NodeState } from 'states/nodeState';
import {
  IComponentDefinition,
  VisualComponent,
} from 'states/visualComponentState';

export const NodeDefault: React.FC<
  INodeVisualComponentProps<INodeDefaultSettings>
> = observer(({ entity, settings, draggableRef }) => {
  const className = useMemo(() => {
    let classes = settings?.classes ?? [];
    if (entity.selected && settings?.selectedClasses)
      classes = [...classes, ...settings.selectedClasses];

    if (!settings?.removeDefaultClasses) {
      classes.push('react_fast_diagram_Node_Default');
      if (entity.selected) classes.push('react_fast_diagram_Node_Default_Selected');
    }
    return classes.join(' ');
  }, [settings, entity.selected]);

  return (
    <div ref={draggableRef} className={className} style={settings?.style}>
      {settings?.innerNode && <settings.innerNode node={entity} />}

      {Array.isArray(settings?.ports) &&
        settings?.ports.map((p) => <Port {...p} key={p.id} />)}
    </div>
  );
});

export interface INodeDefaultSettings {
  ports?: IPortProps[];
  innerNode?: VisualComponent<{ node: NodeState }>;
  style?: React.CSSProperties;
  selectedClasses?: string[];
  removeDefaultClasses?: true;
  classes?: string[];
}

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
