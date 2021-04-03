import { observer } from 'mobx-react-lite';
import React from 'react';
import { useLinkUserInteraction } from 'hooks/userInteractions/useLinkUserInteraction';
import { LinkCreationState } from 'states/linkCreationState';
import { LinkState } from 'states/linkState';

export const LinkWrapper = observer<{ link: LinkState | LinkCreationState }>(
  ({ link }) => {
    const { bind } = useLinkUserInteraction(link);

    return (
      <g>
        <link.componentDefinition.component
          bind={bind}
          entity={link}
          settings={link.componentDefinition.settings}
        />
      </g>
    );
  }
);
