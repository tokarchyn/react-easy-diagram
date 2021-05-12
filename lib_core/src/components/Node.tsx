import React from 'react';
import { INodeVisualComponentProps } from '../states/nodesSettings';
import { NodeLabel } from './NodeLabel';
import { observer } from 'mobx-react-lite';
import {
  IComponentDefinition,
  VisualComponent,
} from 'states/visualComponentState';
import { NodeState } from 'states/nodeState';
import { Optional } from 'utils/common';
import { IPortProps, Port } from './Port';

export const Node: React.FC<
  INodeVisualComponentProps<INodeSettings>
> = observer(({ entity, settings, draggableRef }) => {
  const finalSettings = {
    ...defaultNodeDefaultSettings,
    ...settings,
  };
  const finalStyles = {
    ...finalSettings.style,
    ...(entity.selected ? finalSettings.selectedStyle : undefined),
  };

  return (
    <div
      ref={draggableRef}
      className='react_fast_diagram_Node_Default'
      style={finalStyles}
    >
      <finalSettings.innerNode node={entity} />

      {Array.isArray(finalSettings.ports) &&
        finalSettings.ports.map((p) => <Port {...p} key={p.id} />)}
    </div>
  );
});

const defaultNodeDefaultSettings: INodeFinalSettings = {
  style: {
    padding: '10px',
  },
  selectedStyle: {
    border: '#6eb7ff solid 1px',
  },
  innerNode: NodeLabel,
};

export interface INodeFinalSettings {
  style?: React.CSSProperties;
  selectedStyle: React.CSSProperties;
  ports?: IPortProps[];
  innerNode: VisualComponent<{ node: NodeState }>;
  padding?: React.CSSProperties['padding'];
}

export function createNode(
  settings?: INodeSettings
): IComponentDefinition<
  INodeVisualComponentProps<INodeSettings>,
  INodeSettings
> {
  return {
    component: Node,
    settings: {
      ...defaultNodeDefaultSettings,
      ...settings,
    },
  };
}

export type INodeSettings = Optional<
  INodeFinalSettings,
  'innerNode' | 'selectedStyle'
>;

export type INodeDefaultSettingsWithoutPorts = Omit<INodeSettings, 'ports'>;

export const createInputOutputHorizontalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [
      { id: 'input', position: 'left-center' },
      { id: 'output', position: 'right-center' },
    ],
  });

export const createInputOutputVerticalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [
      { id: 'input', position: 'center-top' },
      { id: 'output', position: 'center-bottom' },
    ],
  });

export const createInputHorizontalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [{ id: 'input', position: 'left-center' }],
  });

export const createInputVerticalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [{ id: 'input', position: 'center-top' }],
  });

export const createOutputHorizontalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [{ id: 'output', position: 'right-center' }],
  });

export const createOutputVerticalNode = (
  settings?: INodeDefaultSettingsWithoutPorts
) =>
  createNode({
    ...settings,
    ports: [{ id: 'output', position: 'center-bottom' }],
  });

export const createStarNode = (settings?: INodeDefaultSettingsWithoutPorts) =>
  createNode({
    ...settings,
    ports: [
      { id: 'left', position: 'left-center' },
      { id: 'top', position: 'center-top' },
      { id: 'right', position: 'right-center' },
      { id: 'bottom', position: 'center-bottom' },
    ],
  });
