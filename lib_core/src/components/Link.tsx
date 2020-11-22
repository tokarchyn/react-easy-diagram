import React, { useEffect, useRef } from 'react';
import { DraggableCore } from 'react-draggable';
import { useRecoilCallback, useRecoilState } from 'recoil';
import {
  diagramScaleState,
  LinkTarget,
  linkWithIdState,
  nodeWithIdState,
} from '../DiagramState';

export interface NodeProps {
  id: string;
}

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

export const Link: React.FC<NodeProps> = (props) => {
  const [link, setLink] = useRecoilState(linkWithIdState(props.id));

  const [nodeFrom] = useRecoilState(nodeWithIdState(getNodeIdForLinkTarget(link.from)));
  const [nodeTo] = useRecoilState(nodeWithIdState(getNodeIdForLinkTarget(link.from)));

  console.log(nodeFrom.ref?.current);

  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: 'pink'
      }}
    >
      {nodeFrom.ref?.current?.nodeValue}
      </div>
  );
};

export const LinkMemo = React.memo(Link);
