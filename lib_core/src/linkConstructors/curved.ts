import { ILinkPathConstructor } from '../states/linksSettingsState';
import { Point } from '../types/common';
import { distanceBetweenPoints, roundPoint } from '../utils';

function curvedLinkPathConstructorInner(
  source: Point,
  target: Point,
  sourcePortType: string | undefined,
  targetPortType: string | undefined,
  settings: ICurvedLinkPathConstructorSettings
): string {
  if (!source || !target) return '';
  source = roundPoint(source);
  target = roundPoint(target);

  console.log(`Create path for ports ${sourcePortType} ${targetPortType}`)

  const sourceStr = `${source[0]}, ${source[1]}`;
  const targetStr = `${target[0]}, ${target[1]}`;

  const directionFactor = settings.tweakDirectionFactorBasedOnDistance(
    distanceBetweenPoints(source, target),
    settings.directionFactor
  )

  function getControl(endpoint: Point, portType: string | undefined): string {
    const linkDirection = portType && settings.portTypeToLinkDirectionMapping[portType];
    switch (linkDirection) {
      case 'left':
        return `${endpoint[0] - directionFactor}, ${endpoint[1]}`;
      case 'up':
        return `${endpoint[0]}, ${endpoint[1] - directionFactor}`;
      case 'right':
        return `${endpoint[0] + directionFactor}, ${endpoint[1]}`;
      case 'down':
        return `${endpoint[0]}, ${endpoint[1] + directionFactor}`;
      default:
        return `${endpoint[0]}, ${endpoint[1]}`;
    }
  }

  if (sourcePortType || targetPortType) {
    const sourceControl = getControl(source, sourcePortType);
    const targetControl = getControl(target, targetPortType);
    return `M ${sourceStr} C ${sourceControl} ${targetControl}, ${targetStr}`;
  } else {
    return `M ${sourceStr} Q ${target[0]}, ${source[1]}, ${targetStr}`;
  }
}

export interface ICurvedLinkPathConstructorSettings {
  portTypeToLinkDirectionMapping: {
    [key: string]: 'left' | 'right' | 'up' | 'down';
  };
  directionFactor: number;
  tweakDirectionFactorBasedOnDistance: (distance: number, directionFactor: number) => number;
}

const defualtSettings: ICurvedLinkPathConstructorSettings = {
  portTypeToLinkDirectionMapping: {
    left: 'left',
    right: 'right',
    top: 'up',
    bottom: 'down',
  },
  directionFactor: 60,
  tweakDirectionFactorBasedOnDistance: (distance, directionFactor) => {
    if (distance < 100) {
      return directionFactor * (distance / 100);
    }
    return directionFactor;
  }
};

export function createCurvedLinkPathConstructor(
  settings?: Partial<ICurvedLinkPathConstructorSettings>
): ILinkPathConstructor {
  return (
    source: Point,
    target: Point,
    sourcePortType: string | undefined,
    targetPortType: string | undefined
  ) =>
    curvedLinkPathConstructorInner(
      source,
      target,
      sourcePortType,
      targetPortType,
      settings ? { ...defualtSettings, ...settings } : defualtSettings
    );
}
