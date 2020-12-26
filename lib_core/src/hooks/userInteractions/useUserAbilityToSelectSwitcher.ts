import { useEffect } from "react";

export const DISABLED_USER_SELECT_CSS_CLASS =
  'react_fast_diagram_disabled_user_select';

export function useUserAbilityToSelectSwitcher(
  active: boolean,
  elementToSwitchUserSelectOn: HTMLElement | undefined
) {
  useEffect(() => {
    if (!active || !elementToSwitchUserSelectOn) {
      return;
    }

    if (
      elementToSwitchUserSelectOn.classList.contains(
        DISABLED_USER_SELECT_CSS_CLASS
      )
    ) {
      return;
    }

    elementToSwitchUserSelectOn.classList.add(DISABLED_USER_SELECT_CSS_CLASS);

    return () => {
      elementToSwitchUserSelectOn.classList.remove(
        DISABLED_USER_SELECT_CSS_CLASS
      );
    };
  }, [active, elementToSwitchUserSelectOn]);
}
