import {
  createInputHorizontalNode,
  createInputOutputHorizontalNode,
  createInputOutputVerticalNode,
  createInputVerticalNode,
  createNode,
  createOutputHorizontalNode,
  createOutputVerticalNode,
  createStarNode,
} from 'components/node/NodeDefault';
import { makeAutoObservable } from 'mobx';
import { NodeState } from 'states/nodeState';
import {
  VisualComponents,
  COMPONENT_DEFAULT_TYPE,
  IVisualComponentsObject,
} from 'states/visualComponents';
import { IVisualComponentProps } from 'states/visualComponentState';
import { Point } from 'utils/point';

export class NodesSettings {
  private _visualComponents: VisualComponents<
    NodeState,
    INodeVisualComponentProps
  > = new VisualComponents<NodeState, INodeVisualComponentProps>({
    [COMPONENT_DEFAULT_TYPE]: createNode({ ports: [] }),
    input_output_horizontal: createInputOutputHorizontalNode(),
    input_output_vertical: createInputOutputVerticalNode(),
    input_vertical: createInputVerticalNode(),
    input_horizontal: createInputHorizontalNode(),
    output_vertical: createOutputVerticalNode(),
    output_horizontal: createOutputHorizontalNode(),
    star: createStarNode(),
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

export interface INodeVisualComponentProps<TSettings = any>
  extends IVisualComponentProps<NodeState, TSettings> {
}

export interface INodesSettings
  extends IVisualComponentsObject<INodeVisualComponentProps> {
  gridSnap?: number | Point;
}
