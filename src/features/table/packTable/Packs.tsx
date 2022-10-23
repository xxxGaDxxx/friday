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
import s from './style/Packs.module.scss';

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

  const onAddPackClick = (): void => {
    dispatch(addPackTC());
  };

  useEffect(() => {
    dispatch(packDateTC());
  }, [dispatch, pageCount, page]);

  return (
    <div className={s.container}>
      <div className={s.titleButton}>
        <Typography component="h2">Packs list</Typography>
        <Button
          type="button"
          variant="contained"
          color="primary"
          style={{ borderRadius: '20px', zIndex: '3', position: 'relative' }}
          onClick={onAddPackClick}
        >
          Add new pack
        </Button>
      </div>
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
