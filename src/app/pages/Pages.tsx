import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '../../pagesRouts/auth/login/Login';
import { NewPassword } from '../../pagesRouts/auth/password/newPassword/NewPassword';
import { RecoveryPassword } from '../../pagesRouts/auth/password/recoveryPasword/RecoveryPassword';
import { Registration } from '../../pagesRouts/auth/registration/Registration';
import { DemonstrationComponent } from '../../pagesRouts/demonstration/DemonstrationComponent';
import { Error404 } from '../../pagesRouts/error/Error404';
import { Profile } from '../../pagesRouts/profile/Profile';
import { ReturnComponentType } from '../../types';

export const PATH = {
  LOGIN: '/login',
  REGISTRATION: '/registration',
  PROFILE: '/profile',
  NEW_PASSWORD: '/new_password',
  RECOVERY_PASSWORD: '/recovery_password',
  DEMONSTRATION: '/demonstration',
};

export const Pages = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={PATH.LOGIN} />} />

        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.NEW_PASSWORD} element={<NewPassword />} />
        <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword />} />
        <Route path={PATH.DEMONSTRATION} element={<DemonstrationComponent />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};
