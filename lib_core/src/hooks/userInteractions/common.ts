export function allTouchTargetsContainsClass(
  event: TouchEvent | React.TouchEvent<Element>,
  listenOnlyClass: string | undefined,
  ignoreClass: string | undefined
): boolean {
  for (let i = 0; i < event.touches.length; i++) {
    if (
      !eventTargetContainsClass(
        event.touches[i].target,
        listenOnlyClass,
        ignoreClass
      )
    ) {
      return false;
    }
  }

  return true;
}

export function eventTargetContainsClass(
  eventTarget: EventTarget | null,
  listenOnlyClass: string | undefined,
  ignoreClass: string | undefined
): boolean {
  if (eventTarget && 'classList' in eventTarget) {
    const targetElement = eventTarget as Element;
    return (
      (!listenOnlyClass || targetElement.classList.contains(listenOnlyClass)) &&
      (!ignoreClass || !targetElement.classList.contains(ignoreClass))
    );
  } else return false;
}