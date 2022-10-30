import React from 'react';

import { UniversalModalWindow } from '../../../../../common/components/universalModalWindow/UniversalModalWindow';
import { useAppDispatch } from '../../../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../../../common/types';
import { packDeleteTC } from '../../../reducer/packTableReducer';

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
    <UniversalModalWindow
      onAcceptActionClick={onDeleteClick}
      titleButtonAccept="Delete"
      title="Delete Pack"
      open={open === 'delete'}
      handleClose={HandleClose}
      buttonColor="error"
    >
      <p>
        Do you really want to remove <strong>{namePack}</strong>? All cards will be deleted.
      </p>
    </UniversalModalWindow>
  );
};
