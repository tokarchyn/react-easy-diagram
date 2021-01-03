import React, { useEffect, useRef } from 'react';
import { useNodeUserInteraction } from '../hooks/userInteractions/useNodeUserInteraction';
import { NodeState } from '../states/nodeState';
import { observer, useObserver } from 'mobx-react-lite';
import { trace } from "mobx";
export interface INodeWrapperProps {
  node: NodeState;
}

export const NodeWrapper = observer<INodeWrapperProps>(({ node }) => {
  trace(true);
  useEffect(() => {
    const d = setInterval(() => node.setOffset([node.offset[0] + 10, node.offset[1]]), 2000)
    return () => clearInterval(d);
  }, [node])

  return (
    <div
      id={node.id}
      className='react_fast_diagram_NodeWrapper'
      style={{
        transform: node.transformString,
      }}
    >
      {node.id} + {node.offset[0]}
    </div>
  );
});

// export const NodeWrapper = observer<INodeWrapperProps>(({ node }) => {
//   const nodeRef = useNodeRef(node);
//   const { userInteractionElemRef } = useNodeUserInteraction(node);
//   console.log('Node wrapper offset: ', JSON.stringify(node.x));
//   return (
//     <div
//       id={node.id}
//       className='react_fast_diagram_NodeWrapper'
//       style={{
//         transform: node.transformString,
//       }}
//       ref={nodeRef}
//     >
//       <node.componentDefinition.component
//         draggableRef={userInteractionElemRef}
//         entity={node}
//         settings={node.componentDefinition.settings}
//       />
//     </div>
//   );
// });

function useNodeRef(
  node: NodeState
): React.MutableRefObject<HTMLDivElement | null> {
  const nodeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    node.ref = nodeRef;
  }, [nodeRef, node.ref]);

  return nodeRef;
}
