import { observer } from 'mobx-react-lite';
import React from 'react';
import { useRootStore } from 'hooks/useRootStore';

export const MiniControlWrapper = observer(() => {
  const rootStore = useRootStore();
  const minicontrolComponentState = rootStore.diagramSettings.miniControlComponentState;
  return (
    minicontrolComponentState.component && (
      <minicontrolComponentState.component
        rootStore={rootStore}
        settings={minicontrolComponentState.settings}
      />
    )
  );
});
