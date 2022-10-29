import React, { memo } from 'react';

import Typography from '@mui/material/Typography';

import { ReturnComponentType } from '../../../common/types';

import { AddPackModal } from './modalPack/addPackModal/AddPackModal';

type AddNewPackType = {
  onAddPackClick: (titlePack: string, privatePack: boolean) => void;
};

export const AddNewPack = memo(({ onAddPackClick }: AddNewPackType): ReturnComponentType => {
  return (
    <>
      <Typography component="h2">Packs list</Typography>
      {/* <Button */}
      {/* type="button" */}
      {/* variant="contained" */}
      {/* color="primary" */}
      {/* style={{ borderRadius: '20px' }} */}
      {/* onClick={onAddPackClick} */}
      {/* > */}
      {/* Add new pack */}
      {/* </Button> */}
      <AddPackModal onAddPackClick={onAddPackClick} />
    </>
  );
});
