import { makeAutoObservable } from 'mobx';
import { componentDefaultType, IVisualComponentProps } from '..';
import { NodeDefault } from '../components/NodeDefault';
import { NodeState } from './nodeState';
import {
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';

export class NodesSettings {
  visualComponents: VisualComponents<
    NodeState,
    INodeVisualComponentProps
  > = new VisualComponents<NodeState, INodeVisualComponentProps>({
    [componentDefaultType]: NodeDefault,
  });

  constructor() {
    makeAutoObservable(this);
  }

  fromJson = (obj?: INodesSettings) => {
    this.visualComponents.fromJson(obj);
  };
}

export interface INodeVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<NodeState, TSettings> {
  draggableRef: React.RefObject<any>;
}

export interface INodesSettings
  extends IVisualComponentsObject<INodeVisualComponentProps> {}
