import React from 'react';

import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

import { PATH } from '../../../common/enum/pathEnum';
import { logOutUserTC } from '../../../features/profile/profile-reducer';
import { ReturnComponentType } from '../../../types';
import { useAppDispatch } from '../../store/store';

export const ToggleMenu = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const onLogOutClick = (): void => {
    dispatch(logOutUserTC());
  };

  return (
    <Paper elevation={3}>
      <NavLink to={PATH.PROFILE}>Profile</NavLink>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={onLogOutClick}>Log out</div>
    </Paper>
  );
};
