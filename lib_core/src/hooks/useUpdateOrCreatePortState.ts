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
  const portRef = useNotifyRef<PortState | undefined>(undefined);

  useEffect(() => {
    const node = nodesStore.getNode(port.nodeId);
    if (!node) {
      portRef.current = undefined;
      return;
    }

    const portState = port.id && node.getPort(port.id);
    if (portState) {
      portRef.current = portState;
    } else {
      const result = node.addPort(port);
      if (result.success) {
        portRef.current = result.value;
      } else {
        portRef.current = undefined;
      }
    }
  }, [port?.id, port?.nodeId, nodesStore]);

  usePortPropertyUpdate(portRef.current, port?.label, (portState) =>
    portState.setLabel(port?.label)
  );

  usePortPropertyUpdate(portRef.current, port?.component, (portState) =>
    portState.setComponent(port?.component)
  );

  usePortPropertyUpdate(portRef.current, port?.extra, (portState) =>
    portState.setExtra(port?.extra)
  );

  usePortPropertyUpdate(portRef.current, port?.linkDirection, (portState) =>
    portState.setLinkDirection(port?.linkDirection)
  );

  usePortPropertyUpdate(portRef.current, port?.type, (portState) =>
    portState.setType(port?.type)
  );

  return portRef.current;
}

const usePortPropertyUpdate = (
  port: PortState | undefined,
  valueInProps: any,
  valueSetter: (port: PortState) => void
) => {
  useEffect(() => {
    if (port) {
      valueSetter && valueSetter(port);
    }
  }, [port, valueInProps]);
};
