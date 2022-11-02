import React from 'react';

import Button from '@mui/material/Button';

import avaImg from '../../assets/img/defultAvatar.png';
import { BackTo } from '../../common/components/backTo/BackTo';
import { EditableSpan } from '../../common/components/editableSpan/EditableSpan';
import { PATH } from '../../common/enum/pathEnum';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import styles from '../../common/scss/commonStyles.module.scss';
import { ReturnComponentType } from '../../common/types';

import { logOutTC, updateUserNameTC } from './reducer/profileReducer';
import s from './styles/Profile.module.scss';

export const Profile = (): ReturnComponentType => {
  const email = useAppSelector(state => state.profile.email);
  const userName = useAppSelector(state => state.profile.name);

  const dispatch = useAppDispatch();

  const onNameChange = (name: string): void => {
    dispatch(updateUserNameTC({ name, avatar: 'https//avatar-url.img' }));
  };

  const onLogOutClick = (): void => {
    dispatch(logOutTC());
  };

  return (
    <main style={{ padding: '0 17%', background: '#F9F9FA', height: '91vh' }}>
      <BackTo path={PATH.PACKS} nameOfPath="Packs List" />

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
    </main>
  );
};
