import { NodeDefault } from 'components/NodeDefault';
import { makeAutoObservable } from 'mobx';
import { NodeState } from 'states/nodeState';
import {
  VisualComponents,
  componentDefaultType,
  IVisualComponentsObject,
} from 'states/visualComponents';
import { IVisualComponentProps } from 'states/visualComponentState';

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
