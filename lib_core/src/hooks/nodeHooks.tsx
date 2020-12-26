import { useRecoilState } from 'recoil';
import { INodeProps, nodesSettingsState } from '../states/nodesSettingsState';
import { nodeWithIdState } from '../states/nodeState';
import React from 'react';

export const useNodeState = (id: string) => useRecoilState(nodeWithIdState(id));

export const useNodesSettings = () => useRecoilState(nodesSettingsState);

export interface INodePropsWithRef<TSettings = {}>
  extends INodeProps<TSettings> {
  ref: React.MutableRefObject<HTMLElement | null>;
}
