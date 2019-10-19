import 'libs/polyfills';
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled, { StyleSheetManager, createGlobalStyle } from 'styled-components';
import globalStyle from 'assets/styles/global';
import { OptionsProvider } from 'context/Options';
import { ThemeProvider } from 'context/Theme';
import useClickOutside from 'use-click-outside';
import FixedPlusButton from 'components/FixedPlusButton';
import TodoContainer from 'components/TodoContainer';
import Todo from 'components/Todo';
import { TodoProvider } from 'context/Todo';
import usePressOnEsc from 'hooks/usePressOnEsc';
import { layer1 } from 'constants/layers';

const GlobalStyle = createGlobalStyle`
  :host {
    ${globalStyle}
  }
`;

const root = document.createElement('div');
const shadow = root.attachShadow({ mode: 'open' });

const styleContainer = document.createElement('div');
const appContainer = document.createElement('div');

shadow.appendChild(styleContainer);
shadow.appendChild(appContainer);

document.body.appendChild(root);

const FixedTodoContainer = styled(TodoContainer)`
  position: fixed;
  top: 0;
  right: 0;
  transform: ${props => (props.active ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in-out;
  z-index: ${layer1};
  box-shadow: ${props => (props.active ? '0 0 15px 10px rgba(0,0,0,.1)' : 'none')};
`;

const App = () => {
  const [isActive, toggle] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => toggle(false));
  usePressOnEsc(() => toggle(false));

  return (
    <StyleSheetManager target={styleContainer}>
      <OptionsProvider>
        <ThemeProvider>
          <TodoProvider>
            <GlobalStyle />
            <FixedPlusButton onClick={() => toggle(!isActive)} />
            <FixedTodoContainer active={isActive} ref={ref}>
              <Todo />
            </FixedTodoContainer>
          </TodoProvider>
        </ThemeProvider>
      </OptionsProvider>
    </StyleSheetManager>
  );
};

ReactDOM.render(<App />, appContainer);
