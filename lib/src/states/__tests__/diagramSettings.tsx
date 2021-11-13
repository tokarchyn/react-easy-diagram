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
        zoomInterval: [0.5,5],
        callOnLoad: false,
        padding: [100, 100],
      },
      userInteraction: {
        diagramZoom: false,
        diagramPan: false,
        nodeDrag: false,
        portConnection: false,
        nodeSelection: false,
        linkSelection: false,
        multiselectionKey: 'meta'
      },
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

    expect(settings.userInteraction.diagramZoom).toBeFalsy();
    expect(settings.userInteraction.diagramPan).toBeFalsy();
    expect(settings.userInteraction.nodeDrag).toBeFalsy();
    expect(settings.userInteraction.portConnection).toBeFalsy();
    expect(settings.userInteraction.nodeSelection).toBeFalsy();
    expect(settings.userInteraction.linkSelection).toBeFalsy();
    expect(settings.userInteraction.multiselectionKey).toEqual('meta');
  });
});
