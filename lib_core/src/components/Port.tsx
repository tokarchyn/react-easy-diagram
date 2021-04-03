import React, { useContext } from 'react';
import type { INodePortState } from 'states/nodeState';
import { NodeState } from 'states/nodeState';
import { observer } from 'mobx-react-lite';
import { NodeContext } from 'components/NodeWrapper';
import { useUpdateOrCreatePortState } from 'hooks/useUpdateOrCreatePortState';
import {
  PortPosition,
  useRelativePositionStyles,
} from 'hooks/useRelativePositionStyles';
import { Point } from 'utils/point';
import { PortInnerWrapper } from 'components/PortInnerWrapper';

export interface IPortProps extends INodePortState {
  position: PortPosition;
  offsetFromNodeCenter?: number;
  offsetFromOrigin?: Point;
}

export const Port: React.FC<IPortProps> = observer((props) => {
  const { id, label, extra, type, component, linkDirection } = props;
  const node = useContext(NodeContext) as NodeState; // node should already exist
  const portState = useUpdateOrCreatePortState({
    id,
    label,
    extra,
    type,
    component,
    nodeId: node.id,
    linkDirection,
  });

  const positionStyles = useRelativePositionStyles(
    props.position,
    props.offsetFromNodeCenter,
    props.offsetFromOrigin
  );

  if (!portState) {
    return null;
  }

  return (
    <>
      <PortInnerWrapper port={portState} styles={positionStyles} />
    </>
  );
});
