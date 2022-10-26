import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';

import avatar from '../../../assets/img/defultAvatar.png';
import { ReturnComponentType } from '../../../types';
import { useAppSelector } from '../../store/store';

import s from './style/ButtonAndProfile.module.scss';
import { ToggleMenu } from './ToggleMenu';

const ButtonAndProfile = (): ReturnComponentType => {
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
        {isShowedMenu && <ToggleMenu hideMenu={showMenu} />}
      </div>
    </div>
  );
};

export default ButtonAndProfile;
