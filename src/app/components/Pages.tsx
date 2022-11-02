import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { PageNotFound } from '../../common/components/pageNotFound/PageNotFound';
import PrivateRoutes from '../../common/components/privateRoutes/PrivateRoutes';
import { PATH } from '../../common/enum/pathEnum';
import { ReturnComponentType } from '../../common/types';
import { Cards } from '../../features/cards/Cards';
import { Learn } from '../../features/learn/Learn';
import { Login } from '../../features/login/Login';
import { Packs } from '../../features/packs/Packs';
import { Profile } from '../../features/profile/Profile';
import CheckEmail from '../../features/recoveryPassword/components/CheckEmail';
import { NewPassword } from '../../features/recoveryPassword/components/NewPassword';
import { RecoveryPassword } from '../../features/recoveryPassword/RecoveryPassword';
import { Registration } from '../../features/registration/Registration';

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
