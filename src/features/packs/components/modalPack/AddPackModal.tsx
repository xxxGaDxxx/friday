import React, { ChangeEvent, ReactNode, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import { UniversalModalWindow } from '../../../../common/components/universalModalWindow/UniversalModalWindow';
import { ReturnComponentType } from '../../../../common/types';

import s from './style/AddPackModal.module.scss';

export type AddPackModalProps = {
  onAddPackClick: (titlePack: string, privatePack: boolean) => void;
  clickHere: ReactNode;
};

export const AddPackModal = ({
  onAddPackClick,
  clickHere,
}: AddPackModalProps): ReturnComponentType => {
  const [titlePack, setTitlePack] = useState('');
  const [privatePack, setPrivatePack] = useState(false);

  const onPrivatePackClick = (): void => {
    setPrivatePack(!privatePack);
  };

  const handleClose = (): void => {
    setTitlePack('');
    setPrivatePack(false);
  };

  const onSaveClick = (): void => {
    onAddPackClick(titlePack, privatePack);
    handleClose();
    setTitlePack('');
    setPrivatePack(false);
  };

  const onNamePackChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitlePack(event.currentTarget.value);
  };

  return (
    <UniversalModalWindow
      styleButtonActivateModal={{ borderRadius: '20px' }}
      variantOfButtonToCallModal="contained"
      clickHere={clickHere}
      onAcceptActionClick={onSaveClick}
      titleButtonAccept="Save"
      title="Add new pack"
      handleClose={handleClose}
    >
      <TextField
        type="text"
        variant="standard"
        label="Name pack"
        margin="normal"
        style={{ width: '100%' }}
        value={titlePack}
        onChange={onNamePackChange}
      />
      <FormControlLabel
        className={s.addPackModalFormCheckbox}
        label="private pack"
        onClick={onPrivatePackClick}
        control={<Checkbox checked={privatePack} />}
      />
    </UniversalModalWindow>
  );
};
