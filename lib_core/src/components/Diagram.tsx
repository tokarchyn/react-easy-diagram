import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { RecoilRoot } from 'recoil';
import type { MutableSnapshot } from 'recoil';
import {
  linksIdsState,
  LinkState,
  linkWithIdState,
  nodesIdsState,
  NodeState,
  nodeWithIdState,
} from '../DiagramState';
import { InnerDiagram } from './DiagramInner';

export interface DiagramPropsInitState {
  nodes: NodeState[];
  links: LinkState[];
}

export interface DiagramProps {
  initialState?: DiagramPropsInitState;
}

export const initializeState = (
  snap: MutableSnapshot,
  props: DiagramProps
): void => {
  if (props.initialState) {
    props.initialState.nodes.forEach((node) => {
      snap.set(nodeWithIdState(node.id), node);
    });
    snap.set(
      nodesIdsState,
      props.initialState.nodes.map((node) => node.id)
    );

    props.initialState.links.forEach((link) => {
      snap.set(linkWithIdState(link.id), link);
    });
    snap.set(
      linksIdsState,
      props.initialState.links.map((link) => link.id)
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
