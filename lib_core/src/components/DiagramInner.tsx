import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { MutableSnapshot, useRecoilCallback, useRecoilState } from 'recoil';
import { LinksLayerMemorized } from './LinksLayer';
import { NodesLayerMemorized } from './NodesLayer';
import {
  diagramScaleState,
  diagramTranslateState,
  linksIdsState,
  linkWithIdState,
  nodesIdsState,
  NodeState,
  nodeWithIdState,
} from '../DiagramState';
import { DiagramInitializer, DiagramApi, initializeState } from './Diagram';
import { DraggableCore, DraggableData, DraggableEvent } from 'react-draggable';
import { computeTransformationOnScale, generateTransform } from '../utils';
import '../Diagram.css';

export const InnerDiagram = forwardRef((_props, ref) => {
  const [translate, setTranslate] = useRecoilState(diagramTranslateState);
  const [scale, setScale] = useRecoilState(diagramScaleState);
  const movableElementRef = useRef<HTMLDivElement>(null);

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

  const onDrag = (e: DraggableEvent, d: DraggableData) => {
    // console.log(e);
    setTranslate((current) => ({
      x: current.x + d.deltaX,
      y: current.y + d.deltaY,
    }));
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const transformation = computeTransformationOnScale(
      movableElementRef.current,
      e,
      translate,
      scale
    );
    if (transformation) {
      setTranslate(transformation.translate);
      setScale(transformation.scale);
    }
  };

  const transform = generateTransform(translate, scale);

  return (
    <DraggableCore
      nodeRef={movableElementRef}
      onDrag={onDrag}
      cancel='.react_fast_diagram_Node'
    >
      <div
        ref={movableElementRef}
        onWheel={onWheel}
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
    </DraggableCore>
  );
});

InnerDiagram.displayName = 'InnerDiagram';
