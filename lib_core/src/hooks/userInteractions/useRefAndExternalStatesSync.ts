import { useEffect } from 'react';

export function useRefAndExternalStatesSync<TState>(
  active: boolean,
  internalRef: React.MutableRefObject<TState>,
  external: TState,
  setExternal: (setter: (currentPosition: TState) => TState) => void,
  comparator: (a: TState, b: TState) => boolean
) {
  useEffect(() => {
    if (!active) {
      if (!comparator(internalRef.current, external)) {
        internalRef.current = external;
      }
    } else {
      setExternal((currentPosition) => {
        if (!comparator(internalRef.current, currentPosition)) {
          return internalRef.current;
        } else {
          return currentPosition;
        }
      });
    }
  }, [
    active,
    internalRef,
    internalRef.current,
    external,
    setExternal,
    comparator,
  ]);
}