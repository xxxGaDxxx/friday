import React, { ChangeEvent } from 'react';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { IconButton } from '@mui/material';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';

type Props = {
  actionCreator: any;
};

const MAX_FILE_SIZE = 5000000;

export const AddImageAvatar = ({ actionCreator }: Props): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      if (file.size < MAX_FILE_SIZE) {
        convertFileToBase64(file, (file64: string) => {
          dispatch(actionCreator(file64));
        });
      } else {
        console.error('Error: ', 'Файл слишком большого размера');
      }
    }
  };

  const convertFileToBase64 = (file: File, callBack: (value: string) => void): void => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const file64 = reader.result as string;

      callBack(file64);
    };
    reader.readAsDataURL(file);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input type="file" onChange={uploadHandler} style={{ display: 'none' }} />
      <IconButton component="span">
        <AddAPhotoIcon />
      </IconButton>
    </label>
  );
};
