import React from 'react';
import { useRecoilState } from 'recoil';
import { linksIdsState } from '../DiagramState';
import { LinkMemo } from './Link';

const LinksLayer: React.FC = () => {
  const [links] = useRecoilState(linksIdsState);

  return (
    <svg>
      {links.map((id) => (
        <LinkMemo key={id} id={id} />
      ))}
    </svg>
  );
};

export const LinksLayerMemorized = React.memo(LinksLayer);