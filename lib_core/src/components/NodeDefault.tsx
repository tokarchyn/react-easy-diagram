import React from 'react';
import { INodeVisualComponentProps } from '../states/nodesSettings';
import { IComponentDefinition, VisualComponent } from '../states';
import {
  createPortsContainerDefault,
  IPortsContainerDefaultProps,
} from './PortsContainerDefault';

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

  return (
    <div
      ref={draggableRef}
      className='react_fast_diagram_Node_Default'
      style={finalStyles}
    >
      <span>{entity.id}</span>

      <finalSettings.nodeContainer
        ports={Object.values(entity.ports).filter(
          (port) => port.type === 'left'
        )}
        position='left'
      />
      <finalSettings.nodeContainer
        ports={Object.values(entity.ports).filter(
          (port) => port.type === 'top'
        )}
        position='top'
      />
      <finalSettings.nodeContainer
        ports={Object.values(entity.ports).filter(
          (port) => port.type === 'right'
        )}
        position='right'
      />
      <finalSettings.nodeContainer
        ports={Object.values(entity.ports).filter(
          (port) => port.type === 'bottom'
        )}
        position='bottom'
      />
    </div>
  );
};

const defaultNodeDefaultSettings: INodeDefaultSettings = {
  selectedStyle: {
    border: '#6eb7ff solid 1px ',
  },
  nodeContainer: createPortsContainerDefault({
    offsetFromOriginPosition: 5
  }),
};

export interface INodeDefaultSettings {
  style?: React.CSSProperties;
  selectedStyle: React.CSSProperties;
  nodeContainer: VisualComponent<IPortsContainerDefaultProps>;
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
