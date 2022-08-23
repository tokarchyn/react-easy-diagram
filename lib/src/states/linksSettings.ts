import { makeAutoObservable } from 'mobx';
import { createLinkDefault, LinkDefault } from 'components/link/LinkDefault';
import { createCurvedLinkPathConstructor } from 'linkConstructors/curved';
import { Point } from 'utils/point';
import { DirectionWithDiagonals } from 'utils/position';
import {
  LinkCreationState,
  LINK_CREATION_COMPONENT_TYPE,
} from 'states/linkCreationState';
import { LinkState } from 'states/linkState';
import {
  VisualComponents,
  COMPONENT_DEFAULT_TYPE,
  IVisualComponentsObject,
} from 'states/visualComponents';
import { IVisualComponentProps } from 'states/visualComponentState';
import { createArrowMarker, createCircleMarker } from 'components/link/Markers';
import { ReactDOMAttributes } from '@use-gesture/react';

export class LinksSettings {
  private _pathConstructor: ILinkPathConstructor;
  private _visualComponents = new VisualComponents<
    any,
    ILinkVisualComponentProps
  >({
    [COMPONENT_DEFAULT_TYPE]: createLinkDefault(),
    [LINK_CREATION_COMPONENT_TYPE]: createLinkDefault({
      mainLine: {
        style: {
          base: { markerEnd: 'url(#default_circle_marker_hovered)' },
        },
      },
    }),
  });
  private _preferLinksDirection: 'horizontal' | 'vertical' | 'both';

  private _defaultSvgMarkers: React.FunctionComponent[] = [
    createCircleMarker({
      id: 'default_circle_marker',
      style: {
        fill: '#c2c2c2',
      },
    }),
    createCircleMarker({
      id: 'default_circle_marker_selected',
      style: {
        fill: '#6eb7ff',
      },
    }),
    createCircleMarker({
      id: 'default_circle_marker_hovered',
      style: {
        fill: '#a1d0ff',
      },
    }),
    createArrowMarker({
      id: 'default_arrow_marker',
      style: {
        fill: '#c2c2c2',
      },
    }),
    createArrowMarker({
      id: 'default_arrow_marker_selected',
      style: {
        fill: '#6eb7ff',
      },
    }),
    createArrowMarker({
      id: 'default_arrow_marker_hovered',
      style: {
        fill: '#a1d0ff',
      },
    }),
  ];
  private _svgMarkers: React.FunctionComponent[] = [];

  constructor() {
    this.import();
    makeAutoObservable(this);
  }

  import = (obj?: ILinksSettings) => {
    this._visualComponents.import(obj);
    this.setPathConstructor(obj?.pathConstructor);
    this._preferLinksDirection = obj?.preferLinksDirection ?? 'horizontal';
    this._svgMarkers = obj?.svgMarkers
      ? [...obj.svgMarkers, ...this._defaultSvgMarkers]
      : this._defaultSvgMarkers;
  };

  get pathConstructor() {
    return this._pathConstructor;
  }

  setPathConstructor = (value: ILinkPathConstructor | null | undefined) => {
    this._pathConstructor = value ?? defaultPathConstructor;
  };

  get visualComponents() {
    return this._visualComponents;
  }

  get preferLinksDirection() {
    return this._preferLinksDirection;
  }

  get svgMarkers(): ReadonlyArray<React.FunctionComponent> {
    return this._svgMarkers;
  }
}

const defaultPathConstructor = createCurvedLinkPathConstructor();

export interface ILinkVisualComponentProps<TSettings = any>
  extends IVisualComponentProps<LinkState | LinkCreationState, TSettings> {
  bind: (...args: any[]) => ReactDOMAttributes;
}

export interface ILinksSettings
  extends IVisualComponentsObject<any, ILinkVisualComponentProps> {
  pathConstructor?: ILinkPathConstructor;
  preferLinksDirection?: LinksSettings['preferLinksDirection'];
  svgMarkers?: React.FunctionComponent[];
}

export interface ILinkPathConstructorEndpointInfo {
  point: Point;
  portType?: string;
  direction?: DirectionWithDiagonals;
}

export type ILinkPathConstructor = (
  source: ILinkPathConstructorEndpointInfo,
  target: ILinkPathConstructorEndpointInfo
) => string;
