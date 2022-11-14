import React, { ChangeEvent, useEffect, useState } from 'react';

import { IconButton } from '@mui/material';

import defaultPicture from '../../../../assets/img/noCover.jpg';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../../common/types';
import { convertFileToBase64 } from '../../../../common/utils/convertFileToBase64';
import { setAppErrorAC } from '../../../../store/app-reducer';

import s from './style/VariantPicture.module.scss';

type VariantPictureType = {
  setPictureQuestion: (newPicture: string) => void;
  pictureQuestion?: string;
  isErrorMessageShow: boolean;
};

const MAX_FILE_SIZE = 4000000;

export const VariantPicture = ({
  isErrorMessageShow,
  setPictureQuestion,
  pictureQuestion,
}: VariantPictureType): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const [picture, setPicture] = useState(pictureQuestion || defaultPicture);
  const [isPictureBroken, setIsPictureBroken] = useState(false);

  const defaultInputValue = pictureQuestion
    ? 'Change picture for question'
    : 'Add picture as question';

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      if (file.size < MAX_FILE_SIZE) {
        convertFileToBase64(file, (file64: string) => {
          setPicture(file64);
          setPictureQuestion(file64);
        });
      } else {
        dispatch(setAppErrorAC('The file is too large'));
      }
    }
  };
  const errorHandler = (): void => {
    setIsPictureBroken(true);
    if (isErrorMessageShow) dispatch(setAppErrorAC('Broken picture'));
  };

  useEffect(() => {
    if (isPictureBroken) {
      setIsPictureBroken(false);
    }
  }, [isPictureBroken]);

  return (
    <section>
      <div className={s.questionRow}>
        <h3>Question</h3>
        <label>
          <input type="file" onChange={uploadHandler} hidden accept="image/*" />
          <IconButton component="span">{defaultInputValue}</IconButton>
        </label>
      </div>
      <div className={s.picture}>
        <img
          src={isPictureBroken ? defaultPicture : picture}
          onError={errorHandler}
          alt="questionPicture should be here"
        />
      </div>
    </section>
  );
};
