import { observer } from 'mobx-react-lite';
import React from 'react';
import { useRootStore } from '../hooks/useRootStore';

export const MiniControlWrapper = observer(() => {
  const { diagramSettings, diagramApi } = useRootStore();

  return (
    diagramSettings.miniControlComponentState.component && (
      <diagramSettings.miniControlComponentState.component
        diagramApi={diagramApi}
        settings={diagramSettings.miniControlComponentState.settings}
      />
    )
  );
});
