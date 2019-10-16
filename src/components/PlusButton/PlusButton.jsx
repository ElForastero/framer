import React from 'react';
import styled from 'styled-components';
import PlusIcon from 'assets/icons/plus.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.secondary};
  font-size: 28px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  border: none;

  :hover {
    transform: scale(1.1);
  }
`;

const PlusButton = props => (
  <Button {...props}>
    <PlusIcon />
  </Button>
);

export default PlusButton;
