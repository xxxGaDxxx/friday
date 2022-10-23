import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { PaginationPage } from '../../../common/components/pagination/PaginationPage';
import { ReturnComponentType } from '../../../types';

import { PackTable } from './PackTable';
import { packDateTC, setPacksPerPageAC, setSelectedPageAC } from './reducer/packTableReducer';

export const Packs = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.pack.page);
  const pageCount = useAppSelector(state => state.pack.pageCount);

  const changePacksPerPage = (count: number): void => {
    dispatch(setPacksPerPageAC(count));
  };
  const setSelectedPage = (page: number): void => {
    dispatch(setSelectedPageAC(page));
  };

  useEffect(() => {
    dispatch(packDateTC());
  }, [dispatch, pageCount, page]);

  return (
    <div>
      <PackTable />
      <PaginationPage
        itemsPerPage={pageCount}
        selectPage={setSelectedPage}
        changeCountItemsPerPage={changePacksPerPage}
      />
    </div>
  );
};
