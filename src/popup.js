import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from 'theme/light';
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoProvider>
        <TodoContainer>
          <Todo />
        </TodoContainer>
      </TodoProvider>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
