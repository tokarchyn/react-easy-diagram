import React from "react";
import { useRecoilState } from "recoil";
import { nodesIdsState } from "../DiagramState";
import { NodeMemo } from "./Node";

const NodesLayer: React.FC = () => {
  const [nodes] = useRecoilState(nodesIdsState);

  return (
    <>
      {nodes.map((id) => (
        <NodeMemo key={id} id={id} />
      ))}
    </>
  );
};

export const NodesLayerMemorized = React.memo(NodesLayer);
