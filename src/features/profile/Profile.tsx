import React from 'react';

import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../app/pages/Pages';
import { useAppDispatch, useAppSelector } from '../../app/store/store';
import avaImg from '../../assets/img/defultAvatar.png';
import { ReturnComponentType } from '../../types';

import { EditableName } from './EditableName/EditableName';
import { logOutUserTC, updateUserNameTC } from './profile-reducer';
import style from './Profile.module.css';

export const Profile = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const name = useAppSelector(state => state.profile.name);
  const email = useAppSelector(state => state.profile.email);

  const onNameChange = (name: string): void => {
    dispatch(updateUserNameTC({ name, avatar: 'https//avatar-url.img' }));
  };

  const onLogOutClick = (): void => {
    dispatch(logOutUserTC());
  };

  if (!isLoggedIn) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div style={{ marginTop: '50px' }}>
      <div className={style.profileWrapper}>
        <h2>Personal Information</h2>
        <img src={avaImg} alt="ava" />
        <div className={style.editableName}>
          <EditableName value={name} onChange={onNameChange} />
        </div>
        <div>{email}</div>
        <Button onClick={onLogOutClick} color="primary" variant="outlined">
          Log out
        </Button>
      </div>
    </div>
  );
};
