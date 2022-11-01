import React from 'react';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import checkEmail from '../../../assets/svg/checkEmail.svg';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import style from '../../../common/scss/commonStyles.module.scss';
import { ReturnComponentType } from '../../../common/types';
import s from '../../login/styles/Login.module.scss';

const CheckEmail = (): ReturnComponentType => {
  const email = useAppSelector(state => state.recovery.email);

  const navigate = useNavigate();

  const goToLoginPage = (): void => {
    navigate(PATH.LOGIN);
  };

  return (
    <div className={style.container}>
      <h2>CheckEmail</h2>

      <img src={checkEmail} alt="check email" />

      <div className={s.loginFooter}>
        <p>We’ve sent an Email with instructions to {email}</p>

        <Button type="button" onClick={goToLoginPage}>
          Back to login
        </Button>
      </div>
    </div>
  );
};

export default CheckEmail;
