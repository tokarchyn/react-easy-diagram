import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNotifyRef } from '../hooks/useNotifyRef';
import { LinkCreationState } from '../states';
import { LinkState } from '../states/linkState';

export const LinkWrapper = observer<{ link: LinkState | LinkCreationState }>(({ link }) => {
  const draggableRef = useNotifyRef(null);

  return (
    <g>
      <link.componentDefinition.component
        draggableRef={draggableRef}
        entity={link}
        settings={link.componentDefinition.settings}
      />
    </g>
  );
});
