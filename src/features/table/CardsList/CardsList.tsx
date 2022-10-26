import React from 'react';

import { BackTo } from '../../../common/components/backTo/BackTo';
import { PATH } from '../../../common/enum/pathEnum';
import { ReturnComponentType } from '../../../types';

export const CardsList = (): ReturnComponentType => {
  return (
    <main>
      <BackTo path={PATH.PACKS_LIST} nameOfPath="Packs List" />
    </main>
  );
};
