import { DiagramSettings, IDiagramSettings } from 'states/diagramSettings';
import { UserInteractionSettings } from 'states/userInteractionSettings';
import React from 'react';

describe('Diagram settings', () => {
  test('Default settings', () => {
    const settings = new DiagramSettings();

    expect(settings.backgroundComponentState.component).toBeTruthy();
    expect(settings.miniControlComponentState.component).toBeTruthy();
    expect(settings.userInteraction).toBeInstanceOf(UserInteractionSettings);
  });
  test('Import', () => {
    const settings = new DiagramSettings();
    const newSettings: IDiagramSettings = {
      backgroundComponent: () => <div></div>,
      miniControlComponent: () => <div></div>,
      zoomInterval: [10, 20],
      zoomToFitSettings: {
        padding: [100, 100],
      },
      userInteraction: false,
    };

    settings.import(newSettings);

    expect(settings.backgroundComponentState.component).toBe(
      newSettings.backgroundComponent
    );
    expect(settings.miniControlComponentState.component).toBe(
      newSettings.miniControlComponent
    );
    expect(settings.zoomInterval).toEqual(newSettings.zoomInterval);
    expect(settings.zoomToFitSettings).toEqual(newSettings.zoomToFitSettings);

    expect(settings.userInteraction.diagramZoom).toEqual(
      newSettings.userInteraction
    );
    expect(settings.userInteraction.diagramPan).toEqual(
      newSettings.userInteraction
    );
    expect(settings.userInteraction.nodeDrag).toEqual(
      newSettings.userInteraction
    );
    expect(settings.userInteraction.portConnection).toEqual(
      newSettings.userInteraction
    );
    expect(settings.userInteraction.nodeSelection).toEqual(
      newSettings.userInteraction
    );
    expect(settings.userInteraction.linkSelection).toEqual(
      newSettings.userInteraction
    );
  });
});
