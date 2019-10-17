import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import browser from 'webextension-polyfill';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import globalStyle from 'assets/styles/global';
import { OptionsProvider, OptionsConsumer } from 'context/Options';
import lightTheme from 'theme/light';
import darkTheme from 'theme/dark';
import Switch from 'components/Switch';
import Box from 'components/Box';

const GlobalStyle = createGlobalStyle`
  body {
    ${globalStyle};
    padding: 20px;
  }
`;

const OptionsPage = () => {
  return (
    <OptionsProvider>
      <OptionsConsumer>
        {([options, update]) => (
          <ThemeProvider theme={options.darkMode ? darkTheme : lightTheme}>
            <Fragment>
              <GlobalStyle />
              <Box display="flex" alignItems="center" justifyContent="space-between">
                {browser.i18n.getMessage('darkMode')}:
                <Switch
                  onChange={darkMode => update({ ...options, darkMode })}
                  checked={options.darkMode}
                />
              </Box>
            </Fragment>
          </ThemeProvider>
        )}
      </OptionsConsumer>
    </OptionsProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<OptionsPage />, root);
