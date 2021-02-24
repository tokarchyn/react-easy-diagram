import { makeAutoObservable } from 'mobx';
import { componentDefaultType, IVisualComponentProps } from '..';
import { NodeDefault } from '../components/NodeDefault';
import { NodeState } from './nodeState';
import { IVisualComponentsObject, VisualComponents } from './visualComponents';

export class NodesSettings {
  private _visualComponents: VisualComponents<
    NodeState,
    INodeVisualComponentProps
  > = new VisualComponents<NodeState, INodeVisualComponentProps>({
    [componentDefaultType]: NodeDefault,
  });

  constructor() {
    makeAutoObservable(this);
  }

  get visualComponents() {
    return this._visualComponents;
  }

  import = (obj?: INodesSettings) => {
    this._visualComponents.import(obj);
  };
}

export interface INodeVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<NodeState, TSettings> {
  draggableRef: React.RefObject<any>;
}

export interface INodesSettings
  extends IVisualComponentsObject<INodeVisualComponentProps> {}
