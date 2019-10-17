import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import BaseSwitch from 'react-switch';

const StyledSwitch = styled(BaseSwitch)``;

const Switch = props => {
  const theme = useContext(ThemeContext);

  return (
    <StyledSwitch
      checkedIcon={false}
      uncheckedIcon={false}
      onHandleColor="#fff"
      offHandleColor="#fff"
      height={25}
      width={50}
      onColor={theme.palette.success}
      offColor={theme.palette.neutral}
      {...props}
    />
  );
};

export default Switch;
