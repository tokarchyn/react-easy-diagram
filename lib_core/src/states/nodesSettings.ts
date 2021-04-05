import { NodeDefault } from 'components/NodeDefault';
import { makeAutoObservable } from 'mobx';
import { NodeState } from 'states/nodeState';
import {
  VisualComponents,
  componentDefaultType,
  IVisualComponentsObject,
} from 'states/visualComponents';
import { IVisualComponentProps } from 'states/visualComponentState';
import { Point } from 'utils/point';

export class NodesSettings {
  private _visualComponents: VisualComponents<
    NodeState,
    INodeVisualComponentProps
  > = new VisualComponents<NodeState, INodeVisualComponentProps>({
    [componentDefaultType]: NodeDefault,
  });
  private _gridSnap: Point | null;

  constructor() {
    this.setGridSnap();
    makeAutoObservable(this);
  }

  get visualComponents() {
    return this._visualComponents;
  }

  import = (obj?: INodesSettings) => {
    this._visualComponents.import(obj);
    this.setGridSnap(obj?.gridSnap);
  };

  get gridSnap() {
    return this._gridSnap;
  }

  setGridSnap = (gridSnap?: number | Point) => {
    if (!gridSnap) {
      this._gridSnap = null;
    } else if (typeof gridSnap === 'number') {
      this._gridSnap = [gridSnap, gridSnap];
    } else if (Array.isArray(gridSnap) && gridSnap.length === 2) {
      this._gridSnap = gridSnap;
    }
  };
}

export interface INodeVisualComponentProps<TSettings extends {} = {}>
  extends IVisualComponentProps<NodeState, TSettings> {
  draggableRef: React.RefObject<any>;
}

export interface INodesSettings
  extends IVisualComponentsObject<INodeVisualComponentProps> {
  gridSnap?: number | Point;
}
