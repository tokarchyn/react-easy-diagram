import { observer } from 'mobx-react-lite';
import React from 'react';
import { useRootStore } from '../hooks/useRootStore';

export const MiniControlDefault = observer(() => {
  const { diagramApi } = useRootStore();

  return (
    <div className='react_fast_diagram_Minicontrol_Default'
    style={{
      bottom: 2 * 20 + 20
    }}
    >
      <div
        onClick={() => diagramApi.zoomIn()}
        className='react_fast_diagram_Minicontrol_Default_Btn'
      >
        +
      </div>
      <div
        onClick={() => diagramApi.zoomOut()}
        className='react_fast_diagram_Minicontrol_Default_Btn'
      >
        -
      </div>
    </div>
  );
});
