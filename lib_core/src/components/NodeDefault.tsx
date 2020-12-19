import React, { forwardRef } from 'react';
import {
  INodeComponentDefinition,
  INodeProps,
} from '../states/nodesSettingsState';

export interface INodeDefaultSettings {
  style: React.CSSProperties;
}

export const NodeDefault = forwardRef<
  HTMLDivElement,
  INodeProps<INodeDefaultSettings>
>((props, draggableRef) => {
  return (
    <div
      ref={draggableRef}
      className='react_fast_diagram_Node_Default'
      style={props.settings?.style}
    >
      <span>{props.node.id}</span>
    </div>
  );
});

export function createNodeDefault(
  settings?: INodeDefaultSettings
): INodeComponentDefinition {
  return {
    component: NodeDefault,
    settings,
  };
}
