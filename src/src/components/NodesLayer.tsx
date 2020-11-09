import React from "react";
import { useRecoilState } from "recoil";
import { nodesIdsState } from "../DiagramState";
import { Node } from "./Node";

export const NodesLayer = (props: { transform: string }) => {
  const [nodes] = useRecoilState(nodesIdsState);

  return (
    <div
      className="react-fast-diagram-Layer"
      style={{
        transform: props.transform,
      }}
    >
      {nodes.map((id) => (
        <Node key={id} id={id} />
      ))}
    </div>
  );
};
