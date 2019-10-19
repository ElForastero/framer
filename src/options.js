import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import globalStyle from 'assets/styles/global';
import { ThemeProvider } from 'context/Theme';
import { OptionsProvider } from 'context/Options';
import OptionsForm from 'components/OptionsForm';

const GlobalStyle = createGlobalStyle`
  body {
    ${globalStyle};
    padding: 20px;
  }
`;

const OptionsPage = () => {
  return (
    <OptionsProvider>
      <ThemeProvider>
        <Fragment>
          <GlobalStyle />
          <OptionsForm />
        </Fragment>
      </ThemeProvider>
    </OptionsProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<OptionsPage />, root);
