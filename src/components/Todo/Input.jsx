import React, { useRef } from 'react';
import styled from 'styled-components';
import BaseInput from 'components/Input';
import useKeyPress from 'hooks/useKeyPress';

const InputWithInheritFontSize = styled(BaseInput)`
  padding: 0;
  font-size: inherit;
`;

const Input = ({ id, value, update, onClose }) => {
  const save = event => {
    const {
      target: { value: newValue },
    } = event;

    const text = newValue.trim();
    value !== text && update({ id, text });
    onClose(event);
  };

  const ref = useRef(null);
  useKeyPress(ref, 'enter', save);

  return <InputWithInheritFontSize ref={ref} value={value} onBlur={onClose} autoFocus />;
};

export default Input;
