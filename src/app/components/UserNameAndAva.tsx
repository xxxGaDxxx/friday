import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';

import avatar from '../../assets/img/defultAvatar.png';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types';

import s from './styles/UserNameAndAva.module.scss';
import { UserMenu } from './UserMenu';

export const UserNameAndAva = (): ReturnComponentType => {
  const name = useAppSelector(state => state.profile.name);

  const [isShowedMenu, setIsShowedMenu] = useState(false);

  const showMenu = (): void => {
    setIsShowedMenu(!isShowedMenu);
  };

  return (
    <div className={s.container}>
      <div className={s.containerProfile}>
        <span>{name}</span>
        <Avatar src={avatar} alt="avatar" onClick={showMenu} />
      </div>
      <div className={s.menu} style={{ zIndex: '10' }}>
        {isShowedMenu && <UserMenu hideMenu={showMenu} />}
      </div>
    </div>
  );
};
