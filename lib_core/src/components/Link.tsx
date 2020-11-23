import React, { useEffect, useRef } from 'react';
import { DraggableCore } from 'react-draggable';
import { useRecoilCallback, useRecoilState } from 'recoil';
import {
  diagramScaleState,
  LinkTarget,
  linkWithIdState,
  NodeState,
  nodeWithIdState,
} from '../DiagramState';

export interface NodeProps {
  id: string;
}

function getConnectionPoint(node: NodeState) {
  const htmlElem = node.ref?.current;
  if (htmlElem) {
    return {
      x: node.position.x + (htmlElem.clientWidth ? htmlElem.clientWidth / 2 : 0),
      y: node.position.y + (htmlElem.clientHeight ? htmlElem.clientHeight / 2 : 0)
    }
  }
  else {
    return node.position;
  }
}

export const Link: React.FC<NodeProps> = (props) => {
  const [link, setLink] = useRecoilState(linkWithIdState(props.id));

  const [nodeFrom] = useRecoilState(nodeWithIdState(getNodeIdForLinkTarget(link.from)));
  const [nodeTo] = useRecoilState(nodeWithIdState(getNodeIdForLinkTarget(link.to)));

  const fromPoint = getConnectionPoint(nodeFrom);
  const toPoint = getConnectionPoint(nodeTo);
  const points = `M ${fromPoint.x} ${fromPoint.y}, ${toPoint.x} ${toPoint.y}`

  return (
    <g>
      <path d={points} stroke="LightBlue" strokeWidth="3" fill="none" />
    </g>
  );
};

const getNodeIdForLinkTarget = (target?: LinkTarget) : string => {
  if (!target) {
    return '';
  }
  if ('nodeId' in target) {
    return target.nodeId;
  }
  else {
    return '';
  }
}

export const LinkMemo = React.memo(Link);

// <g>
//       {/* Main line */}
//       <path d={points} stroke={linkColor} strokeWidth="3" fill="none" />
//       {/* Thick line to make selection easier */}
//       <path
//         d={points}
//         stroke={linkColor}
//         strokeWidth="20"
//         fill="none"
//         strokeLinecap="round"
//         strokeOpacity={isHovered || isSelected ? 0.1 : 0}
//         onMouseEnter={() => onLinkMouseEnter({ config, linkId: link.id })}
//         onMouseLeave={() => onLinkMouseLeave({ config, linkId: link.id })}
//         onClick={(e) => {
//           onLinkClick({ config, linkId: link.id })
//           e.stopPropagation()
//         }}
//       />
//     </g>