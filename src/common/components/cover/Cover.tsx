import React, { ChangeEvent, useState } from 'react';

import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { IconButton } from '@mui/material';

import defaultCover from '../../../assets/img/noCover.jpg';
import { setAppErrorAC } from '../../../store/app-reducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ReturnComponentType } from '../../types';
import { convertFileToBase64 } from '../../utils/convertFileToBase64';

import { Image } from './Image';
import s from './styles/Cover.module.scss';

type CoverType = {
  setCoverPack: (cover: string) => void;
  deckCover?: string;
};

const MAX_FILE_SIZE = 4000000;

export const Cover = ({ setCoverPack, deckCover }: CoverType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const [cover, setCover] = useState(deckCover || defaultCover);

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      if (file.size < MAX_FILE_SIZE) {
        convertFileToBase64(file, (file64: string) => {
          setCover(file64);
          setCoverPack(file64);
        });
      } else {
        dispatch(setAppErrorAC('The file is too large'));
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Image packCover={cover} isErrorMessageShow styles={s.cover} defaultImage={defaultCover} />

      <label>
        <input type="file" onChange={uploadHandler} style={{ display: 'none' }} accept="image/*" />

        <IconButton component="span" sx={{ borderRadius: '20px' }}>
          <AddToPhotosIcon />
          Add cover
        </IconButton>
      </label>
    </div>
  );
};
