import React from "react";
import { useRecoilState } from "recoil";
import { nodesIdsState } from "../DiagramState";
import { MemoizedNode } from "./Node";

export const NodesLayer = React.memo(() => {
  const [nodes] = useRecoilState(nodesIdsState);

  return (
    <>
      {nodes.map((id) => (
        <MemoizedNode key={id} id={id} />
      ))}
    </>
  );
});