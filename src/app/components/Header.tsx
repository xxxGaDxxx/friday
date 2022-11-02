import React, { memo } from 'react';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import imgIncubator from '../../assets/svg/Group 753.svg';
import { PATH } from '../../common/enum/pathEnum';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types';

import s from './styles/Header.module.scss';
import { UserNameAndAva } from './UserNameAndAva';

export const Header = memo((): ReturnComponentType => {
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
        <UserNameAndAva />
      )}
    </div>
  );
});
