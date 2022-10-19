import React from 'react';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import imgIncubator from '../../assets/img/Group 753.png';
import { ReturnComponentType } from '../../types';
import ButtonAndProfile from '../buttutAndProfile/ButtonAndProfile';
import { PATH } from '../pages/Pages';
import { useAppSelector } from '../store/store';

import s from './Header.module.scss';

export const Header = (): ReturnComponentType => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  const navigate = useNavigate();

  const onSignInClick = (): void => {
    return navigate(PATH.LOGIN);
  };

  return (
    <div className={s.header}>
      <img className={s.iconIT} src={imgIncubator} alt="IT-INCUBATOR" />

      {!isLoggedIn ? (
        <Button
          onClick={onSignInClick}
          style={{ borderRadius: '20px' }}
          color="primary"
          variant="contained"
          type="button"
        >
          Sign in
        </Button>
      ) : (
        <ButtonAndProfile />
      )}
    </div>
  );
};
