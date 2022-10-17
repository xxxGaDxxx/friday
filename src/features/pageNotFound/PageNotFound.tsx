import React from 'react';

import { useNavigate } from 'react-router-dom';

import { PATH } from '../../app/pages/Pages';
import svgError from '../../assets/svg/error/404.svg';
import Button from '../../common/button/Button';
import { ReturnComponentType } from '../../types';

import s from './styles/PageNotFound.module.css';

export const PageNotFound = (): ReturnComponentType => {
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
      <img src={svgError} alt="Error" />
    </div>
  );
};
