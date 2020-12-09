import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { MutableSnapshot, useRecoilCallback, useRecoilState, useSetRecoilState } from 'recoil';
import { LinksLayerMemorized } from './LinksLayer';
import { NodesLayerMemorized } from './NodesLayer';
import {
  diagramScaleState,
  diagramTranslateState,
} from '../states/diagramState';
import { DiagramInitializer, DiagramApi, initializeState } from './Diagram';
import { DraggableCore, DraggableData, DraggableEvent } from 'react-draggable';
import { computeTransformationOnScale, generateTransform } from '../utils';
import '../Diagram.css';
import { nodesIdsState, NodeState, nodeWithIdState } from '../states/nodeState';
import { linksIdsState, linkWithIdState } from '../states/linkState';
import { useNotifyRef } from '../hooks/useNotifyRef';
import { useDragAndZoom } from '../hooks/useDragAndZoom';

export const InnerDiagram = forwardRef<DiagramApi>((_props, ref) => {
  const movableElementRef = useNotifyRef<HTMLDivElement | null>(null);
  const setScale = useSetRecoilState(diagramScaleState)
  const {transform, scale} = useDragAndZoom({
    elemToAttachTo: movableElementRef,
    enableZoom: true,
    listenOnlyClass: 'react_fast_diagram_DiagramInner',
  });

  useEffect(() => {
    setScale(scale);
  }, [scale])
  
  const addNode = useRecoilCallback(({ set }) => (newNode: NodeState) => {
    set(nodeWithIdState(newNode.id), newNode);
    set(nodesIdsState, (v) => v.concat([newNode.id]));
  });

  const reinitState = useRecoilCallback(
    ({ snapshot, gotoSnapshot }) => (initializer: DiagramInitializer) => {
      gotoSnapshot(
        snapshot.map((m) => {
          const nodeIds = m.getLoadable(nodesIdsState).contents;
          if (Array.isArray(nodeIds)) {
            nodeIds.forEach((id) => m.reset(nodeWithIdState(id)));
          }

          const linksIds = m.getLoadable(linksIdsState).contents;
          if (Array.isArray(linksIds)) {
            linksIds.forEach((id) => m.reset(linkWithIdState(id)));
          }

          initializeState(m, initializer);
        })
      );
    }
  );

  useImperativeHandle(
    ref,
    (): DiagramApi => ({
      addNode,
      reinitState,
    }),
    []
  );

  return (
    <div
      ref={movableElementRef}
      style={{ touchAction: 'none' }}
      className='react_fast_diagram_DiagramInner'
    >
      <div
        className='react_fast_diagram_Movable'
        style={{
          transform: transform,
        }}
      >
        <LinksLayerMemorized />
        <NodesLayerMemorized />
      </div>
    </div>
  );
});

InnerDiagram.displayName = 'InnerDiagram';
