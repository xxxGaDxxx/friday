import React from 'react';

import { Navigate } from 'react-router-dom';

import { PATH } from '../../app/pages/Pages';
import { useAppSelector } from '../../app/store/store';
import { ReturnComponentType } from '../../types';

export const Profile = (): ReturnComponentType => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return <div>Profile</div>;
};
