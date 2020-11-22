import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { RecoilRoot } from 'recoil';
import type { MutableSnapshot } from 'recoil';
import { nodesIdsState, NodeState, nodeWithIdState } from '../DiagramState';
import { InnerDiagram } from './DiagramInner';

export interface DiagramProps {
  initialState?: NodeState[];
}

export const initializeState = (
  snap: MutableSnapshot,
  props: DiagramProps
): void => {
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
  reinitState(nodes: NodeState[]): void;
}

export const Diagram = forwardRef((props: DiagramProps, ref) => {
  const initializeStateWrapper = (snap: MutableSnapshot) =>
    initializeState(snap, props);

  return (
    <RecoilRoot initializeState={initializeStateWrapper}>
      <InnerDiagram ref={ref} />
    </RecoilRoot>
  );
});

Diagram.displayName = 'Diagram';
