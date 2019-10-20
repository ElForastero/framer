import 'libs/polyfills';
import React, { useState, useEffect, useRef } from 'react';
import browser from 'webextension-polyfill';

const defaultOptions = {
  buttonSize: 'large',
  darkMode: false,
};

const OptionsContext = React.createContext(null);

const OptionsProvider = ({ children }) => {
  const [state, setState] = useState(defaultOptions);
  const initRef = useRef(false);

  // Initialize the list with saved items or with initial data
  useEffect(async () => {
    const { options } = await browser.storage.sync.get({ options: defaultOptions });
    setState(options);
    initRef.current = true;
  }, []);

  // Sync with storage
  useEffect(() => {
    if (initRef.current) {
      browser.storage.sync.set({ options: state });
    }
  }, [state]);

  // Listen to storage change and update the list
  useEffect(() => {
    browser.storage.onChanged.addListener(changes => {
      if (changes.options) setState(changes.options.newValue);
    });
  }, []);

  return <OptionsContext.Provider value={[state, setState]}>{children}</OptionsContext.Provider>;
};

export { OptionsProvider, OptionsContext };
