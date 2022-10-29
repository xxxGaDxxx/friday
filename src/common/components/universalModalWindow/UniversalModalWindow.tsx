import React, { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

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
  titleButton: string;
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
};

const UniversalModalWindow = ({
  children,
  title,
  titleButton,
  handleOpen,
  handleClose,
  open,
}: UniversalModalWindowType): ReturnComponentType => {
  return (
    <div>
      <Button
        onClick={handleOpen}
        type="button"
        variant="contained"
        color="primary"
        style={{ borderRadius: '20px' }}
      >
        {titleButton}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={s.header}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h2>{title}</h2>
            </Typography>

            <button type="button" onClick={handleClose} className={s.button}>
              <img src={close} alt="close" />
            </button>
          </div>
          <hr className={s.strip} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default UniversalModalWindow;
