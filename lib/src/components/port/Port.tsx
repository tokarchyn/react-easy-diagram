import React, { useContext, useEffect } from 'react';
import { NodeState } from 'states/nodeState';
import { observer } from 'mobx-react-lite';
import {
  NodeContext,
} from 'components/node/NodeWrapper';
import {
  PortPosition,
  useRelativePositionStyles,
} from 'hooks/useRelativePositionStyles';
import { Point } from 'utils/point';
import { usePortUserInteraction } from 'hooks/userInteractions/usePortUserInteraction';
import { DISABLE_NODE_USER_INTERACTION_CLASS } from 'hooks/userInteractions/useNodeUserInteraction';
import { DirectionWithDiagonals } from 'utils/position';
import { useRootStore } from 'hooks/useRootStore';

export interface IPortProps {
  id: string;
}

export const Port: React.FC<IPortProps> = observer((props) => {
  const { diagramSettings } = useRootStore();
  const node = useContext(NodeContext) as NodeState; // node should already exist
  const portState = node.getPort(props.id);

  const positionStyles = useRelativePositionStyles(
    portState?.position,
    portState?.offsetFromNodeCenter,
    portState?.offsetFromOrigin
  );

  const { bind } = usePortUserInteraction(portState);

  useEffect(() => {
    // Prevent from recalculating on first load
    if (portState && portState.offsetRecalculationRequested > 0) {
      portState?.recalculateOffsetImmediately();
    }
  }, [portState, portState?.offsetRecalculationRequested]);

  if (!portState) {
    return null;
  }

  let className = DISABLE_NODE_USER_INTERACTION_CLASS;
  if (!diagramSettings.userInteraction.arePointerInteractionsDisabled) {
    // Disable touch actions as useGesture library recommends
    className += ' react_fast_diagram_touch_action_disabled';
  }

  return (
    <div
      style={positionStyles}
      id={portState.fullId}
      className={className}
      ref={portState.ref}
      key={portState.fullId}
      {...bind()}
    >
      <portState.componentDefinition.component
        entity={portState}
        settings={portState.componentDefinition.settings}
      />
    </div>
  );
});