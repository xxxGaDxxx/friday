import React, { memo } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ReturnComponentType } from '../../../../types';

type AddNewPackType = {
  onAddPackClick: () => void;
};

export const AddNewPack = memo(({ onAddPackClick }: AddNewPackType): ReturnComponentType => {
  return (
    <>
      <Typography component="h2">Packs list</Typography>
      <Button
        type="button"
        variant="contained"
        color="primary"
        style={{ borderRadius: '20px' }}
        onClick={onAddPackClick}
      >
        Add new pack
      </Button>
    </>
  );
});
