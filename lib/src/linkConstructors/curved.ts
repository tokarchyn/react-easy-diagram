import {
  ILinkPathConstructor,
  ILinkPathConstructorEndpointInfo,
} from '../states/linksSettings';
import { DirectionWithDiagonals } from 'utils/position';
import { distanceBetweenPoints, roundPoint } from 'utils/point';
import { Point } from 'utils/point';
import { commandC, createVector, getRadian } from 'linkConstructors/utils';

function curvedLinkPathConstructor(
  source: ILinkPathConstructorEndpointInfo,
  target: ILinkPathConstructorEndpointInfo,
  settings: ICurvedLinkPathConstructorSettings
): string {
  if (!source || !target) return '';

  const directionFactor = settings.tweakDirectionFactorBasedOnDistance(
    distanceBetweenPoints(source.point, target.point),
    settings.directionFactor
  );

  return commandC(
    source.point,
    createVector(source.point, directionFactor, getRadian(source.direction)),
    createVector(target.point, directionFactor, getRadian(target.direction)),
    target.point
  );
}

export interface ICurvedLinkPathConstructorSettings {
  directionFactor: number;
  tweakDirectionFactorBasedOnDistance: (
    distance: number,
    directionFactor: number
  ) => number;
}

const defualtSettings: ICurvedLinkPathConstructorSettings = {
  directionFactor: 60,
  tweakDirectionFactorBasedOnDistance: (distance, directionFactor) => {
    if (distance < 100) {
      return directionFactor * (distance / 100);
    }
    return directionFactor;
  },
};

export function createCurvedLinkPathConstructor(
  settings?: Partial<ICurvedLinkPathConstructorSettings>
): ILinkPathConstructor {
  return (
    source: ILinkPathConstructorEndpointInfo,
    target: ILinkPathConstructorEndpointInfo
  ) =>
    curvedLinkPathConstructor(
      source,
      target,
      settings ? { ...defualtSettings, ...settings } : defualtSettings
    );
}