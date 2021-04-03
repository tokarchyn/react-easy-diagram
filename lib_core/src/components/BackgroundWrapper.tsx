import { observer } from 'mobx-react-lite';
import React from 'react';
import { useRootStore } from 'hooks/useRootStore';

export const BackgroundWrapper = observer(() => {
  const { diagramSettings, diagramState } = useRootStore();

  return (
    <div className='react_fast_diagram_BackgroundWrapper'>
      <diagramSettings.backgroundComponentState.component
        diagramOffset={diagramState.offset}
        diagramZoom={diagramState.zoom}
        settings={diagramSettings.backgroundComponentState.settings}
      />
    </div>
  );
});
