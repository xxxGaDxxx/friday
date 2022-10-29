import React, { ChangeEvent, useState } from 'react';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import UniversalModalWindow from '../../../../../common/components/universalModalWindow/UniversalModalWindow';
import { ReturnComponentType } from '../../../../../common/types';

import s from './styles/AddPackModal.module.scss';

type AddPackModalProps = {
  onAddPackClick: (titlePack: string, privatePack: boolean) => void;
};

export const AddPackModal = ({ onAddPackClick }: AddPackModalProps): ReturnComponentType => {
  const [open, setOpen] = useState(false);
  const [titlePack, setTitlePack] = useState('');
  const [privatePack, setPrivatePack] = useState(false);

  const onPrivatePackClick = (): void => {
    setPrivatePack(!privatePack);
  };

  const handleOpen = (): void => {
    setOpen(true);
    setTitlePack('');
  };
  const handleClose = (): void => {
    setOpen(false);
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
      title="Add new pack"
      titleButton="Add new pack"
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
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
          onClick={handleClose}
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
