import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { PaginationPage } from '../../../common/pagination/PaginationPage';
import { ReturnComponentType } from '../../../types';

import { PackTable } from './PackTable';
import { packDateTC, setPacksPerPageAC } from './reducer/packTableReducer';

export const Packs = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.pack.page);
  const pageCount = useAppSelector(state => state.pack.pageCount);
  const [selectedPage, setSelectedPage] = useState(page);
  const changePacksPerPage = (count: number): void => {
    dispatch(setPacksPerPageAC(count));
  };

  useEffect(() => {
    const params = {
      page: selectedPage,
      pageCount,
    };

    dispatch(packDateTC(params));
  }, [dispatch, pageCount, selectedPage]);

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
