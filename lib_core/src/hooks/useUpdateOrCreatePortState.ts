import { useEffect } from 'react';
import { useNotifyRef } from 'hooks/useNotifyRef';
import { useRootStore } from 'hooks/useRootStore';
import { IPortStateWithIds, PortState } from 'states/portState';

export function useUpdateOrCreatePortState(
  port: IPortStateWithIds
): PortState | undefined {
  const { nodesStore } = useRootStore();
  const portRef = useNotifyRef<PortState|undefined>(undefined);
  useEffect(() => {
    const node = nodesStore.getNode(port.nodeId);
    if (!node){
      portRef.current = undefined;
      return;
    };

    const portState = node.getPort(port.id);
    if (portState) {
      portState.import(port);
      portRef.current = portState;
    } else {
      const result = node.addPort(port);
      if (result.success) {
        portRef.current = result.value;
      } else {
        portRef.current = undefined;
      }
    }
  }, Object.values(port));

  return portRef.current;
}
