import React from 'react';

import Button from '@mui/material/Button';

import { useAppDispatch, useAppSelector } from '../../app/store/store';
import avaImg from '../../assets/img/defultAvatar.png';
import { BackTo } from '../../common/components/backTo/BackTo';
import { EditableSpan } from '../../common/components/editableSpan/EditableSpan';
import { PATH } from '../../common/enum/pathEnum';
import styles from '../../styles/commonStyles.module.scss';
import { ReturnComponentType } from '../../types';

import { logOutUserTC, updateUserNameTC } from './reducer/profileReducer';
import s from './styles/Profile.module.css';

export const Profile = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(state => state.profile.email);
  const userName = useAppSelector(state => state.profile.name);

  const onNameChange = (name: string): void => {
    dispatch(updateUserNameTC({ name, avatar: 'https//avatar-url.img' }));
  };

  const onLogOutClick = (): void => {
    dispatch(logOutUserTC());
  };

  return (
    <>
      <BackTo path={PATH.PACKS_LIST} nameOfPath="Packs List" />
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
    </>
  );
};
