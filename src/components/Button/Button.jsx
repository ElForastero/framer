import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 2px;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.theme.palette.secondary};
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.font.primary};
  font-size: 16px;
  transition: background-color, border-color 0.2s ease-in-out;
  font-weight: 500;

  :hover {
    border: 2px solid ${props => props.theme.palette.secondary};
    background-color: ${props => props.theme.palette.secondary};
    color: ${props => props.theme.palette.primary};
  }
`;

export default Button;
