import React, { useEffect } from 'react';

import { PaginationPage } from '../../common/components/pagination/PaginationPage';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types';

import { AddNewPack } from './components/AddNewPack';
import { FilterBar } from './components/FilterBar';
import { PacksTableGeneral } from './components/PacksTableGeneral';
import {
  addPackTC,
  packDataTC,
  setPacksPerPageAC,
  setSelectedPageAC,
} from './reducer/packsReducer';
import s from './style/Packs.module.scss';

export const Packs = (): ReturnComponentType => {
  const page = useAppSelector(state => state.pack.page);
  const pageCount = useAppSelector(state => state.pack.pageCount);
  const packName = useAppSelector(state => state.pack.packName);
  const sortPacks = useAppSelector(state => state.pack.sortPacks);
  const userId = useAppSelector(state => state.pack.user_id);
  const minMaxCount = useAppSelector(state => state.pack.minMaxCount);
  const cardPacksTotalCount = useAppSelector(state => state.pack.cardPacksTotalCount);

  const dispatch = useAppDispatch();

  const changePacksPerPage = (count: number): void => {
    dispatch(setPacksPerPageAC(count));
  };

  const setSelectedPage = (page: number): void => {
    dispatch(setSelectedPageAC(page));
  };

  const addPack = (titlePack: string, privatePack: boolean): void => {
    dispatch(addPackTC(titlePack, privatePack));
  };

  useEffect(() => {
    dispatch(packDataTC());
  }, [dispatch, pageCount, page, sortPacks, userId, minMaxCount, packName]);

  return (
    <div className={s.container}>
      <div className={s.titleButton}>
        <AddNewPack onAddPackClick={addPack} />
      </div>

      <FilterBar />

      <div className={s.packTable}>
        <PacksTableGeneral />
      </div>

      <div className={s.pagination}>
        <PaginationPage
          totalItems={cardPacksTotalCount}
          itemsPerPage={pageCount}
          selectPage={setSelectedPage}
          changeCountItemsPerPage={changePacksPerPage}
        />
      </div>
    </div>
  );
};
