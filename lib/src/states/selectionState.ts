import { makeAutoObservable } from 'mobx';
import { LinkState } from 'states/linkState';
import { INodeState, NodeState } from 'states/nodeState';
import { RootStore } from 'states/rootStore';
import { addPoints } from 'utils/point';

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

  get selectedNodes(): Readonly<NodeState[]> {
    return this.selectedItems.filter(
      (i) => i instanceof NodeState
    ) as NodeState[];
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

export interface ISelectableItem {
  selected: boolean;
}
