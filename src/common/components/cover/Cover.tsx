import React, { ChangeEvent, useState } from 'react';

import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { IconButton } from '@mui/material';

import defaultCover from '../../../assets/img/noCover.jpg';
import { setAppErrorAC } from '../../../store/app-reducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ReturnComponentType } from '../../types';

type CoverType = {
  setCoverPack: (cover: string) => void;
  deckCover?: string;
};

export const Cover = ({ setCoverPack, deckCover }: CoverType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const [cover, setCover] = useState(deckCover || defaultCover);
  const [isAvaBroken, setIsAvaBroken] = useState(false);

  const SIZE_FILE = 4000000;

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      if (file.size < SIZE_FILE) {
        convertFileToBase64(file, (file64: string) => {
          setCover(file64);
          setCoverPack(file64);
        });
      } else {
        dispatch(setAppErrorAC('Файл слишком большого размера'));
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

  const errorHandler = (): void => {
    setIsAvaBroken(true);
    dispatch(setAppErrorAC('Кривая картинка'));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={isAvaBroken ? defaultCover : cover}
        style={{ width: '200px', height: '100px', margin: '15px 0' }}
        onError={errorHandler}
        alt="ava"
      />

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
