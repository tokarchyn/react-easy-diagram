import { Callbacks, SelectionState } from 'index';
import { makeAutoObservable } from 'mobx';
import { NodeState } from 'states/nodeState';
import { addPoints, Point } from 'utils/point';

/**
 * Encapsulate logic for dragging mechanism. Right now only nodes are supposed to be dragged.
 */
export class DragState {
  private _nodesBeingDragged = new Set<NodeState>();

  // In case the snap to grid option is enabled in settings
  private _remaindersFromDrags = new Map<string, Point | undefined>();

  private _selectionState: SelectionState;
  private _callbacks: Callbacks;

  constructor(selectionState: SelectionState, callbacks: Callbacks) {
    makeAutoObservable(this);
    this._selectionState = selectionState;
    this._callbacks = callbacks;
  }

  get isActive() {
    return this._nodesBeingDragged.size !== 0;
  }

  startDragging = (nodeToDrag: NodeState) : boolean => {
    if (!nodeToDrag.isDragEnabled || this.isActive) return false;

    if (nodeToDrag.selected) {
      this._selectionState.unselectItems(
        this._selectionState.selectedItems.filter(
          (i) => !(i instanceof NodeState) || !i.isDragEnabled
        )
      );
    } else {
      this._selectionState.unselectAll();
      this._selectionState.select(nodeToDrag);
    }

    this._selectionState.selectedNodes.forEach((n) => {
      n.isDragActive = true;
      this._nodesBeingDragged.add(n);
    });

    this._callbacks.dragStateChanged(this._selectionState.selectedNodes, true);
    return true;
  };

  /**
   * Drag by a vector
   * @param vector vector to drag by which takes into account diagram zoom
   */
  dragBy = (vector: Point) => {
    this._nodesBeingDragged.forEach((n) => {
      const newPosition = addPoints(
        n.position,
        vector,
        this._remaindersFromDrags.get(n.id)
      );
      const newRemainder = n.setPosition(newPosition);
      this._remaindersFromDrags.set(n.id, newRemainder);
    });
  };

  stopDragging = () => {
    this._nodesBeingDragged.forEach((n) => (n.isDragActive = false));
    this._nodesBeingDragged.clear();
    this._remaindersFromDrags.clear();
    this._callbacks.dragStateChanged(this._selectionState.selectedNodes, false);
  };
}
