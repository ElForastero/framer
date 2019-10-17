import React, { useContext } from 'react';
import { ThemeProvider as BaseThemProvider } from 'styled-components';
import { OptionsContext } from 'context/Options';
import light from 'theme/light';
import dark from 'theme/dark';

const ThemeProvider = ({ children }) => {
  const [{ darkMode }] = useContext(OptionsContext);

  return <BaseThemProvider theme={darkMode ? dark : light}>{children}</BaseThemProvider>;
};

export default ThemeProvider;
