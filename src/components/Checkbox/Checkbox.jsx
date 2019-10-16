import React, { Fragment } from 'react';
import styled from 'styled-components';
import useRandomID from 'hooks/useRandomID';

const Label = styled.label`
  width: 15px;
  height: 15px;
  display: block;
  position: relative;
  user-select: none;

  ::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 15px;
    height: 15px;
    background-color: ${props => props.theme.palette.secondary};
    border-radius: 2px;
    transition: all 0.12s ease-in-out;
  }

  ::after {
    content: '';
    border-style: solid;
    border-color: ${props => props.theme.palette.primary};
    border-width: 0 2px 2px 0;
    width: 35%;
    height: 55%;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -100%) rotate(45deg);
    transition: all 0.12s ease-in-out;
    opacity: 0;
  }
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  :checked + ${Label}::after {
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 1;
  }
`;

const Checkbox = ({ className, ...props }) => {
  const id = useRandomID();

  return (
    <Fragment>
      <Input {...props} id={id} />
      <Label className={className} htmlFor={id} />
    </Fragment>
  );
};

export default Checkbox;
