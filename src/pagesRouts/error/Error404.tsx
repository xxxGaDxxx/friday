import React from 'react';

import Button from '../../common/button/Button';
import { ReturnComponentType } from '../../types';

import ButtonSvgSelector from './ButtonSvgSelector';
import s from './styles/Error404.module.css';

export const Error404 = (): ReturnComponentType => {
  return (
    <div className={s.container}>
      <div className={s.bloc}>
        <h2>Ooops!</h2>
        <span>Sorry! Page not found!</span>
        <Button>Back to home page</Button>
      </div>
      <ButtonSvgSelector id="error" />
    </div>
  );
};
