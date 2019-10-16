import React from 'react';
import styled from 'styled-components';

const width = 320;

const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
  width: ${width}px;
  background-color: ${props => props.theme.palette.primary};
  padding: 20px;
`;

export default Container;