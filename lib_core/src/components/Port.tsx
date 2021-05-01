import React, { useContext, useEffect } from 'react';
import { NodeState } from 'states/nodeState';
import { observer } from 'mobx-react-lite';
import {
  NodeContext,
  RenderedPortsComponentsContext,
} from 'components/NodeWrapper';
import { useUpdateOrCreatePortState } from 'hooks/useUpdateOrCreatePortState';
import {
  PortPosition,
  useRelativePositionStyles,
} from 'hooks/useRelativePositionStyles';
import { Point } from 'utils/point';
import { IPortState } from 'states/portState';
import { usePortUserInteraction } from 'hooks/userInteractions/usePortUserInteraction';
import { disableNodeUserInteractionClassName } from 'hooks/userInteractions/useNodeUserInteraction';

export interface IPortProps extends IPortState {
  position?: PortPosition;
  offsetFromNodeCenter?: number;
  offsetFromOrigin?: Point;
}

export const Port: React.FC<IPortProps> = observer((props) => {
  const node = useContext(NodeContext) as NodeState; // node should already exist
  const portState = useUpdateOrCreatePortState({
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

const className = `react_fast_diagram_Port ${disableNodeUserInteractionClassName}`;

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
}