import React, { Fragment } from 'react';
import styled from 'styled-components';
import useRandomID from 'hooks/useRandomID';

const Label = styled.label`
  width: 15px;
  height: 15px;
  display: inline-block;
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
    border-radius: 50%;
    transition: all 0.12s ease-in-out;
  }

  ::after {
    content: '';
    background-color: ${props => props.theme.palette.primary};
    border-radius: 50%;
    width: 50%;
    height: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.12s ease-in-out;
    opacity: 0;
  }
`;

const Input = styled.input.attrs({ type: 'radio' })`
  display: none;

  :checked + ${Label}::after {
    opacity: 1;
  }
`;

const Radio = ({ className, ...props }) => {
  const id = useRandomID();

  return (
    <Fragment>
      <Input {...props} id={id} />
      <Label className={className} htmlFor={id} />
    </Fragment>
  );
};

export default Radio;
