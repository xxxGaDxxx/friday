import React from 'react';

import { BackTo } from '../../../common/components/backTo/BackTo';
import { PATH } from '../../../common/enum/pathEnum';
import { ReturnComponentType } from '../../../types';

import s from './CardsList.module.scss';

export const CardsList = (): ReturnComponentType => {
  return (
    <main className={s.main}>
      <BackTo path={PATH.PACKS_LIST} nameOfPath="Packs List" />
    </main>
  );
};
