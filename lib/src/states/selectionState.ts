import { makeAutoObservable } from 'mobx';
import { LinkState } from 'states/linkState';
import { NodeState } from 'states/nodeState';

export class SelectionState {
  private _selectedItems = new Set<SelectableItem>();

  constructor() {
    makeAutoObservable(this);
  }

  get selectedItems(): SelectableItem[] {
    return Array.from(this._selectedItems);
  }

  get selectedNodes(): NodeState[] {
    return this.selectedItems.filter(
      (i) => i instanceof NodeState
    ) as NodeState[];
  }

  select = (item: SelectableItem, unselectOther: boolean = false): boolean => {
    if (unselectOther) this.unselectAll();
    
    if (!this._selectedItems.has(item)) {
      item.selected = true;
      this._selectedItems.add(item);
      return true;
    } else return false;
  };

  switch = (item: SelectableItem, unselectOtherOnSelection: boolean = false) => {
    if (item.selected) {
      this.unselect(item);
    } else {
      this.select(item, unselectOtherOnSelection);
    }
  };

  unselect = (item: SelectableItem): boolean => {
    if (this._selectedItems.has(item)) {
      item.selected = false;
      this._selectedItems.delete(item);
      return true;
    } else return false;
  };

  unselectAll = () => {
    this._selectedItems.forEach((i) => (i.selected = false));
    this._selectedItems.clear();
  };

  unselectItems = (itemsToClear: Readonly<SelectableItem[]>) => {
    itemsToClear.forEach((i) => this.unselect(i));
  };
}

export type SelectableItem = NodeState | LinkState;
