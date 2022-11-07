import React, { useEffect } from 'react';

import Button from '@mui/material/Button';

import { BackTo } from '../../common/components/backTo/BackTo';
import { EditableSpan } from '../../common/components/editableSpan/EditableSpan';
import { PATH } from '../../common/enum/pathEnum';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import styles from '../../common/scss/commonStyles.module.scss';
import { ReturnComponentType } from '../../common/types';

import { Avatar } from './components/Avatar';
import { logOutTC, setUserNameAC, updateUserNameTC } from './reducer/profileReducer';
import s from './styles/Profile.module.scss';

export const Profile = (): ReturnComponentType => {
  const email = useAppSelector(state => state.profile.email);
  const userName = useAppSelector(state => state.profile.name);
  const avatar = useAppSelector(state => state.profile.avatar);

  const dispatch = useAppDispatch();

  const onNameChange = (name: string): void => {
    dispatch(setUserNameAC(name));
  };

  const onLogOutClick = (): void => {
    dispatch(logOutTC());
  };

  useEffect(() => {
    dispatch(updateUserNameTC());
  }, [dispatch, userName, avatar]);

  return (
    <main style={{ padding: '0 17%', background: '#F9F9FA', height: '91vh' }}>
      <BackTo path={PATH.PACKS} nameOfPath="Packs List" />

      <div className={styles.container}>
        <h2 className={s.header}>Personal Information</h2>

        <Avatar srcAvatarImage={avatar} />

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
