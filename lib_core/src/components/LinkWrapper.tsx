import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useNotifyRef } from '../hooks/useNotifyRef';
import { useRootStore } from '../hooks/useRootStore';
import { LinkState } from '../states/linkState';
import { RootStoreContext } from './Diagram';

export interface ILinkWrapperProps {
  link: LinkState;
}

export const LinkWrapper = observer<ILinkWrapperProps>(({ link }) => {
  const {linksSettings} = useRootStore();
  const path = linksSettings.pathConstructor(link);
  const draggableRef = useNotifyRef(null);
  const Component = link.componentDefinition.component;
  
  return (
    <g>
      <Component
        draggableRef={draggableRef}
        path={path}
        entity={link}
        settings={link.componentDefinition.settings}
      />
    </g>
  );
});
