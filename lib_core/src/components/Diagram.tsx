import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { RecoilRoot, RecoilRootProps, RecoilState } from 'recoil';
import type { MutableSnapshot } from 'recoil';
import {
  LinkInit,
  linksIdsState,
  LinkState,
  linkWithIdState,
  NodeInit,
  nodesIdsState,
  NodeState,
  nodeWithIdState,
} from '../DiagramState';
import { InnerDiagram } from './DiagramInner';
import { v4 as uuidv4 } from 'uuid';

export interface DiagramInitializer{
  nodes: NodeInit[];
  links: LinkInit[];
}

export interface DiagramProps {
  initialState?: DiagramInitializer;
}

export const initializeState = (
  snap: MutableSnapshot,
  initializer?: DiagramInitializer
): void => {
  if (initializer) {
    initializer.nodes.forEach((node) => {
      snap.set(nodeWithIdState(node.id), node);
    });
    snap.set(
      nodesIdsState,
      initializer.nodes.map((node) => node.id)
    );

    const linksIds: string[] = [];
    initializer.links.forEach((link) => {
      let id = link.id ?? uuidv4();
      if (link.id !== id) {
        link = {...link, id};
      }
      linksIds.push(id);      
      snap.set(linkWithIdState(id), link);

    });
    snap.set(linksIdsState,linksIds);
  }
};

export interface DiagramApi {
  addNode(node: NodeState): void;
  reinitState(initializer: DiagramInitializer): void;
}

export const Diagram = forwardRef((props: DiagramProps, ref) => {
  const initializeStateWrapper = (snap: MutableSnapshot) =>
    initializeState(snap, props.initialState);

  return (
    <RecoilRoot initializeState={initializeStateWrapper}>
      <InnerDiagram ref={ref} />
    </RecoilRoot>
  );
});

Diagram.displayName = 'Diagram';
