import React, { useEffect, useRef } from 'react';
import { DraggableCore } from 'react-draggable';
import { useDiagramSettingsState } from '../hooks/diagramHooks';
import { useLinksSettings, useLinkStateExtended } from '../hooks/linkHooks';
import { useNotifyRef } from '../hooks/useNotifyRef';
import { NodeState } from '../states/nodeState';

export interface LinkWrapperProps {
  id: string;
}

export const LinkWrapper: React.FC<LinkWrapperProps> = (props) => {
  const [linkStateExtended] = useLinkStateExtended(props.id);
  const [linksSettings] = useLinksSettings();
  const linkRef = useNotifyRef(null);

  const linkType = linkStateExtended.link.type;
  const pathConstructor = linksSettings.linkTypeToPathConstructor[linkType];
  const path = pathConstructor(linkStateExtended);
  const LinkComponent = linksSettings.linkTypeToComponent[linkType] ?? linksSettings.linkTypeToComponent.default;

  return <g><LinkComponent ref={linkRef} path={path} /></g>;
};

export const LinkWrapperMemo = React.memo(LinkWrapper);
