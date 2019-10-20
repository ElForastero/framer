import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

const Text = styled.span`
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
  flex-grow: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;

const Enhanced = ({ done, id, value, update }) => {
  const [showInput, toggleInput] = useState(false);

  if (showInput) {
    return <Input value={value} id={id} update={update} onClose={() => toggleInput(false)} />;
  }

  return (
    <Text done={done} onClick={() => toggleInput(true)}>
      {value}
    </Text>
  );
};

export default Enhanced;
