import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { LinksLayerMemorized } from './LinksLayer';
import { NodesLayerMemorized } from './NodesLayer';
import {
  diagramScaleState,
  diagramTranslateState,
  nodesIdsState,
  NodeState,
  nodeWithIdState,
} from '../DiagramState';
import { DigramApi } from './Diagram';
import { DraggableCore, DraggableData, DraggableEvent } from 'react-draggable';
import { computeTransformationOnScale, generateTransform } from '../utils';
import styles from '../Diagram.module.css';

export const InnerDiagram = forwardRef((_props, ref) => {
  const [translate, setTranslate] = useRecoilState(diagramTranslateState);
  const [scale, setScale] = useRecoilState(diagramScaleState);
  const movableElementRef = useRef<HTMLDivElement>(null);

  const addNode = useRecoilCallback(({ set }) => (newNode: NodeState) => {
    console.log(newNode);
    set(nodeWithIdState(newNode.id), newNode);
    set(nodesIdsState, (v) => v.concat([newNode.id]));
  });

  const reinitState = useRecoilCallback(
    ({ set, reset, snapshot }) => (newNodes: NodeState[]) => {
      const ids = snapshot.getLoadable(nodesIdsState).contents;
      if (Array.isArray(ids)) {
        ids.forEach((id) => reset(nodeWithIdState(id)));
      }

      set(
        nodesIdsState,
        newNodes.map((n) => n.id)
      );

      newNodes.forEach((n) => set(nodeWithIdState(n.id), n));
    }
  );

  useImperativeHandle(
    ref,
    (): DigramApi => ({
      addNode,
      reinitState,
    })
  );

  const onDrag = (_: DraggableEvent, d: DraggableData) => {
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
    <DraggableCore onDrag={onDrag}>
      <div
        ref={movableElementRef}
        onWheel={onWheel}
        className={styles.react_fast_diagram_DiagramInner}
      >
        <div
          className={styles.react_fast_diagram_Movable}
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
