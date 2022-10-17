import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '../../features/auth/login/Login';
import { NewPassword } from '../../features/auth/password/newPassword/NewPassword';
import CheckEmail from '../../features/auth/password/recoveryPasword/CheckEmail';
import { RecoveryPassword } from '../../features/auth/password/recoveryPasword/RecoveryPassword';
import { Registration } from '../../features/auth/registration/Registration';
import { DemonstrationComponent } from '../../features/demonstration/DemonstrationComponent';
import { Error404 } from '../../features/error/Error404';
import { Profile } from '../../features/profile/Profile';
import { ReturnComponentType } from '../../types';

export const PATH = {
  LOGIN: '/',
  REGISTRATION: '/registration',
  PROFILE: '/profile',
  NEW_PASSWORD: '/new_password/*',
  RECOVERY_PASSWORD: '/recovery_password',
  DEMONSTRATION: '/demonstration',
  ERRORS: '/error',
  CHECK_EMAIL: '/check_email',
};

export const Pages = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.ERRORS} element={<Error404 />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.NEW_PASSWORD} element={<NewPassword />} />
        <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword />} />
        <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
        <Route path={PATH.DEMONSTRATION} element={<DemonstrationComponent />} />

        <Route path="*" element={<Navigate to={PATH.ERRORS} />} />
      </Routes>
    </div>
  );
};
