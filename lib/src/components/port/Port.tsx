import React, { useContext, useEffect } from 'react';
import { NodeState } from 'states/nodeState';
import { observer } from 'mobx-react-lite';
import {
  NodeContext,
  RenderedPortsComponentsContext,
} from 'components/node/NodeWrapper';
import { useUpdateOrCreatePortState } from 'hooks/useUpdateOrCreatePortState';
import {
  PortPosition,
  useRelativePositionStyles,
} from 'hooks/useRelativePositionStyles';
import { Point } from 'utils/point';
import { IPortState } from 'states/portState';
import { usePortUserInteraction } from 'hooks/userInteractions/usePortUserInteraction';
import { DISABLE_NODE_USER_INTERACTION_CLASS } from 'hooks/userInteractions/useNodeUserInteraction';
import { DirectionWithDiagonals } from 'utils/position';

export interface IPortProps extends IPortState {
  position?: PortPosition;
  offsetFromNodeCenter?: number;
  offsetFromOrigin?: Point;
}

export const Port: React.FC<IPortProps> = observer((props) => {
  const node = useContext(NodeContext) as NodeState; // node should already exist
  const portState = useUpdateOrCreatePortState({
    linkDirection: props.position && positionToLinkDirection[props.position],
    ...props,
    nodeId: node.id,
  });

  const positionStyles = useRelativePositionStyles(
    props.position,
    props.offsetFromNodeCenter,
    props.offsetFromOrigin
  );

  useRenderingReport(props.id);

  const { bind } = usePortUserInteraction(portState);

  useEffect(() => {
    portState?.ref.recalculateSizeAndPosition();
  }, [
    portState,
    portState?.ref,
    portState?.sizeAndPositionRecalculationWithDelay,
  ]);

  if (!portState) {
    return null;
  }

  return (
    <div
      style={positionStyles}
      id={portState.fullId}
      className={DISABLE_NODE_USER_INTERACTION_CLASS}
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

/**
 * Report to NodeWrapper that port was rendered so it can clean up the old ports
 * @param id - port id
 */
const useRenderingReport = (id: string) => {
  const { render, unrender } = useContext(RenderedPortsComponentsContext);
  useEffect(() => {
    render(id);
    return () => unrender(id);
  }, [id]);
};

const positionToLinkDirection: {
  [key in PortPosition]: DirectionWithDiagonals;
} = {
  'left-center': 'left',
  'left-bottom': 'left',
  'left-top': 'left',

  'top-left': 'up',
  'top-center': 'up',
  'top-right': 'up',

  'right-center': 'right',
  'right-bottom': 'right',
  'right-top': 'right',

  'bottom-left': 'down',
  'bottom-center': 'down',
  'bottom-right': 'down',

  'diagonal-left-top': 'left-up',
  'diagonal-right-top': 'right-up',
  'diagonal-right-bottom': 'right-down',
  'diagonal-left-bottom': 'left-down',
};
