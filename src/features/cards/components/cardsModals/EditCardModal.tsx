import React, { ChangeEvent, ReactNode, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import { UniversalModalWindow } from '../../../../common/components/universalModalWindow/UniversalModalWindow';
import { ReturnComponentType } from '../../../../common/types';

import s from './style/CardsModals.module.scss';

export type EditPackModalProps = {
  updatePack: (titlePack: string, privatePack: boolean) => void;
  clickHere: ReactNode;
  stylesOfIcon: object;
  currentPackTitle: string;
};

export const EditCardModal = ({
  updatePack,
  clickHere,
  stylesOfIcon,
  currentPackTitle,
}: EditPackModalProps): ReturnComponentType => {
  const [packTitle, setPackTitle] = useState(currentPackTitle);
  const [isPrivatePack, setIsPrivatePack] = useState(false);

  const setPrivacy = (): void => {
    setIsPrivatePack(!isPrivatePack);
  };

  const handleClose = (): void => {
    // setPackTitle('');
    setIsPrivatePack(false);
  };

  const onSaveClick = (): void => {
    updatePack(packTitle, isPrivatePack);
    handleClose();
    // setPackTitle('');
    setIsPrivatePack(false);
  };

  const changePackName = (event: ChangeEvent<HTMLInputElement>): void => {
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
        onChange={changePackName}
      />
      <FormControlLabel
        className={s.addPackModalFormCheckbox}
        label="private pack"
        onClick={setPrivacy}
        control={<Checkbox checked={isPrivatePack} />}
      />
    </UniversalModalWindow>
  );
};
