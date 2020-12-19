import { useRecoilState, useRecoilValue } from 'recoil';
import {
  INodeProps,
  nodeComponentDefinitionState,
  nodesSettingsState,
} from '../states/nodesSettingsState';
import { defaultNodeType, nodeWithIdState } from '../states/nodeState';
import React, { forwardRef } from 'react';

export const useNodeState = (id: string) => useRecoilState(nodeWithIdState(id));

export const useNodesSettings = () => useRecoilState(nodesSettingsState);

export interface INodePropsWithRef<TSettings = {}>
  extends INodeProps<TSettings> {
  ref: React.MutableRefObject<HTMLElement | null>;
}

// export const useNodeComponent = (
//   type?: string
// ): ((propsWithRef: INodePropsWithRef) => JSX.Element) => {
//   const nodeComponentDefinition = useRecoilValue(
//     nodeComponentDefinitionState(type ?? defaultNodeType)
//   );

//   if ('component' in nodeComponentDefinition) {
//     const NodeComponent = nodeComponentDefinition.component;
//     return {nodeComponentDefinition.component
//   } else {
//     const NodeComponent = nodeComponentDefinition;
//     return (props) => <NodeComponent {...props} />;
//   }
// };
