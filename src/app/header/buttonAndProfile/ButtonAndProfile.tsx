import React, { useState } from 'react';

import avatar from '../../../assets/img/defultAvatar.png';
import { ReturnComponentType } from '../../../types';
import { useAppSelector } from '../../store/store';

import s from './style/ButtonAndProfile.module.css';
import { ToggleMenu } from './ToggleMenu';

const ButtonAndProfile = (): ReturnComponentType => {
  const name = useAppSelector(state => state.profile.name);
  const [isShowedMenu, setIsShowedMenu] = useState(false);
  const showMenu = (): void => {
    setIsShowedMenu(!isShowedMenu);
  };

  return (
    <div className={s.containerProfile}>
      <div>
        <span>{name}</span>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <img src={avatar} alt="avatar" onClick={showMenu} />
      </div>

      {isShowedMenu && <ToggleMenu />}
    </div>
  );
};

export default ButtonAndProfile;
