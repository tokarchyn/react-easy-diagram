import React from 'react';
import {
  useLinksSettings,
  useLinkStateExtended,
} from '../hooks/linkHooks';
import { useNotifyRef } from '../hooks/useNotifyRef';

export interface LinkWrapperProps {
  id: string;
}

export const LinkWrapper: React.FC<LinkWrapperProps> = ({ id }) => {
  const [linkStateExtended] = useLinkStateExtended(id);
  const [linksSettings] = useLinksSettings();
  const linkRef = useNotifyRef(null);

  const linkType = linkStateExtended.link.type;
  const path = linksSettings.pathConstructor(linkStateExtended);
  const linkComponent =
    linksSettings.linkComponents[linkType] ??
    linksSettings.linkComponents.default;
  const Link =
    'component' in linkComponent ? linkComponent.component : linkComponent;

  return (
    <g>
      <Link ref={linkRef} path={path} />
    </g>
  );
};

export const LinkWrapperMemo = React.memo(LinkWrapper);
