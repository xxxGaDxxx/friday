import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types';

const PrivateRoutes = (): ReturnComponentType => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
