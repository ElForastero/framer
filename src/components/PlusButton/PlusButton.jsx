import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PlusIcon from 'assets/icons/plus.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => `${props.radius * 2}px`};
  height: ${props => `${props.radius * 2}px`};
  padding: 0;
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.secondary};
  font-size: 28px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  transition: box-shadow 0.2s ease-in-out;
  position: relative;

  :hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: ${props => props.theme.palette.secondary};
    opacity: 0.1;
  }

  :focus {
    outline: none;
  }
`;

const PlusButton = (props, ref) => {
  return (
    <Button ref={ref} {...props}>
      <PlusIcon />
    </Button>
  );
};

export default forwardRef(PlusButton);
