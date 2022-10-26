import React from 'react';

import { ReturnComponentType } from '../../../../../types';

import { AbortSort } from './sortBarComponents/AbortSort';
import { ChoseMyOrAll } from './sortBarComponents/ChoseMyOrAll';
import { Search } from './sortBarComponents/Search';
import { SelectNumberOfCards } from './sortBarComponents/SelectNumberOfCards';
import s from './styles/SortBar.module.scss';

export const SortBar = (): ReturnComponentType => {
  return (
    <div className={s.container}>
      <Search />
      <ChoseMyOrAll />
      <SelectNumberOfCards />
      <AbortSort />
    </div>
  );
};
