import React, { ChangeEvent, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import { UniversalModalWindow } from '../../../../common/components/universalModalWindow/UniversalModalWindow';
import { ReturnComponentType } from '../../../../common/types';

import s from './style/AddPackModal.module.scss';
import { EditPackModalProps } from './type/EditPackModalType';

export const EditPackModal = ({
  onEditPackClick,
  clickHere,
  stylesOfIcon,
  currentPackTitle,
}: EditPackModalProps): ReturnComponentType => {
  const [packTitle, setPackTitle] = useState('');
  const [isPrivatePack, setIsPrivatePack] = useState(false);

  const onPrivatePackClick = (): void => {
    setIsPrivatePack(!isPrivatePack);
  };

  const handleClose = (): void => {
    setPackTitle('');
    setIsPrivatePack(false);
  };

  const onSaveClick = (): void => {
    onEditPackClick(packTitle, isPrivatePack);
    handleClose();
    setPackTitle('');
    setIsPrivatePack(false);
  };

  const onNamePackChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPackTitle(event.currentTarget.value);
  };

  return (
    <UniversalModalWindow
      styleOfButtonToCallModal={stylesOfIcon}
      variantOfButtonToCallModal="text"
      clickHere={clickHere}
      onAcceptActionClick={onSaveClick}
      titleButtonAccept="Save"
      title="Edit pack"
      handleClose={handleClose}
    >
      <TextField
        type="text"
        variant="standard"
        label="Name pack"
        margin="normal"
        style={{ width: '100%' }}
        value={packTitle}
        onChange={onNamePackChange}
        defaultValue={currentPackTitle}
      />
      <FormControlLabel
        className={s.addPackModalFormCheckbox}
        label="private pack"
        onClick={onPrivatePackClick}
        control={<Checkbox checked={isPrivatePack} />}
      />
    </UniversalModalWindow>
  );
};
