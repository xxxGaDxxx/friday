import React, { ReactNode } from 'react';

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
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type UniversalModalWindowType = {
  children: ReactNode;
  title: string;
  handleClose: () => void;
  open: boolean;
  onAcceptActionClick: () => void;
  titleButtonAccept: string;
  buttonColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};

export const UniversalModalWindow = ({
  children,
  title,
  handleClose,
  open,
  onAcceptActionClick,
  titleButtonAccept,
  buttonColor,
}: UniversalModalWindowType): ReturnComponentType => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div className={s.header}>
          <h2>{title}</h2>

          <button type="button" onClick={handleClose} className={s.button}>
            <img src={close} alt="close" />
          </button>
        </div>
        <hr className={s.strip} />
        <div>{children}</div>
        <div className={s.footer}>
          <Button
            type="button"
            variant="contained"
            color="inherit"
            style={{ borderRadius: '20px' }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="contained"
            color={buttonColor}
            style={{ borderRadius: '20px' }}
            onClick={onAcceptActionClick}
          >
            {titleButtonAccept}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
