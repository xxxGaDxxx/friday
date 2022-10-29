import React, { ReactNode } from 'react';

import Box from '@mui/material/Box';
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
};

const UniversalModalWindow = ({
  children,
  title,
  handleClose,
  open,
}: UniversalModalWindowType): ReturnComponentType => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={s.header}>
          <h2>{title}</h2>

          <button type="button" onClick={handleClose} className={s.button}>
            <img src={close} alt="close" />
          </button>
        </div>
        <hr className={s.strip} />
        <div>{children}</div>
      </Box>
    </Modal>
  );
};

export default UniversalModalWindow;
