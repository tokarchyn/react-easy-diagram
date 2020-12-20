import { atom, selector, selectorFamily, SetterOrUpdater } from 'recoil';
import { defaultNodeType, NodeState } from '..';
import { NodeDefault } from '../components/NodeDefault';
import { Dictionary, Optional } from '../types/common';
import { libraryPrefix } from './common';

export const nodesSettingsState = atom<INodesSettingsInternal>({
  key: `${libraryPrefix}_NodesSettings`,
  default: {
    defaultNodeType: defaultNodeType,
    nodeComponents: {
      default: NodeDefault,
    },
  },
});

export const nodeComponentDefinitionState = selectorFamily<
  INodeComponentDefinition,
  string | undefined
>({
  key: `${libraryPrefix}_NodeComponentDefinition`,
  get: (componentType) => ({ get }) => {
    const settings = get(nodesSettingsState);
    componentType = componentType ?? defaultNodeType;

    const componentDefinition =
      componentType in settings.nodeComponents
        ? settings.nodeComponents[componentType]
        : settings.nodeComponents[defaultNodeType];

    return 'component' in componentDefinition
      ? componentDefinition
      : {
          component: componentDefinition,
        };
  },
});

export interface INodesSettingsInternal {
  defaultNodeType: string;
  nodeComponents: Dictionary<NodeComponent | INodeComponentDefinition>;
}

export interface INodesSettings extends Partial<INodesSettingsInternal> {}

export type NodeComponent<TSettings = {}> = React.ForwardRefExoticComponent<
  INodeProps<TSettings> & React.RefAttributes<any>
>;

export interface INodeComponentDefinition<TSettings = {}> {
  component: NodeComponent<TSettings>;
  settings?: TSettings;
}

export interface INodeProps<TSettings = {}> {
  node: NodeState;
  setNode: SetterOrUpdater<NodeState>;
  settings?: TSettings;
}
