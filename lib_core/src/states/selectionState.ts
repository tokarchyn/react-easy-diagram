import { makeAutoObservable } from 'mobx';
import { LinkState } from 'states/linkState';
import { NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';

export class SelectionState {
  private _selectedItems: ISelectableItem[] = [];

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  get selectedItems(): Readonly<ISelectableItem[]> {
    return this._selectedItems;
  }

  select = (item: ISelectableItem, multipleActivated: boolean) => {
    if (multipleActivated) {
      if (this._selectedItems.includes(item)) {
        this.unselect(item);
      } else {
        item.selected = true;
        this._selectedItems.push(item);
      }
    } else {
      this.clear();
      item.selected = true;
      this._selectedItems.push(item);
    }
  };

  unselect = (item: ISelectableItem) => {
    item.selected = false;
    this._selectedItems = this._selectedItems.filter((i) => i !== item);
  };

  clear = () => {
    this._selectedItems.forEach((i) => (i.selected = false));
    this._selectedItems = [];
  };

  removeSelected = () => {
    this.removeSelectedNodes();
    this.removeSelectedLinks();
  };

  removeSelectedNodes = () => {
    this._selectedItems
      .filter((i) => i instanceof NodeState)
      .forEach((node: NodeState) => {
        this._rootStore.nodesStore.removeNode(node.id);
      });
  };

  removeSelectedLinks = () => {
    this._selectedItems
      .filter((i) => i instanceof LinkState)
      .forEach((link: LinkState) => {
        this._rootStore.linksStore.removeLink(link.id);
      });
  };
}

export interface ISelectableItem {
  selected: boolean;
}
