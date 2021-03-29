import React, { useContext } from 'react';
import { INodePortState, NodeState } from '../states';
import { usePortUserInteraction } from '../hooks/userInteractions/usePortUserInteraction';
import { observer } from 'mobx-react-lite';
import { NodeContext } from './NodeWrapper';
import { useUpdateOrCreatePortState } from '../hooks/useUpdateOrCreatePortState';
import { useRelativePositionStyles } from '../hooks/useRelativePositionStyles';
import { Point, RelativePosition } from '..';

export interface IPortProps extends INodePortState {
  position: RelativePosition,
  offsetFromOrigin?: number | Point
}

export const Port: React.FC<IPortProps> = observer((props) => {
  const { id, label, extra, type, component } = props;
  const node = useContext(NodeContext) as NodeState; // node should already exist
  const portState = useUpdateOrCreatePortState({
    id,
    label,
    extra,
    type,
    component,
    nodeId: node.id,
  });
  const { bind } = usePortUserInteraction(portState);
  const positionStyles = useRelativePositionStyles(props.position, props.offsetFromOrigin)

  if (!portState) {
    return null;
  }

  return (
    <div style={positionStyles}>
      <div
        ref={portState.ref}
        {...bind()}
        id={portState.fullId}
        className='react_fast_diagram_port'
      >
        <portState.componentDefinition.component
          entity={portState}
          settings={portState.componentDefinition.settings}
        />
      </div>
    </div>
  );
});
