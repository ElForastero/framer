import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'context/Theme';
import { OptionsProvider } from 'context/Options';
import { TodoProvider } from 'context/Todo';
import Todo from 'components/Todo';
import TodoContainer from 'components/TodoContainer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 14px;
    min-height: 300px;
  }
`;

const Popup = () => {
  return (
    <OptionsProvider>
      <ThemeProvider>
        <GlobalStyle />
        <TodoProvider>
          <TodoContainer>
            <Todo />
          </TodoContainer>
        </TodoProvider>
      </ThemeProvider>
    </OptionsProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
