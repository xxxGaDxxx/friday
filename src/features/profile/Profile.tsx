import React from 'react';

import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../app/pages/Pages';
import { useAppDispatch, useAppSelector } from '../../app/store/store';
import avaImg from '../../assets/img/defultAvatar.png';
import { EditableSpan } from '../../common/editableSpan/EditableSpan';
import styles from '../../styles/commonStyles.module.css';
import { ReturnComponentType } from '../../types';

import { logOutUserTC, updateUserNameTC } from './profile-reducer';
import s from './styles/Profile.module.css';

export const Profile = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const email = useAppSelector(state => state.profile.email);
  const userName = useAppSelector(state => state.profile.name);

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
    <div className={styles.container}>
      <h2 className={s.header}>Personal Information</h2>
      <img src={avaImg} alt="ava" />
      <div className={s.editableName}>
        <EditableSpan onChange={onNameChange} value={userName} />
      </div>
      <div className={s.email}>{email}</div>
      <Button onClick={onLogOutClick} color="primary" variant="outlined">
        Log out
      </Button>
    </div>
  );
};
