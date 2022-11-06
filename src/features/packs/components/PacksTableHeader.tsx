import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { SortDirection } from '../../../common/components/sortDirection/SortDirection';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { sortRows } from '../../../common/utils/sortRows';

export const PacksTableHeader = (): ReturnComponentType => {
  const sortPacks = useAppSelector(state => state.pack.sortPacks);
  const dispatch = useAppDispatch();

  return (
    <TableHead>
      <TableRow sx={{ background: '#EFEFEF' }}>
        <TableCell onClick={() => sortRows('name', dispatch, sortPacks)} sx={{ cursor: 'pointer' }}>
          Name
          {sortPacks === '0name' || sortPacks === '1name' ? <SortDirection sort={sortPacks} /> : ''}
        </TableCell>

        <TableCell onClick={() => sortRows('card', dispatch, sortPacks)} sx={{ cursor: 'pointer' }}>
          Cards
          {sortPacks === '0cardsCount' || sortPacks === '1cardsCount' ? (
            <SortDirection sort={sortPacks} />
          ) : (
            ''
          )}
        </TableCell>

        <TableCell
          onClick={() => sortRows('updated', dispatch, sortPacks)}
          sx={{ cursor: 'pointer' }}
        >
          Last Updated
          {sortPacks === '0updated' || sortPacks === '1updated' ? (
            <SortDirection sort={sortPacks} />
          ) : (
            ''
          )}
        </TableCell>

        <TableCell
          onClick={() => sortRows('user_name', dispatch, sortPacks)}
          sx={{ cursor: 'pointer' }}
        >
          Created by
          {sortPacks === '0user_name' || sortPacks === '1user_name' ? (
            <SortDirection sort={sortPacks} />
          ) : (
            ''
          )}
        </TableCell>
        <TableCell align="center">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};
