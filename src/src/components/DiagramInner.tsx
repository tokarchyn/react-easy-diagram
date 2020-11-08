import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useRecoilCallback, useRecoilState } from "recoil";
import { LinksLayer } from "./LinksLayer";
import { NodesLayer } from "./NodesLayer";
import {
  diagramTransformationState,
  nodesIdsState,
  NodeState,
  nodeWithIdState,
} from "../DiagramState";
import { DigramApi } from "./Diagram";
import { DraggableCore, DraggableData, DraggableEvent } from "react-draggable";
import { computeTransformationOnScale, generateTransform } from "../utils";

export const InnerDiagram = forwardRef((props, ref) => {
  const [diagramTransformation, setDiagramTransformation] = useRecoilState(
    diagramTransformationState
  );

  const addNode = useRecoilCallback(({ set }) => (newNode: NodeState) => {
    console.log(newNode);
    set(nodeWithIdState(newNode.id), newNode);
    set(nodesIdsState, (v) => v.concat([newNode.id]));
  });

  useImperativeHandle(
    ref,
    (): DigramApi => ({
      addNode,
    })
  );

  const onDrag = (e: DraggableEvent, d: DraggableData) => {
    setDiagramTransformation((current) => ({
      ...current,
      translation: {
        x: current.translation.x + d.deltaX,
        y: current.translation.y + d.deltaY,
      },
    }));
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    setDiagramTransformation((current) =>
      computeTransformationOnScale(movableElementRef.current, e, current)
    );
  };

  const movableElementRef = useRef<HTMLDivElement>(null);
  const transform = generateTransform(diagramTransformation);

  return (
    <DraggableCore onDrag={onDrag}>
      <div
        ref={movableElementRef}
        onWheel={onWheel}
        style={{
          width: "100%",
          height: "100%",
          minHeight: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <LinksLayer transform={transform} />
        <NodesLayer transform={transform} />
      </div>
    </DraggableCore>
  );
});
