import { observer } from 'mobx-react-lite';
import React from 'react';
import { LinksStore } from '../states/linksStore';
import { LinkWrapper } from './LinkWrapper';

export const LinksLayer = observer<{linksStore: LinksStore}>(({linksStore}) => {
  return (
    <svg>
      {Object.values(linksStore.links).map((link) => (
        <LinkWrapper key={link.id} link={link} />
      ))}
    </svg>
  );
});
