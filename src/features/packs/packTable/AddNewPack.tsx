import React, { memo, useState } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ReturnComponentType } from '../../../common/types';

import { AddPackModal } from './modalPack/addPackModal/AddPackModal';

type AddNewPackType = {
  onAddPackClick: (titlePack: string, privatePack: boolean) => void;
};

export const AddNewPack = memo(({ onAddPackClick }: AddNewPackType): ReturnComponentType => {
  const [open, setOpen] = useState(false);

  const HandleOpen = (): void => {
    setOpen(true);
  };

  return (
    <>
      <Typography component="h2">Packs list</Typography>
      <Button
        type="button"
        variant="contained"
        color="primary"
        style={{ borderRadius: '20px' }}
        onClick={HandleOpen}
      >
        Add new pack
      </Button>
      <AddPackModal onAddPackClick={onAddPackClick} setOpen={setOpen} open={open} />
    </>
  );
});
