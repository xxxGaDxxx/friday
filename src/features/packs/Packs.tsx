import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

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
  setQueryParamsAC,
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
  const queryParams = useAppSelector(state => state.pack.queryParams);

  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const changePacksPerPage = (count: number): void => {
    searchParams.set('pageCount', count.toString());

    setSearchParams(searchParams);

    dispatch(setQueryParamsAC({ pageCount: count.toString() }));
  };

  const setSelectedPage = (page: number): void => {
    searchParams.set('page', page.toString());

    setSearchParams(searchParams);

    dispatch(setQueryParamsAC({ page: page.toString() }));
  };

  const addPack = (titlePack: string, privatePack: boolean, cover: string): void => {
    dispatch(addPackTC(titlePack, privatePack, cover));
  };

  useEffect(() => {
    const page = searchParams.get('page');
    const pageCount = searchParams.get('pageCount');

    if (page) {
      dispatch(setQueryParamsAC({ ...searchParams, page }));
      dispatch(setSelectedPageAC(Number(page)));
    }
    if (pageCount) {
      dispatch(setQueryParamsAC({ ...searchParams, pageCount }));
      dispatch(setPacksPerPageAC(Number(pageCount)));
    }

    dispatch(packDataTC());
  }, [dispatch, sortPacks, userId, minMaxCount, packName, searchParams]);

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
          page={queryParams.page ? Number(queryParams.page) : page}
          totalItems={cardPacksTotalCount}
          itemsPerPage={pageCount}
          selectPage={setSelectedPage}
          changeCountItemsPerPage={changePacksPerPage}
        />
      </div>
    </div>
  );
};
