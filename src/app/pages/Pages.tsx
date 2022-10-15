import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '../../features/auth/login/Login';
import { NewPassword } from '../../features/auth/password/newPassword/NewPassword';
import { RecoveryPassword } from '../../features/auth/password/recoveryPasword/RecoveryPassword';
import { Registration } from '../../features/auth/registration/Registration';
import { DemonstrationComponent } from '../../features/demonstration/DemonstrationComponent';
import { Error404 } from '../../features/error/Error404';
import { Profile } from '../../features/profile/Profile';
import { ReturnComponentType } from '../../types';

export const PATH = {
  LOGIN: '/login',
  REGISTRATION: '/registration',
  PROFILE: '/profile',
  NEW_PASSWORD: '/new_password',
  RECOVERY_PASSWORD: '/recovery_password',
  DEMONSTRATION: '/demonstration',
  ERRORS: '/error',
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
        <Route path={PATH.ERRORS} element={<Error404 />} />

        <Route path="*" element={<Navigate to={PATH.ERRORS} />} />
      </Routes>
    </div>
  );
};
