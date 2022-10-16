import React from 'react';

import avatar from '../../assets/img/defultAvatar.png';
import { ReturnComponentType } from '../../types';
import { useAppSelector } from '../store/store';

import s from './style/ButtonAndProfile.module.css';

const ButtonAndProfile = (): ReturnComponentType => {
  const name = useAppSelector(state => state.profile.name);

  return (
    <div className={s.containerProfile}>
      <span>{name}</span>
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default ButtonAndProfile;
