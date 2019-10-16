import 'libs/polyfills';
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled, { StyleSheetManager, ThemeProvider, createGlobalStyle } from 'styled-components';
import browser from 'webextension-polyfill';
import theme from 'theme/light';
import useClickOutside from 'use-click-outside';
import PlusButton from 'components/PlusButton';
import TodoContainer from 'components/TodoContainer';
import Todo from 'components/Todo';
import { TodoProvider } from 'context/Todo';
import usePressOnEsc from 'hooks/usePressOnEsc';

const GlobalStyle = createGlobalStyle`
  :host {
    font-size: 16px;
    box-sizing: border-box;
  }
`;

const root = document.createElement('div');
const shadow = root.attachShadow({ mode: 'open' });

const styleContainer = document.createElement('div');
const appContainer = document.createElement('div');

shadow.appendChild(styleContainer);
shadow.appendChild(appContainer);

document.body.appendChild(root);

const FixedPlusButton = styled(PlusButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;

const FixedTodoContainer = styled(TodoContainer)`
  position: fixed;
  top: 0;
  right: 0;
  transform: ${props => (props.active ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in-out;
  z-index: 999;
`;

const App = () => {
  const [isActive, toggle] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => toggle(false));
  usePressOnEsc(() => toggle(false));

  return (
    <StyleSheetManager target={styleContainer}>
      <ThemeProvider theme={theme}>
        <TodoProvider>
          <GlobalStyle />
          <FixedPlusButton onClick={() => toggle(!isActive)} />
          <FixedTodoContainer active={isActive} ref={ref}>
            <Todo />
          </FixedTodoContainer>
        </TodoProvider>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

ReactDOM.render(<App />, appContainer);
