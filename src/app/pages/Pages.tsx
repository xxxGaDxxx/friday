import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH } from '../../common/enum/pathEnum';
import { Login } from '../../features/auth/login/Login';
import { NewPassword } from '../../features/auth/password/newPassword/NewPassword';
import CheckEmail from '../../features/auth/password/recoveryPasword/CheckEmail';
import { RecoveryPassword } from '../../features/auth/password/recoveryPasword/RecoveryPassword';
import { Registration } from '../../features/auth/registration/Registration';
import { PageNotFound } from '../../features/pageNotFound/PageNotFound';
import { Profile } from '../../features/profile/Profile';
import { PackTable } from '../../features/table/packTable/PackTable';
import { ReturnComponentType } from '../../types';
import PrivateRoutes from '../PrivateRoutes';

export const Pages = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route index element={<Profile />} />
          <Route path={PATH.PACKS_LIST} element={<PackTable />} />
        </Route>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.ERRORS} element={<PageNotFound />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.NEW_PASSWORD} element={<NewPassword />} />
        <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword />} />
        <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
        <Route path="*" element={<Navigate to={PATH.ERRORS} />} />
      </Routes>
    </div>
  );
};
