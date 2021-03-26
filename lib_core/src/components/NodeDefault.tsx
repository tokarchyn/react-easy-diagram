import React from 'react';
import { INodeVisualComponentProps } from '../states/nodesSettings';
import { IComponentDefinition, NodeState, PortState, VisualComponent } from '../states';
import {
  createPortsContainerDefault,
  IPortsContainerDefaultProps,
} from './PortsContainerDefault';
import { Dictionary, RelativePosition } from '../types';
import { NodeLabel } from './NodeLabel';

export const NodeDefault: React.FC<
  INodeVisualComponentProps<INodeDefaultSettings>
> = ({ entity, settings, draggableRef }) => {
  const finalSettings = {
    ...defaultNodeDefaultSettings,
    ...settings,
  };
  const finalStyles = {
    ...finalSettings.style,
    ...(entity.selected ? finalSettings.selectedStyle : undefined),
  };

  const groupedPorts = new Map<RelativePosition, PortState[]>();
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
      <finalSettings.innerNode node={entity}/>

      {Array.from(groupedPorts).map(([k, v]) => (
        <finalSettings.nodeContainer
          ports={v}
          position={k as RelativePosition}
          key={k}
        />
      ))}
    </div>
  );
};

function portTypeToPosition(
  portType: string,
  mapping?: Dictionary<RelativePosition>
): RelativePosition | undefined {
  if (!portType) return undefined;

  if (mapping) {
    return mapping[portType] ?? (portType as RelativePosition);
  } else {
    return Object.values(RelativePosition).includes(
      portType as RelativePosition
    )
      ? (portType as RelativePosition)
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
  innerNode: NodeLabel
};

export interface INodeDefaultSettings {
  style?: React.CSSProperties;
  selectedStyle: React.CSSProperties;
  nodeContainer: VisualComponent<IPortsContainerDefaultProps>;
  portTypeToPositionMapping?: Dictionary<RelativePosition>;
  innerNode: VisualComponent<{node: NodeState}>;
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
