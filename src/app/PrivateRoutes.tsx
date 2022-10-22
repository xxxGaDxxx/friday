import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { ReturnComponentType } from '../types';

import { useAppSelector } from './store/store';

const PrivateRoutes = (): ReturnComponentType => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
