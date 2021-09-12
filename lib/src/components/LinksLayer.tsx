import { observer } from 'mobx-react-lite';
import React from 'react';
import { LinksStore } from 'states/linksStore';
import { LinkWrapper } from 'components/LinkWrapper';
import { useRootStore } from 'hooks/useRootStore';

export const LinksLayer = observer<{linksStore: LinksStore}>(({linksStore}) => {
  const rootStore = useRootStore();
  
  return (
    <svg className="react_fast_diagram_Layer">
      <defs>
        {rootStore.linksSettings.svgMarkers.map((Marker,i) => <Marker key={i}/>)}
      </defs>

      {Array.from(linksStore.links).map(([id, link]) => (
        <LinkWrapper key={link.id} link={link} />
      ))}
      {<LinkWrapper key='__creation__' link={linksStore.linkCreation} />}
    </svg>
  );
});
