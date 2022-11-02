import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { SortDirection } from '../../../common/components/sortDirection/SortDirection';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { sortRows } from '../../../common/utils/sortRows';

type CardsTableHeaderType = {
  isMyPack: boolean;
};

export const CardsTableHeader = ({ isMyPack }: CardsTableHeaderType): ReturnComponentType => {
  const sortCards = useAppSelector(state => state.card.sortCards);

  const dispatch = useAppDispatch();

  return (
    <TableHead>
      <TableRow sx={{ background: '#EFEFEF' }}>
        <TableCell onClick={() => sortRows('question', dispatch, sortCards)}>
          Question
          {sortCards === '0question' || sortCards === '1question' ? (
            <SortDirection sort={sortCards} />
          ) : (
            ''
          )}
        </TableCell>

        <TableCell onClick={() => sortRows('answer', dispatch, sortCards)}>
          Answer
          {sortCards === '0answer' || sortCards === '1answer' ? (
            <SortDirection sort={sortCards} />
          ) : (
            ''
          )}
        </TableCell>

        <TableCell onClick={() => sortRows('updatedCard', dispatch, sortCards)}>
          Last Updated
          {sortCards === '0updated' || sortCards === '1updated' ? (
            <SortDirection sort={sortCards} />
          ) : (
            ''
          )}
        </TableCell>

        <TableCell>Grade</TableCell>
        {isMyPack && <TableCell align="center">Actions</TableCell>}
      </TableRow>
    </TableHead>
  );
};
