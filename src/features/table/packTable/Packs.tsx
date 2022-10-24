import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { PaginationPage } from '../../../common/components/pagination/PaginationPage';
import { ReturnComponentType } from '../../../types';

import { PackTable } from './PackTable';
import {
  addPackTC,
  packDateTC,
  setPacksPerPageAC,
  setSelectedPageAC,
} from './reducer/packTableReducer';
import { SortBar } from './sortBar/SortBar';
import s from './style/Packs.module.scss';

export const Packs = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.pack.page);
  const pageCount = useAppSelector(state => state.pack.pageCount);
  const packName = useAppSelector(state => state.pack.packName);

  const changePacksPerPage = (count: number): void => {
    dispatch(setPacksPerPageAC(count));
  };
  const setSelectedPage = (page: number): void => {
    dispatch(setSelectedPageAC(page));
  };

  const onAddPackClick = (): void => {
    dispatch(addPackTC());
  };

  useEffect(() => {
    dispatch(packDateTC());
  }, [dispatch, pageCount, page, packName]);

  return (
    <div className={s.container}>
      <div className={s.titleButton}>
        <Typography component="h2">Packs list</Typography>
        <Button
          type="button"
          variant="contained"
          color="primary"
          style={{ borderRadius: '20px' }}
          onClick={onAddPackClick}
        >
          Add new pack
        </Button>
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
