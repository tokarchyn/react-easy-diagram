import React, { useCallback, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import { SetterOrUpdater, useRecoilCallback } from 'recoil';
import { diagramScaleState } from '../../states/diagramState';
import { NodeState } from '../../states/nodeState';
import { Point } from '../../types/common';
import { generateTransform } from '../../utils';
import { useNotifyRef } from '../useNotifyRef';
import { usePositionSync, useUserAbilityToSelectSwitcher } from './common';
import { useDragHandlers } from './useDragHandlers';

export const useNodeUserInteraction = (
  node: NodeState,
  setNode: SetterOrUpdater<NodeState>,
  enable?: boolean
): IUseNodeUserInteractionResult => {
  // useState instead of reference cause the situation, when multiple gesture callback invocations go before state actually updates,
  // so those invocations will rely on old state data.
  const positionRef = useNotifyRef<Point>(node.position);

  // Should trigger rendering on change, otherwise useUserSelectSwitcher will not be invoked
  const activeRef = useNotifyRef(false);

  const userInteractionElemRef = useRef<HTMLElement>(null);
  
  // Do not use useRecoilValue as it would rerender the node anytime the diagram's scale changes
  const getDiagramScale = useRecoilCallback(({ snapshot }) => () => {
    const scaleState = snapshot.getLoadable(diagramScaleState).contents;
    return typeof scaleState === 'number' ? scaleState : 1;
  });

  const nodePositionSetter = useCallback(
    (getNewPosition: ((currentPosition: Point) => Point)) => {
      setNode(currentNodeState => {
        const newNodePosition = getNewPosition(currentNodeState.position);        
        if (currentNodeState.position !==newNodePosition) {
          return {
            ...currentNodeState,
            position: newNodePosition
          }
        }
        else return currentNodeState;
      })
    },
    [setNode],
  )   
  usePositionSync(activeRef.current, positionRef, node.position, nodePositionSetter)

  const dragHandlers = useDragHandlers(activeRef, positionRef, getDiagramScale);

  useGesture(
    dragHandlers,
    {
      domTarget: userInteractionElemRef,
      eventOptions: { passive: false },
      enabled: enable,
    }
  );

  useUserAbilityToSelectSwitcher(
    activeRef.current,
    userInteractionElemRef.current?.ownerDocument?.body
  );

  return {
    transform: generateTransform(positionRef.current),
    active: activeRef.current,
    userInteractionElemRef
  };
};

export interface IUseNodeUserInteractionResult {
  transform: string;
  active: boolean;
  userInteractionElemRef: React.RefObject<HTMLElement>;
}
