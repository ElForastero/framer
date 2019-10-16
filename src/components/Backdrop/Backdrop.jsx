import React from 'react';
import styled from 'styled-components';
import { layer1 } from 'constants/layers';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: ${layer1};
`;

export default Backdrop;
