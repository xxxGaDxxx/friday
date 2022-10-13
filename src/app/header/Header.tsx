import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from '../../types';
import { PATH } from '../pages/Pages';

import s from './Header.module.css';

export const Header = (): ReturnComponentType => {
  return (
    <div className={s.header}>
      <NavLink to={PATH.LOGIN}>Login</NavLink>
      <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
      <NavLink to={PATH.PROFILE}>Profile</NavLink>
      <NavLink to={PATH.NEW_PASSWORD}>New password</NavLink>
      <NavLink to={PATH.RECOVERY_PASSWORD}>Recovery password</NavLink>
      <NavLink to={PATH.DEMONSTRATION}>Demonstration component</NavLink>
    </div>
  );
};
