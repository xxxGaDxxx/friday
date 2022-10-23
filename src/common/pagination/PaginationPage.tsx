import React, { ChangeEvent } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import { useAppSelector } from '../../app/store/store';
import { ReturnComponentType } from '../../types';

import s from './styles/Pagination.module.scss';

type PaginationPageType = {
  itemsPerPage: number;
  selectPage: (page: number) => void;
  changeCountItemsPerPage: (itemsPerPage: number) => void;
};

export const PaginationPage = ({
  itemsPerPage,
  selectPage,
  changeCountItemsPerPage,
}: PaginationPageType): ReturnComponentType => {
  const totalItems = useAppSelector(state => state.pack.cardPacksTotalCount); // add props

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const onPageClick = (event: ChangeEvent<unknown>, page: number): void => {
    selectPage(page);
  };
  const onItemsPerPageChange = (event: SelectChangeEvent): void => {
    changeCountItemsPerPage(Number(event.target.value));
  };

  return (
    <div className={s.container}>
      <Stack spacing={2}>
        <Pagination count={pageCount} shape="rounded" color="primary" onChange={onPageClick} />
      </Stack>
      <span>Show</span>
      <Select
        value={itemsPerPage.toString()}
        onChange={onItemsPerPageChange}
        size="small"
        defaultValue={itemsPerPage.toString()}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
      <span>Cards per Page</span>
    </div>
  );
};
