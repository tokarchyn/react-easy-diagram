import { makeAutoObservable } from 'mobx';
import { LinkState } from 'states/linkState';
import { INodeState, NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { addPoints } from 'utils/point';

export class SelectionState {
  private _selectedItems: SelectableItem[] = [];

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  get selectedItems(): Readonly<SelectableItem[]> {
    return this._selectedItems;
  }

  get selectedNodes(): NodeState[] {
    return this.selectedItems.filter(
      (i) => i instanceof NodeState
    ) as NodeState[];
  }

  select = (item: SelectableItem, unselectOther: boolean = false): boolean => {
    if (unselectOther) this.unselectAll();

    if (!item.selected) {
      item.selected = true;
      this._selectedItems = [...this._selectedItems, item];

      return true;
    } else return false;
  };

  switch = (item: SelectableItem): boolean => {
    if (item.selected) {
      return this.unselect(item);
    } else {
      return this.select(item);
    }
  };

  unselect = (item: SelectableItem): boolean => {
    if (item.selected) {
      item.selected = false;
      this._selectedItems = this._selectedItems.filter((i) => i !== item);
      return true;
    } else return false;
  };

  unselectAll = () => {
    this._selectedItems.forEach((i) => (i.selected = false));
    this._selectedItems = [];
  };

  unselectItems = (itemsToClear: Readonly<SelectableItem[]>) => {
    itemsToClear.forEach((i) => this.unselect(i));
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

  cloneSelectedNodes = () => {
    this._selectedItems
      .filter((i) => i instanceof NodeState)
      .forEach((node: NodeState) => {
        const nodeObj = node.export() as INodeState;
        nodeObj.id = undefined;
        nodeObj.label = [nodeObj.label, 'copy'].join(' ');
        nodeObj.position = addPoints(nodeObj.position, [50, 50]);
        this._rootStore.nodesStore.addNode(nodeObj, false);
      });
  };
}

export type SelectableItem = NodeState | LinkState;
