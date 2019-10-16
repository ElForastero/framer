import { useEffect } from 'react';

const useAutoFocus = ref => {
  useEffect(() => {
    if (!ref.current || !ref.current.autofocus) return;

    const preservedTabIndex = ref.current.tabIndex;

    ref.current.tabIndex = -1;
    ref.current.focus();
    ref.current.tabIndex = preservedTabIndex;
  });
};

export default useAutoFocus;
