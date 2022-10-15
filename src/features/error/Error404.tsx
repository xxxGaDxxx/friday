import React from 'react';

import { useNavigate } from 'react-router-dom';

import { PATH } from '../../app/pages/Pages';
import Button from '../../common/button/Button';
import { ReturnComponentType } from '../../types';

import ButtonSvgSelector from './ButtonSvgSelector';
import s from './styles/Error404.module.css';

export const Error404 = (): ReturnComponentType => {
  const navigate = useNavigate();

  const onBackToHomePageClick = (): void => {
    navigate(PATH.PROFILE);
  };

  return (
    <div className={s.container}>
      <div className={s.bloc}>
        <h2>Ooops!</h2>
        <span>Sorry! Page not found!</span>
        <Button onClick={onBackToHomePageClick}>Back to home page</Button>
      </div>
      <ButtonSvgSelector />
    </div>
  );
};
