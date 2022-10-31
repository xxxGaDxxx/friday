import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { SortDirection } from '../../../../common/components/sortDirection/SortDirection';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../../common/types';
import { onSortRows } from '../../../../common/utils/sortRows';

export const HatTable = (): ReturnComponentType => {
  const sortPacks = useAppSelector(state => state.pack.sortPacks);
  const dispatch = useAppDispatch();

  return (
    <TableHead>
      <TableRow sx={{ background: '#EFEFEF' }}>
        <TableCell onClick={() => onSortRows('name', dispatch, sortPacks)}>
          Name
          {sortPacks === '0name' || sortPacks === '1name' ? <SortDirection sort={sortPacks} /> : ''}
        </TableCell>
        <TableCell align="right" onClick={() => onSortRows('card', dispatch, sortPacks)}>
          Cards
          {sortPacks === '0cardsCount' || sortPacks === '1cardsCount' ? (
            <SortDirection sort={sortPacks} />
          ) : (
            ''
          )}
        </TableCell>
        <TableCell align="right" onClick={() => onSortRows('updated', dispatch, sortPacks)}>
          Last Updated
          {sortPacks === '0updated' || sortPacks === '1updated' ? (
            <SortDirection sort={sortPacks} />
          ) : (
            ''
          )}
        </TableCell>
        <TableCell align="right" onClick={() => onSortRows('user_name', dispatch, sortPacks)}>
          Created by
          {sortPacks === '0user_name' || sortPacks === '1user_name' ? (
            <SortDirection sort={sortPacks} />
          ) : (
            ''
          )}
        </TableCell>
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};
