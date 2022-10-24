import React from 'react';

import { ReturnComponentType } from '../../../../types';

import { AbortSort } from './sortBarComponents/AbortSort';
import { ChoseMyOrAll } from './sortBarComponents/ChoseMyOrAll';
import { Search } from './sortBarComponents/Search';
import { SelectNumberOfCards } from './sortBarComponents/SelectNumberOfCards';

export const SortBar = (): ReturnComponentType => {
  return (
    <div>
      <Search />
      <ChoseMyOrAll />
      <SelectNumberOfCards />
      <AbortSort />
    </div>
  );
};
