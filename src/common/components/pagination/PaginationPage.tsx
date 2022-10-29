import React, { ChangeEvent, memo, useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types';

import s from './styles/Pagination.module.scss';
import { PaginationPageType } from './type/PaginationPageType';

export const PaginationPage = memo(
  ({
    itemsPerPage,
    selectPage,
    changeCountItemsPerPage,
  }: PaginationPageType): ReturnComponentType => {
    const totalItems = useAppSelector(state => state.pack.cardPacksTotalCount); // add props

    const [valueItemsPerPage, setValueItemsPerPage] = useState<number>(itemsPerPage);

    const pageCount = Math.ceil(totalItems / valueItemsPerPage);

    const onPageClick = (event: ChangeEvent<unknown>, page: number): void => {
      selectPage(page);
    };

    const onItemsPerPageChange = (): void => {
      changeCountItemsPerPage(valueItemsPerPage);
    };

    const changeSearchValue = (event: SelectChangeEvent): void => {
      setValueItemsPerPage(Number(event.target.value));
    };

    return (
      <div className={s.container}>
        <Stack spacing={2}>
          <Pagination count={pageCount} shape="rounded" color="primary" onChange={onPageClick} />
        </Stack>
        <span>Show</span>
        <Select
          value={valueItemsPerPage.toString()}
          onChange={changeSearchValue}
          onMouseLeave={onItemsPerPageChange}
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
