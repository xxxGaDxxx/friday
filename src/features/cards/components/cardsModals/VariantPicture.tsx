import React from 'react';

import { IconButton } from '@mui/material';

import defaultPicture from '../../../../assets/img/noCover.jpg';
import { ReturnComponentType } from '../../../../common/types';

import s from './style/VariantPicture.module.scss';

type VariantPictureType = {
  questionExists: boolean;
};

export const VariantPicture = ({ questionExists }: VariantPictureType): ReturnComponentType => {
  const uploadHandler = (): void => {};
  const defaultInputValue = questionExists
    ? 'Change picture of question'
    : 'Add picture as question';

  return (
    <section>
      <div className={s.questionRow}>
        <h3>Question</h3>
        <label>
          <input type="file" onChange={uploadHandler} hidden accept="image/png, image/jpeg" />
          <IconButton component="span">{defaultInputValue}</IconButton>
        </label>
      </div>
      <div className={s.picture}>
        <img src={defaultPicture || defaultPicture} alt="question should be here" />
      </div>
    </section>
  );
};
