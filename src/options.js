import React from 'react';
import ReactDOM from 'react-dom';
import Example from 'components/Example';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 18px;
  color: var(--my-ext-color-primary);
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const OptionsPage = () => (
  <Wrapper>
    <Example />
  </Wrapper>
);

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<OptionsPage />, root);
