import React, { Fragment } from 'react';
import styled from 'styled-components';
import Backdrop from 'components/Backdrop';
import { layer2 } from 'constants/layers';

const BaseDialog = styled.dialog`
  z-index: ${layer2};
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  max-width: calc(100% - 40px);
  border-radius: 2px;
`;

const Dialog = ({ children, onClose }) => {
  return (
    <Fragment>
      <BaseDialog open>{children}</BaseDialog>
      <Backdrop onClick={onClose} />
    </Fragment>
  );
};

export default Dialog;
