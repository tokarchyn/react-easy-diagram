import React, { forwardRef, useRef } from "react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { nodesIdsState, NodeState, nodeWithIdState } from "../DiagramState";
import { InnerDiagram } from "./DiagramInner";

export interface DiagramProps {
  initialState?: NodeState[];
}

const initializeState = (snap: MutableSnapshot, props: DiagramProps) => {
  if (props.initialState) {
    props.initialState.forEach((node) => {
      snap.set(nodeWithIdState(node.id), node);
    });
    snap.set(
      nodesIdsState,
      props.initialState.map((node) => node.id)
    );
  }
};

export interface DigramApi {
  addNode(node: NodeState): void;
}

export const Diagram = forwardRef((props: DiagramProps, ref) => {
  const initializeStateWrapper = (snap: MutableSnapshot) =>
    initializeState(snap, props);

  return (
    <RecoilRoot initializeState={initializeStateWrapper}>
      <InnerDiagram ref={ref}/>
    </RecoilRoot>
  );
});

export const useDiagramRef = () => useRef<DigramApi>();
