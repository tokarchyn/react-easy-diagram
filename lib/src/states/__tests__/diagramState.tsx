import { DiagramState, IDiagramState } from 'states/diagramState';
import { RootStore } from 'states/rootStore';
import { BoundingBox } from 'utils/common';
import { Point } from 'utils/point';
import { createDummyHTMLElement } from 'utils/__tests__/testUtils';

describe('Diagram state', () => {
  let rootStore: RootStore;
  let diagramState: DiagramState;

  beforeEach(() => {
    rootStore = new RootStore();
    diagramState = rootStore.diagramState;
  });

  test('Import/export', () => {
    const state: IDiagramState = {
      offset: [13, 13],
      zoom: 2.5,
    };

    diagramState.import(state);
    const exported = diagramState.export();

    expect(diagramState.offset).toEqual(state.offset);
    expect(exported.offset).toEqual(state.offset);
    expect(diagramState.zoom).toEqual(state.zoom);
    expect(exported.zoom).toEqual(state.zoom);
  });

  describe('Zoom', () => {
    beforeEach(() => {
      diagramState.ref.current = createDummyHTMLElement({
        size: [200, 200],
        position: [0, 0],
        attributes: {
          'data-zoom': '1',
        },
      });
      rootStore.diagramSettings.setZoomInterval([0.5, 3]);
    });

    test('Zoom value larger than max allowed should be clamped', () => {
      diagramState.setZoom(rootStore.diagramSettings.zoomInterval[1] + 10);
      expect(diagramState.zoom).toEqual(
        rootStore.diagramSettings.zoomInterval[1]
      );
    });

    test('Zoom value smaller than min allowed should be clamped', () => {
      diagramState.setZoom(rootStore.diagramSettings.zoomInterval[0] - 0.5);
      expect(diagramState.zoom).toEqual(
        rootStore.diagramSettings.zoomInterval[0]
      );
    });

    test('Zoom into center', () => {
      const zoomMultiplicator = 2;

      diagramState.zoomIntoCenter(zoomMultiplicator);

      expect(diagramState.zoom).toEqual(zoomMultiplicator);
      expect(diagramState.offset).toEqual([-100, -100]);
    });

    test('Zoom out of center', () => {
      const zoomMultiplicator = 0.5;

      diagramState.zoomIntoCenter(zoomMultiplicator);

      expect(diagramState.zoom).toEqual(zoomMultiplicator);
      expect(diagramState.offset).toEqual([50, 50]);
    });

    test('Zoom into point', () => {
      const zoomMultiplicator = 2;
      const pointToZoomInto: Point = [50, 50];

      diagramState.zoomInto(pointToZoomInto, zoomMultiplicator);

      expect(diagramState.zoom).toEqual(zoomMultiplicator);
      expect(diagramState.offset).toEqual([-50, -50]);
    });

    test('Zoom to fit nodes', () => {
      rootStore.diagramSettings.zoomToFitSettings.padding = [5, 5];
      rootStore.diagramSettings.zoomToFitSettings.zoomInterval = [1, 5];
      const boundingBox: BoundingBox = {
        topLeftCorner: [100, 100],
        bottomRightCorner: [190, 190],
        size: [90, 90],
      };
      rootStore.nodesStore.getNodesBoundingBox = () => boundingBox;

      diagramState.zoomToFit();

      expect(diagramState.zoom).toEqual(2);
      expect(diagramState.offset).toEqual([-190, -190]);
    });

    test('Zoom to fit nodes taking into account zoom to fit interval', () => {
      rootStore.diagramSettings.zoomToFitSettings.padding = [5, 5];
      rootStore.diagramSettings.zoomToFitSettings.zoomInterval = [1, 1.2];
      const boundingBox: BoundingBox = {
        topLeftCorner: [100, 100],
        bottomRightCorner: [190, 190],
        size: [90, 90],
      };
      rootStore.nodesStore.getNodesBoundingBox = () => boundingBox;

      diagramState.zoomToFit();

      expect(diagramState.zoom).toEqual(
        rootStore.diagramSettings.zoomToFitSettings.zoomInterval[1]
      );
      expect(diagramState.offset).toEqual([-74, -74]);
    });
  });
});
