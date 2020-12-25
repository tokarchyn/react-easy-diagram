import React, { forwardRef, useImperativeHandle } from 'react';
import { useRecoilCallback } from 'recoil';
import { LinksLayerMemorized } from './LinksLayer';
import { NodesLayerMemorized } from './NodesLayer';
import { nodesIdsState, NodeState, nodeWithIdState } from '../states/nodeState';
import { linksIdsState, linkWithIdState } from '../states/linkState';
import { IDiagramInitState, initializeState } from '../states/initializers';
import { useDiagramUserInteraction } from '../hooks/userInteractions/useDiagramUserInteraction';

export interface IDiagramInnerProps {
  diagramStyles?: React.CSSProperties;
}

export const InnerDiagram = forwardRef<DiagramApi, IDiagramInnerProps>(
  (props, ref) => {
    const { transform, userInteractionElemRef } = useDiagramUserInteraction();

    // TODO: Move to states
    const addNode = useRecoilCallback(({ set }) => (newNode: NodeState) => {
      set(nodeWithIdState(newNode.id), newNode);
      set(nodesIdsState, (v) => v.concat([newNode.id]));
    });

    const reinitState = useRecoilCallback(
      ({ snapshot, gotoSnapshot }) => (initializer: IDiagramInitState) => {
        gotoSnapshot(
          snapshot.map((m) => {
            const nodeIds = m.getLoadable(nodesIdsState).contents;
            if (Array.isArray(nodeIds)) {
              nodeIds.forEach((id) => m.reset(nodeWithIdState(id)));
            }

            const linksIds = m.getLoadable(linksIdsState).contents;
            if (Array.isArray(linksIds)) {
              linksIds.forEach((id) => m.reset(linkWithIdState(id)));
            }

            initializeState(m, initializer);
          })
        );
      }
    );

    useImperativeHandle(
      ref,
      (): DiagramApi => ({
        addNode,
        setState: reinitState,
      }),
      []
    );

    return (
      <div
        ref={userInteractionElemRef}
        style={{ touchAction: 'none', ...props.diagramStyles }}
        className='react_fast_diagram_DiagramInner'
      >
        <div
          className='react_fast_diagram_DiagramInner_DraggablePart'
          style={{
            transform: transform,
          }}
        >
          <LinksLayerMemorized />
          <NodesLayerMemorized />
        </div>
      </div>
    );
  }
);

InnerDiagram.displayName = 'InnerDiagram';

export interface DiagramApi {
  addNode(node: NodeState): void;
  setState(newState: IDiagramInitState): void;
}
