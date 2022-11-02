import React from 'react';

import { Search } from '../../../common/components/search/Search';
import { ReturnComponentType } from '../../../common/types';
import { setPackNameAC } from '../reducer/packsReducer';

import { CancelFilter } from './CancelFilter';
import { ChooseMyOrAll } from './ChooseMyOrAll';
import { SelectNumberOfCards } from './SelectNumberOfCards';
import s from './styles/SortBar.module.scss';

export const FilterBar = (): ReturnComponentType => {
  return (
    <div className={s.container}>
      <Search action={setPackNameAC} />
      <ChooseMyOrAll />
      <SelectNumberOfCards />
      <CancelFilter />
    </div>
  );
};
