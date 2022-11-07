import React, { ChangeEvent, ReactNode, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import { Cover } from '../../../../common/components/cover/Cover';
import { UniversalModalWindow } from '../../../../common/components/universalModalWindow/UniversalModalWindow';
import { ReturnComponentType } from '../../../../common/types';

import s from './style/AddPackModal.module.scss';

export type EditPackModalProps = {
  updatePack: (titlePack: string, privatePack: boolean, coverPack: string) => void;
  clickHere: ReactNode;
  stylesOfIcon: object;
  currentPackTitle: string;
  deckCover: string;
};

export const EditPackModal = ({
  updatePack,
  clickHere,
  stylesOfIcon,
  currentPackTitle,
  deckCover,
}: EditPackModalProps): ReturnComponentType => {
  const [packTitle, setPackTitle] = useState(currentPackTitle);
  const [isPrivatePack, setIsPrivatePack] = useState(false);
  const [coverPack, setCoverPack] = useState('');

  const setPrivacy = (): void => {
    setIsPrivatePack(!isPrivatePack);
  };

  const handleClose = (): void => {
    // setPackTitle('');
    setIsPrivatePack(false);
  };

  const onSaveClick = (): void => {
    updatePack(packTitle, isPrivatePack, coverPack);
    handleClose();
    // setPackTitle('');
    setIsPrivatePack(false);
  };

  const changePackName = (event: ChangeEvent<HTMLInputElement>): void => {
    setPackTitle(event.currentTarget.value);
  };

  return (
    <UniversalModalWindow
      styleButtonActivateModal={stylesOfIcon}
      variantOfButtonToCallModal="text"
      clickHere={clickHere}
      onAcceptActionClick={onSaveClick}
      titleButtonAccept="Save"
      title="Edit pack"
      handleClose={handleClose}
    >
      <Cover setCoverPack={setCoverPack} deckCover={deckCover} />
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
