import { useEffect } from 'react';
import { useNotifyRef } from 'hooks/useNotifyRef';
import { useRootStore } from 'hooks/useRootStore';
import { PortState } from 'states/portState';
import { INodePortState } from 'states/nodeState';

interface IPortStateWithNodeId extends INodePortState {
  nodeId: string;
}

export function useUpdateOrCreatePortState(
  port: IPortStateWithNodeId
): PortState | undefined {
  const { nodesStore } = useRootStore();
  const portRef = useNotifyRef<PortState|undefined>(undefined);
  useEffect(() => {
    const node = nodesStore.getNode(port.nodeId);
    if (!node){
      portRef.current = undefined;
      return;
    };

    const portState = port.id && node.getPort(port.id);
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
