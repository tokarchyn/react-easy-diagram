import { useMemo } from 'react';
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

  return useMemo(() => {
    const node = nodesStore.getNode(port.nodeId);
    if (!node) return undefined;

    let portState = port.id ? node.getPort(port.id) : undefined;
    if (portState) {
      portState.update(port);
    } else {
      const result = node.addPort(port);
      if (result.success) {
        portState = result.value;
      }
    }

    return portState;
  }, [
    nodesStore,
    port?.id,
    port?.nodeId,
    port?.component,
    port?.extra,
    port?.isConnectionEnabled,
    port?.label,
    port?.linkDirection,
    port?.type,
  ]);
}
