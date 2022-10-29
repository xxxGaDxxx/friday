import React from 'react';

import Button from '@mui/material/Button';

import UniversalModalWindow from '../../../../../common/components/universalModalWindow/UniversalModalWindow';
import { useAppDispatch } from '../../../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../../../common/types';
import { packDeleteTC } from '../../../reducer/packTableReducer';

import s from './style/DeletePackModal.module.scss';
import { DeletePackModalProps } from './type/DeletePackModalType';

export const DeletePackModal = ({
  open,
  setOpen,
  namePack,
  packId,
}: DeletePackModalProps): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const HandleClose = (): void => {
    setOpen('');
  };

  const onDeleteClick = (): void => {
    HandleClose();
    setOpen('');
    dispatch(packDeleteTC(packId));
  };

  return (
    <UniversalModalWindow title="Delete Pack" open={open === 'delete'} handleClose={HandleClose}>
      <p>
        Do you really want to remove <strong>{namePack}</strong>? All cards will be deleted.
      </p>

      <div className={s.footer}>
        <Button
          type="button"
          variant="contained"
          color="inherit"
          style={{ borderRadius: '20px' }}
          onClick={HandleClose}
        >
          Cancel
        </Button>
        <Button
          type="button"
          variant="contained"
          color="error"
          style={{ borderRadius: '20px' }}
          onClick={onDeleteClick}
        >
          delete
        </Button>
      </div>
    </UniversalModalWindow>
  );
};
