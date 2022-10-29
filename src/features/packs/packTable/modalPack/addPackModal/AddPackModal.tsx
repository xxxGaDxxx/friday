import React, { ChangeEvent, useState } from 'react';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import UniversalModalWindow from '../../../../../common/components/universalModalWindow/UniversalModalWindow';
import { ReturnComponentType } from '../../../../../common/types';

import s from './style/AddPackModal.module.scss';
import { AddPackModalProps } from './type/AddPackModalType';

export const AddPackModal = ({
  onAddPackClick,
  open,
  setOpen,
}: AddPackModalProps): ReturnComponentType => {
  const [titlePack, setTitlePack] = useState('');
  const [privatePack, setPrivatePack] = useState(false);

  const onPrivatePackClick = (): void => {
    setPrivatePack(!privatePack);
  };

  const HandleClose = (): void => {
    setOpen(false);
    setTitlePack('');
    setPrivatePack(false);
  };

  const onSaveClick = (): void => {
    onAddPackClick(titlePack, privatePack);
    HandleClose();
    setTitlePack('');
    setPrivatePack(false);
  };

  const onNamePackChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitlePack(event.currentTarget.value);
  };

  return (
    <UniversalModalWindow title="Add new pack" open={open} handleClose={HandleClose}>
      <TextField
        type="text"
        variant="standard"
        label="text"
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
          color="primary"
          style={{ borderRadius: '20px' }}
          onClick={onSaveClick}
        >
          Save
        </Button>
      </div>
    </UniversalModalWindow>
  );
};
