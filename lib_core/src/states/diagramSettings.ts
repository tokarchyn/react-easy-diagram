import { IComponentDefinition, VisualComponent } from './visualComponents';
import { makeAutoObservable } from 'mobx';
import { Point } from '../types/common';
import { createDefaultBackground } from '../components/BackgroundDefault';

export class DiagramSettings {
  backgroundComponent: IComponentDefinition<IBackgroundComponentProps> = createDefaultBackground();

  constructor() {
    makeAutoObservable(this);
  }

  fromJson(obj: IDiagramSettings) {
    if (obj.backgroundComponent) {
      this.backgroundComponent =
        'component' in obj.backgroundComponent
          ? obj.backgroundComponent
          : {
              component: obj.backgroundComponent,
            };
    } else {
      this.backgroundComponent = createDefaultBackground();
    }
  }
}

export interface IDiagramSettings {
  backgroundComponent:
    | IComponentDefinition<IBackgroundComponentProps>
    | VisualComponent<IBackgroundComponentProps>;
}

export interface IBackgroundComponentProps<TSettings = {}> {
  diagramOffset: Point;
  digramZoom: number;
  settings?: TSettings;
}
