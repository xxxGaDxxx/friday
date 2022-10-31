import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateRoutes from '../../common/components/privateRoutes/PrivateRoutes';
import { PATH } from '../../common/enum/pathEnum';
import { ReturnComponentType } from '../../common/types';
import { Login } from '../../features/auth/login/Login';
import { NewPassword } from '../../features/auth/newPassword/NewPassword';
import CheckEmail from '../../features/auth/recoveryPasword/CheckEmail';
import { RecoveryPassword } from '../../features/auth/recoveryPasword/RecoveryPassword';
import { Registration } from '../../features/auth/registration/Registration';
import { Cards } from '../../features/cards/Cards';
import { Learn } from '../../features/learn/Learn';
import { Packs } from '../../features/packs/Packs';
import { PageNotFound } from '../../features/pageNotFound/PageNotFound';
import { Profile } from '../../features/profile/Profile';

export const Pages = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route index element={<Profile />} />
          <Route path={PATH.PACKS} element={<Packs />} />
          <Route path={PATH.CARDS} element={<Cards />} />
        </Route>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.PAGE_NOT_FOUND} element={<PageNotFound />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.NEW_PASSWORD} element={<NewPassword />} />
        <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword />} />
        <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
        <Route path={PATH.LEARN} element={<Learn />} />
        <Route path="*" element={<Navigate to={PATH.PAGE_NOT_FOUND} />} />
      </Routes>
    </div>
  );
};
