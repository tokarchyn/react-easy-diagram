import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useRecoilCallback, useRecoilState } from "recoil";
import { LinksLayerMemorized } from "components/LinksLayer";
import { NodesLayerMemorized } from "components/NodesLayer";
import {
  diagramScaleState,
  diagramTranslateState,
  nodesIdsState,
  NodeState,
  nodeWithIdState,
} from "DiagramState";
import { DigramApi } from "components/Diagram";
import { DraggableCore, DraggableData, DraggableEvent } from "react-draggable";
import { computeTransformationOnScale, generateTransform } from "utils";
import "Diagram.css";

export const InnerDiagram = forwardRef((_props, ref) => {
  const [translate, setTranslate] = useRecoilState(diagramTranslateState);

  const [scale, setScale] = useRecoilState(diagramScaleState);

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

  const onDrag = (e: DraggableEvent, d: DraggableData) => {
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

  const movableElementRef = useRef<HTMLDivElement>(null);
  const transform = generateTransform(translate, scale);

  return (
    <DraggableCore onDrag={onDrag}>
      <div
        ref={movableElementRef}
        onWheel={onWheel}
        className="react-fast-diagram-DiagramInner"
      >
        <div
          className="react-fast-diagram-Movable"
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

InnerDiagram.displayName = "InnerDiagram";
