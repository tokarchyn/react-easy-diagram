import React from "react";
import { useRecoilState } from "recoil";
import { nodesIdsState } from "../DiagramState";
import { Node } from "./Node";

export const NodesLayer = (props: { transform: string }) => {
  const [nodes] = useRecoilState(nodesIdsState);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "visible",
        transformOrigin: "0px 0px",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        transform: props.transform,
      }}
    >
      {nodes.map((id) => (
        <Node key={id} id={id} />
      ))}
    </div>
  );
};
