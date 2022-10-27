import React from 'react';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import svgError from '../../assets/svg/error/404.svg';
import { PATH } from '../../common/enum/pathEnum';
import { ReturnComponentType } from '../../common/types';

import s from './styles/PageNotFound.module.scss';

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
        <Button
          className={s.buttonSignUp}
          type="button"
          variant="outlined"
          onClick={onBackToHomePageClick}
        >
          Back to home page
        </Button>
      </div>
      <img src={svgError} alt="Error" />
    </div>
  );
};
