import React from 'react';
import { useRecoilValue } from 'recoil';
import { useLinkStateExtended } from '../hooks/linkHooks';
import { useNotifyRef } from '../hooks/useNotifyRef';
import {
  linkComponentDefinitionState,
  linkPathConstructorState,
} from '../states/linksSettingsState';

export interface LinkWrapperProps {
  id: string;
}

export const LinkWrapper: React.FC<LinkWrapperProps> = ({ id }) => {
  const [linkStateExtended] = useLinkStateExtended(id);

  const pathConstructor = useRecoilValue(linkPathConstructorState);
  const path = pathConstructor(linkStateExtended);

  const linkComponentDefinition = useRecoilValue(
    linkComponentDefinitionState(linkStateExtended.link.type)
  );
  const linkRef = useNotifyRef(null);

  return (
    <g>
      <linkComponentDefinition.component
        ref={linkRef}
        path={path}
        settings={linkComponentDefinition.settings}
      />
    </g>
  );
};

export const LinkWrapperMemo = React.memo(LinkWrapper);
