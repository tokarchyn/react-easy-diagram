import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { RecoilRoot, RecoilRootProps, RecoilState } from 'recoil';
import type { MutableSnapshot } from 'recoil';
import {
} from '../states/diagramState';
import { InnerDiagram } from './DiagramInner';
import { v4 as uuidv4 } from 'uuid';
import { NodeInit, nodesIdsState, NodeState, nodeWithIdState } from '../states/nodeState';
import { LinkInit, linksIdsState, linkWithIdState } from '../states/linkState';

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
    initializer.links.forEach((linkOriginal) => {
      const link = {
        type: 'simple',
        id: linkOriginal.id ?? uuidv4(),
        ...linkOriginal
      }

      linksIds.push(link.id);      
      snap.set(linkWithIdState(link.id), link);

    });
    snap.set(linksIdsState,linksIds);
  }
};

export interface DiagramApi {
  addNode(node: NodeState): void;
  reinitState(initializer: DiagramInitializer): void;
}

export const Diagram = forwardRef<DiagramApi, DiagramProps>((props, ref) => {
  const initializeStateWrapper = (snap: MutableSnapshot) =>
    initializeState(snap, props.initialState);

  return (
    <RecoilRoot initializeState={initializeStateWrapper}>
      <InnerDiagram ref={ref} />
    </RecoilRoot>
  );
});

Diagram.displayName = 'Diagram';
