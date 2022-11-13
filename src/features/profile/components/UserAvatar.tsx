import React, { ChangeEvent } from 'react';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { IconButton } from '@mui/material';

import defaultAvatar from '../../../assets/img/defaultAvatar.png';
import { Image } from '../../../common/components/cover/Image';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { convertFileToBase64 } from '../../../common/utils/convertFileToBase64';
import { setAppErrorAC } from '../../../store/app-reducer';
import { updateUserTC } from '../reducer/profileReducer';

import s from './styles/UserAvatar.module.scss';

const MAX_FILE_SIZE = 4000000;

export const UserAvatar = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const name = useAppSelector(state => state.profile.name);
  const avatar = useAppSelector(state => state.profile.avatar);

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      if (file.size < MAX_FILE_SIZE) {
        convertFileToBase64(file, (file64: string) => {
          dispatch(updateUserTC(name, file64));
        });
      } else {
        dispatch(setAppErrorAC('The file is too large'));
      }
    }
  };

  return (
    <>
      <Image packCover={avatar} isErrorMessageShow styles={s.avatar} defaultImage={defaultAvatar} />

      <label>
        <input type="file" accept="image/*" onChange={uploadHandler} style={{ display: 'none' }} />
        <IconButton component="span">
          <AddAPhotoIcon />
        </IconButton>
      </label>
    </>
  );
};
