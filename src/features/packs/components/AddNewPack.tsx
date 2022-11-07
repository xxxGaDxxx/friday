import React, { memo } from 'react';

import Typography from '@mui/material/Typography';

import { ReturnComponentType } from '../../../common/types';

import { AddPackModal } from './modalPack/AddPackModal';

type AddNewPackType = {
  onAddPackClick: (titlePack: string, privatePack: boolean, cover: string) => void;
};

export const AddNewPack = memo(({ onAddPackClick }: AddNewPackType): ReturnComponentType => {
  return (
    <>
      <Typography component="h2">Packs list</Typography>
      <AddPackModal onAddPackClick={onAddPackClick} clickHere="Add new pack" />
    </>
  );
});
