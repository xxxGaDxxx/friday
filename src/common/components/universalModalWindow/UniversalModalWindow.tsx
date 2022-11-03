import React, { ReactNode, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import close from '../../../assets/svg/close.svg';
import { ReturnComponentType } from '../../types';

import s from './style/UniversalModalWindow.module.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#FFFFFF',
  boxShadow: 24,
  p: 4,
};

type UniversalModalWindowType = {
  children: ReactNode;
  title: string;
  handleClose?: () => void;
  onAcceptActionClick: () => void;
  titleButtonAccept: string;
  clickHere: ReactNode; // name need to fix
  variantOfButtonToCallModal: 'text' | 'outlined' | 'contained';
  colorAcceptButton?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  styleOfButtonToCallModal?: Object;
};

export const UniversalModalWindow = ({
  children,
  title,
  handleClose,
  onAcceptActionClick,
  titleButtonAccept,
  colorAcceptButton,
  clickHere,
  variantOfButtonToCallModal,
  styleOfButtonToCallModal,
}: UniversalModalWindowType): ReturnComponentType => {
  const [open, setOpen] = useState(false);

  const openModalWindow = (): void => {
    setOpen(true);
  };

  const closeModalWindow = (): void => {
    setOpen(false);
    handleClose?.();
  };

  const onAcceptActionClickHandle = (): void => {
    closeModalWindow();
    onAcceptActionClick();
  };

  return (
    <div>
      <Button
        onClick={openModalWindow}
        variant={variantOfButtonToCallModal}
        style={styleOfButtonToCallModal}
        type="button"
      >
        {clickHere}
      </Button>

      <Modal open={open} onClose={closeModalWindow}>
        <Box sx={style}>
          <div className={s.header}>
            <h2>{title}</h2>
            <button type="button" onClick={closeModalWindow} className={s.button}>
              <img src={close} alt="close" />
            </button>
          </div>

          <hr className={s.line} />

          <div>{children}</div>

          <div className={s.footer}>
            <Button
              type="button"
              variant="contained"
              color="inherit"
              style={{ borderRadius: '20px' }}
              onClick={closeModalWindow}
            >
              Cancel
            </Button>

            <Button
              type="button"
              variant="contained"
              color={colorAcceptButton}
              style={{ borderRadius: '20px' }}
              onClick={onAcceptActionClickHandle}
            >
              {titleButtonAccept}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
