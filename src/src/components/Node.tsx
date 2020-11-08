import React from "react";
import { DraggableCore } from "react-draggable";
import { useRecoilState, useRecoilValue } from "recoil";
import { diagramScaleState, nodeWithIdState } from "../DiagramState";

export const Node = (props: { id: string }) => {
  const [node, setNode] = useRecoilState(nodeWithIdState(props.id));
  const scale = useRecoilValue(diagramScaleState);

  return (
    <DraggableCore
      onStart={(e, d) => e.stopPropagation()}
      onStop={(e, d) => e.stopPropagation()}
      onDrag={(e, d) => {
        e.stopPropagation();
        setNode((curValue) => ({
          ...curValue,
          position: {
            x: curValue.position.x + d.deltaX / scale,
            y: curValue.position.y - d.deltaY / scale,
          },
        }));
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "gray",
          position: "absolute",
          bottom: node.position.y,
          left: node.position.x,
        }}
      >
        {props.id}
      </div>
    </DraggableCore>
  );
};
