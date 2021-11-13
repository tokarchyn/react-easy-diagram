import { makeAutoObservable } from 'mobx';
import { RootStore } from 'states/rootStore';

export class CommandExecutor {
  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  execute = (command: ICommand) => {
    command.execute(this._rootStore);
  };
}

export interface ICommand {
  execute(rootStore: RootStore): any;
}
