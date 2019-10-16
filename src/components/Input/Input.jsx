import React, { useRef } from 'react';
import styled from 'styled-components';
import useAutoFocus from 'hooks/useAutoFocus';

const BaseInput = styled.input`
  background-color: ${props => props.theme.palette.secondary};
  border: none;
  border-radius: 2px;
  height: 35px;
  padding-left: 10px;
  color: ${props => props.theme.font.secondary};
  width: 100%;
  font-size: 14px;
  box-sizing: border-box;

  ::placeholder {
    color: ${props => props.theme.font.tertiary};
  }

  :focus {
    outline: none;
  }
`;

const Input = props => {
  const ref = useRef(null);
  useAutoFocus(ref);

  return <BaseInput {...props} ref={ref} />;
};

export default Input;
