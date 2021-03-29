import { useMemo } from 'react';
import { useRootStore } from '.';
import { IPortStateWithIds, PortState } from '..';

export function useUpdateOrCreatePortState(
  port: IPortStateWithIds
): PortState | undefined {
  const { nodesStore } = useRootStore();
  return useMemo<PortState | undefined>(() => {
    const node = nodesStore.getNode(port.nodeId);
    if (!node) return undefined;

    const portState = node.getPort(port.id);
    if (portState) {
      portState.import(port);
      return portState;
    } else {
      const result = node.addPort(port);
      if (result.success) {
        return result.value;
      } else {
        return undefined;
      }
    }
  }, Object.values(port));
}
