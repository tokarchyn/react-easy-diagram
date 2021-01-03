import { LinkState } from '../states/linkState';

export function simpleLinkPathConstructor(state: LinkState): string {
  const fromPoint = state.sourcePoint;
  const toPoint = state.targetPoint;
  const path = `M ${fromPoint[0]} ${fromPoint[1]}, ${toPoint[0]} ${toPoint[1]}`;

  return path;
}