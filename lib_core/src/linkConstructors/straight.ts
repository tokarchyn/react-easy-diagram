import { ILinkPathConstructor, ILinkPathConstructorEndpointInfo } from '..';

function straightLinkPathConstructor(
  source: ILinkPathConstructorEndpointInfo,
  target: ILinkPathConstructorEndpointInfo
): string {
  const path = `M ${source.point[0]} ${source.point[1]}, ${target.point[0]} ${target.point[1]}`;

  return path;
}

export function createStraightLinkPathConstructor(): ILinkPathConstructor {
  return straightLinkPathConstructor;
}
