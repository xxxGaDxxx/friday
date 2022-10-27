import React, { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { PaginationPage } from '../../../common/components/pagination/PaginationPage';
import { ReturnComponentType } from '../../../common/types';

import { AddNewPack } from './PackComponent/AddNewPack';
import { PackTable } from './PackComponent/PackTable';
import { SortBar } from './PackComponent/sortBar/SortBar';
import {
  addPackTC,
  packDateTC,
  setPacksPerPageAC,
  setSelectedPageAC,
} from './reducer/packTableReducer';
import s from './style/Packs.module.scss';

export const Packs = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.pack.page);
  const pageCount = useAppSelector(state => state.pack.pageCount);
  const packName = useAppSelector(state => state.pack.packName);
  const sortPacks = useAppSelector(state => state.pack.sortPacks);
  const userId = useAppSelector(state => state.pack.user_id);
  const minMaxCount = useAppSelector(state => state.pack.minMaxCount);

  const changePacksPerPage = useCallback(
    (count: number): void => {
      dispatch(setPacksPerPageAC(count));
    },
    [dispatch],
  );
  const setSelectedPage = useCallback(
    (page: number): void => {
      dispatch(setSelectedPageAC(page));
    },
    [dispatch],
  );

  const onAddPackClick = useCallback((): void => {
    dispatch(addPackTC());
  }, [dispatch]);

  useEffect(() => {
    dispatch(packDateTC());
  }, [dispatch, pageCount, page, packName, sortPacks, userId, minMaxCount]);

  return (
    <div className={s.container}>
      <div className={s.titleButton}>
        <AddNewPack onAddPackClick={onAddPackClick} />
      </div>

      <SortBar />

      <div className={s.packTable}>
        <PackTable />
      </div>

      <div className={s.pagination}>
        <PaginationPage
          itemsPerPage={pageCount}
          selectPage={setSelectedPage}
          changeCountItemsPerPage={changePacksPerPage}
        />
      </div>
    </div>
  );
};
