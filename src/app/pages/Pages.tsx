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
import { Packs } from '../../features/packs/Packs';
import { PageNotFound } from '../../features/pageNotFound/PageNotFound';
import { Profile } from '../../features/profile/Profile';

export const Pages = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route index element={<Profile />} />
          <Route path={PATH.PACKS_LIST} element={<Packs />} />
          <Route path={PATH.CARDS_LIST} element={<Cards />} />
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
