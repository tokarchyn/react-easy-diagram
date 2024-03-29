import { observer } from 'mobx-react-lite';
import React from 'react';
import { LinksStore } from 'states/linksStore';
import { LinkWrapper } from 'components/link/LinkWrapper';
import { useRootStore } from 'hooks/useRootStore';

export const LinksLayer = observer<{
  transform: string;
}>(({ transform }) => {
  return (
    <svg className='react_fast_diagram_Layer'>
      <MarkerDefs />
      <g style={{ transform: transform }}>
        <LinksList />
      </g>
    </svg>
  );
});

const LinksList = observer(() => {
  const { linksStore } = useRootStore();

  return (
    <>
      {Array.from(linksStore.links).map(([id, link]) => (
        <LinkWrapper key={link.id} link={link} />
      ))}
      {<LinkWrapper key='__creation__' link={linksStore.linkCreation} />}
    </>
  );
});

const MarkerDefs = observer(() => {
  const { linksSettings } = useRootStore();

  return (
    <defs>
      {linksSettings.svgMarkers.map((Marker, i) => (
        <Marker key={i} />
      ))}
    </defs>
  );
});
