import { makeAutoObservable } from 'mobx';
import { NodeDefault } from '../components/NodeDefault';
import { NodeState } from './nodeState';
import {
  IVisualComponentProps,
  IVisualComponentsObject,
  VisualComponents,
} from './visualComponents';

export class NodesSettings {
  visualComponents: VisualComponents<
    NodeState,
    INodeVisualComponentProps
  > = new VisualComponents<NodeState, INodeVisualComponentProps>(NodeDefault);

  constructor() {
    makeAutoObservable(this);
  }

  fromJson = (obj: INodesSettingsObject) => {
    this.visualComponents.fromJson(obj);
  }
}

export interface INodeVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<NodeState, TSettings> {
  draggableRef: React.RefObject<any>;
}

export interface INodesSettingsObject
  extends IVisualComponentsObject<INodeVisualComponentProps> {}
