import React, { ChangeEvent, memo } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import { ReturnComponentType } from '../../types';

import s from './styles/Pagination.module.scss';

type PaginationPageType = {
  itemsPerPage: number;
  selectPage: (page: number) => void;
  changeCountItemsPerPage: (itemsPerPage: number) => void;
  totalItems: number;
  page?: number;
};

export const PaginationPage = memo(
  ({
    itemsPerPage,
    selectPage,
    changeCountItemsPerPage,
    totalItems,
    page,
  }: PaginationPageType): ReturnComponentType => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const choosePage = (event: ChangeEvent<unknown>, page: number): void => {
      selectPage(page);
    };
    const changeItemsPerPage = (event: SelectChangeEvent): void => {
      changeCountItemsPerPage(Number(event.target.value));
    };

    return (
      <div className={s.container}>
        <Stack spacing={2}>
          <Pagination
            page={page}
            count={pageCount}
            shape="rounded"
            color="primary"
            onChange={choosePage}
          />
        </Stack>
        <span>Show</span>
        <Select
          value={itemsPerPage.toString()}
          onChange={changeItemsPerPage}
          size="small"
          defaultValue={itemsPerPage.toString()}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>
        <span>Items per Page</span>
      </div>
    );
  },
);
