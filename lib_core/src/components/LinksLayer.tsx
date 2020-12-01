import React from 'react';
import { useRecoilState } from 'recoil';
import { linksIdsState } from '../states/linkState';
import { LinkWrapperMemo } from './LinkWrapper';

const LinksLayer: React.FC = () => {
  const [links] = useRecoilState(linksIdsState);

  return (
    <svg>
      {links.map((id) => (
        <LinkWrapperMemo key={id} id={id} />
      ))}
    </svg>
  );
};

export const LinksLayerMemorized = React.memo(LinksLayer);
