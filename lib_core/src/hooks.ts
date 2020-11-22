import { useState } from "react";
import { DigramApi } from ".";

export const useDiagramRef = (): React.MutableRefObject<
  DigramApi | undefined
> => {
  const [_, forceUpdate] = useState(0);
  const [ref] = useState(() => ({
    value: undefined,
    facade: {
      get current() {
        return ref.value;
      },
      set current(value) {
        const last = ref.value;
        if (last !== value) {
          ref.value = value;
          console.log('Force update');
          forceUpdate((i) => i + 1);
        }
      },
    },
  }));

  console.log('Facade is ' + ref.facade);
  return ref.facade;
};