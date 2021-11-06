import { Dictionary } from 'index';
import { Point } from 'utils/point';

interface DummyHTMLElementOptions {
  size: Point;
  position: Point;
  attributes?: Dictionary<string>;
}

class DummyHTMLElement
  implements Pick<HTMLDivElement, 'getBoundingClientRect' | 'getAttribute'> {
  private _options: DummyHTMLElementOptions;

  constructor(options: DummyHTMLElementOptions) {
    this._options = options;
  }

  getBoundingClientRect = () => {
    const rect = {
      width: this._options.size[0],
      height: this._options.size[1],
      x: this._options.position[0],
      y: this._options.position[1],
      left: this._options.position[0],
      top: this._options.position[1],
      right: this._options.position[0] + this._options.size[0],
      bottom: this._options.position[0] + this._options.size[0],
    };
    return {
      ...rect,
      toJSON: () => rect,
    };
  };

  getAttribute = (name: string) => this._options.attributes?.[name] ?? null;
}

export function createDummyHTMLElement(options: DummyHTMLElementOptions) {
  return <HTMLDivElement><unknown>(new DummyHTMLElement(options));
}