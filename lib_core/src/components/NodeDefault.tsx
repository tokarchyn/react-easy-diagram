import React from 'react';
import { INodeVisualComponentProps } from '../states/nodesSettings';
import {
  IComponentDefinition,
  NodeState,
  PortState,
  VisualComponent,
} from '../states';
import {
  createPortsContainerDefault,
  IPortsContainerDefaultProps,
} from './PortsContainerDefault';
import {
  Dictionary,
  Position,
  positionValues,
} from '../types';
import { NodeLabel } from './NodeLabel';
import { observer } from 'mobx-react-lite';

export const NodeDefault: React.FC<
  INodeVisualComponentProps<INodeDefaultSettings>
> = observer(({ entity, settings, draggableRef }) => {
  const finalSettings = {
    ...defaultNodeDefaultSettings,
    ...settings,
  };
  const finalStyles = {
    ...finalSettings.style,
    ...(entity.selected ? finalSettings.selectedStyle : undefined),
  };

  const groupedPorts = new Map<Position, PortState[]>();
  Object.values(entity.ports).forEach((p) => {
    let position = portTypeToPosition(
      p.type,
      finalSettings.portTypeToPositionMapping
    );
    if (position) {
      groupedPorts.has(position)
        ? groupedPorts.get(position)?.push(p)
        : groupedPorts.set(position, [p]);
    }
  });

  return (
    <div
      ref={draggableRef}
      className='react_fast_diagram_Node_Default'
      style={finalStyles}
    >
      <finalSettings.innerNode node={entity} />

      {Array.from(groupedPorts).map(([k, v]) => (
        <finalSettings.nodeContainer
          ports={v}
          position={k}
          key={k}
        />
      ))}
    </div>
  );
});

function portTypeToPosition(
  portType: string,
  mapping?: Dictionary<Position>
): Position | undefined {
  if (!portType) return undefined;

  if (mapping && mapping[portType]) {
    return mapping[portType];
  } else {
    return positionValues.includes(portType as Position)
      ? (portType as Position)
      : undefined;
  }
}

const defaultNodeDefaultSettings: INodeDefaultSettings = {
  selectedStyle: {
    border: '#6eb7ff solid 1px',
  },
  nodeContainer: createPortsContainerDefault({
    offsetFromOriginPosition: 5,
  }),
  innerNode: NodeLabel,
};

export interface INodeDefaultSettings {
  style?: React.CSSProperties;
  selectedStyle: React.CSSProperties;
  nodeContainer: VisualComponent<IPortsContainerDefaultProps>;
  portTypeToPositionMapping?: Dictionary<Position>;
  innerNode: VisualComponent<{ node: NodeState }>;
}

export function createNodeDefault(
  settings?: Partial<INodeDefaultSettings>
): IComponentDefinition<
  INodeVisualComponentProps<INodeDefaultSettings>,
  INodeDefaultSettings
> {
  return {
    component: NodeDefault,
    settings: {
      ...defaultNodeDefaultSettings,
      ...settings,
    },
  };
}
